/**
 * Класс для подписок на realtime marketdata.
 * See: https://tinkoff.github.io/investAPI/marketdata/#marketdataservice
 */
import { BaseStream } from './base.js';
import { MarketSubscription } from './market-subscription.js';
import {
  Candle,
  CandleInstrument,
  CandleSubscription,
  InfoInstrument,
  InfoSubscription,
  LastPrice,
  LastPriceInstrument,
  LastPriceSubscription,
  MarketDataRequest,
  MarketDataResponse,
  OrderBook,
  OrderBookInstrument,
  OrderBookSubscription,
  SubscribeCandlesRequest,
  SubscribeInfoRequest,
  SubscribeLastPriceRequest,
  SubscribeOrderBookRequest,
  SubscribeTradesRequest,
  SubscriptionAction,
  Trade,
  TradeInstrument,
  TradeSubscription,
  TradingStatus
} from '../generated/marketdata.js';
import { TinkoffInvestApi } from '../api.js';

type SubscribeRequest = Required<MarketDataRequest>[keyof MarketDataRequest];
type WithoutAction<T extends SubscribeRequest> = Omit<T, 'subscriptionAction'>

export class MarketStream extends BaseStream<MarketDataRequest, MarketDataResponse> {
  options = {
    autoReconnect: true,
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  subscriptions = new Set<MarketSubscription<any, any>>();

  constructor(public api: TinkoffInvestApi) {
    super(api);
    this.emitter.on('close', error => this.onClose(error));
  }

  /**
   * Подписка на свечи.
   */
  async candles(req: WithoutAction<SubscribeCandlesRequest>, dataHandler: (candle: Candle) => unknown) {
    const getKey = ({ figi, interval }: CandleInstrument | CandleSubscription | Candle) => `${figi}_${interval}`;
    const subscription = new MarketSubscription<CandleSubscription, Candle>({
      requestKeys: req.instruments.map(getKey),
      dataHandler,
      buildRequest: subscriptionAction => ({ subscribeCandlesRequest: { subscriptionAction, ...req }}),
      buildResponse: ({ candle, subscribeCandlesResponse }) => {
        const { trackingId, candlesSubscriptions: subscriptions } = subscribeCandlesResponse || {};
        return {
          trackingId,
          subscriptions,
          subscriptionKeys: subscriptions && subscriptions.map(getKey),
          data: candle,
          dataKey: candle && getKey(candle),
        };
      },
    });
    return this.watch(subscription);
  }

  /**
   * Подписка на сделки.
   */
  async trades(req: WithoutAction<SubscribeTradesRequest>, dataHandler: (trade: Trade) => unknown) {
    const getKey = ({ figi }: TradeInstrument | TradeSubscription | Trade) => figi;
    const subscription = new MarketSubscription<TradeSubscription, Trade>({
      requestKeys: req.instruments.map(getKey),
      dataHandler,
      buildRequest: subscriptionAction => ({ subscribeTradesRequest: { subscriptionAction, ...req }}),
      buildResponse: ({ trade, subscribeTradesResponse }) => {
        const { trackingId, tradeSubscriptions: subscriptions } = subscribeTradesResponse || {};
        return {
          trackingId,
          subscriptions,
          subscriptionKeys: subscriptions && subscriptions.map(getKey),
          data: trade,
          dataKey: trade && getKey(trade),
        };
      },
    });
    return this.watch(subscription);
  }

  /**
   * Подписка на стакан.
   */
   async orderBook(req: WithoutAction<SubscribeOrderBookRequest>, dataHandler: (orderbook: OrderBook) => unknown) {
    const getKey = ({ figi, depth }: OrderBookInstrument | OrderBookSubscription | OrderBook) => `${figi}_${depth}`;
    const subscription = new MarketSubscription<OrderBookSubscription, OrderBook>({
      requestKeys: req.instruments.map(getKey),
      dataHandler,
      buildRequest: subscriptionAction => ({ subscribeOrderBookRequest: { subscriptionAction, ...req }}),
      buildResponse: ({ orderbook, subscribeOrderBookResponse }) => {
        const { trackingId, orderBookSubscriptions: subscriptions } = subscribeOrderBookResponse || {};
        return {
          trackingId,
          subscriptions,
          subscriptionKeys: subscriptions && subscriptions.map(getKey),
          data: orderbook,
          dataKey: orderbook && getKey(orderbook),
        };
      },
    });
    return this.watch(subscription);
  }

  /**
   * Подписка на цены.
   */
   async lastPrice(req: WithoutAction<SubscribeLastPriceRequest>, dataHandler: (lastPrice: LastPrice) => unknown) {
    const getKey = ({ figi }: LastPriceInstrument | LastPriceSubscription | LastPrice) => figi;
    const subscription = new MarketSubscription<LastPriceSubscription, LastPrice>({
      requestKeys: req.instruments.map(getKey),
      dataHandler,
      buildRequest: subscriptionAction => ({ subscribeLastPriceRequest: { subscriptionAction, ...req }}),
      buildResponse: ({ lastPrice, subscribeLastPriceResponse }) => {
        const { trackingId, lastPriceSubscriptions: subscriptions } = subscribeLastPriceResponse || {};
        return {
          trackingId,
          subscriptions,
          subscriptionKeys: subscriptions && subscriptions.map(getKey),
          data: lastPrice,
          dataKey: lastPrice && getKey(lastPrice),
        };
      },
    });
    return this.watch(subscription);
  }

  /**
   * Подписка на информацию об инструменте.
   */
   async info(req: WithoutAction<SubscribeInfoRequest>, dataHandler: (tradingStatus: TradingStatus) => unknown) {
    const getKey = ({ figi }: InfoInstrument | InfoSubscription | TradingStatus) => figi;
    const subscription = new MarketSubscription<InfoSubscription, TradingStatus>({
      requestKeys: req.instruments.map(getKey),
      dataHandler,
      buildRequest: subscriptionAction => ({ subscribeInfoRequest: { subscriptionAction, ...req }}),
      buildResponse: ({ tradingStatus, subscribeInfoResponse }) => {
        const { trackingId, infoSubscriptions: subscriptions } = subscribeInfoResponse || {};
        return {
          trackingId,
          subscriptions,
          subscriptionKeys: subscriptions && subscriptions.map(getKey),
          data: tradingStatus,
          dataKey: tradingStatus && getKey(tradingStatus),
        };
      },
    });
    return this.watch(subscription);
  }

  async reconnect() {
    // todo: check that subscription listeners removed (to avoid duplicate listeners)
    for (const subscription of this.subscriptions) {
      await this.watch(subscription);
    }
  }

  protected ensureConnected() {
    if (!this.connected) {
      const req = this.createRequestIterable();
      const call = this.api.marketdataStream.marketDataStream(req);
      this.waitEvents(call);
    }
  }

  protected onClose(error?: Error) {
    this.subscriptions.forEach(subscription => this.off('data', subscription.handler));
    if (error && this.options.autoReconnect) {
      // todo: use exponential backoff
      this.reconnect();
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected async watch(subscription: MarketSubscription<any, any>) {
    this.ensureConnected();
    this.sendRequest(subscription.getRequest(SubscriptionAction.SUBSCRIPTION_ACTION_SUBSCRIBE));
    this.on('data', subscription.handler);
    try {
      await subscription.waitStatus();
    } catch (e) {
      this.off('data', subscription.handler);
      throw e;
    }
    this.subscriptions.add(subscription);
    return () => this.unwatch(subscription);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected async unwatch(subscription: MarketSubscription<any, any>) {
    this.sendRequest(subscription.getRequest(SubscriptionAction.SUBSCRIPTION_ACTION_UNSUBSCRIBE));
    await subscription.waitStatus();
    this.off('data', subscription.handler);
    this.subscriptions.delete(subscription);
  }
}
