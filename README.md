# tinkoff-invest-api
Node.js клиент для работы с [Tinkoff Invest API](https://tinkoff.github.io/investAPI/).

<!-- toc -->

- [Установка](#%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0)
- [Использование](#%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)
  * [Подключение](#%D0%BF%D0%BE%D0%B4%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%BD%D0%B8%D0%B5)
  * [Unary-запросы](#unary-%D0%B7%D0%B0%D0%BF%D1%80%D0%BE%D1%81%D1%8B)
  * [Стрим](#%D1%81%D1%82%D1%80%D0%B8%D0%BC)
  * [Универсальный счет](#%D1%83%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D1%81%D1%87%D0%B5%D1%82)
  * [Кеширование свечей](#%D0%BA%D0%B5%D1%88%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D1%81%D0%B2%D0%B5%D1%87%D0%B5%D0%B9)
  * [Бэктест](#%D0%B1%D1%8D%D0%BA%D1%82%D0%B5%D1%81%D1%82)
- [Лицензия](#%D0%BB%D0%B8%D1%86%D0%B5%D0%BD%D0%B7%D0%B8%D1%8F)

<!-- tocstop -->

## Установка
```
npm i tinkoff-invest-api
```
> Примечание: библиотека поставляется в формате [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)

## Использование
### Подключение
```ts
import { TinkoffInvestApi } from 'tinkoff-invest-api';

// создать клиента с заданным токеном
const api = new TinkoffInvestApi({ token: '<your-token>' });
```

### Unary-запросы
```ts
// получить список счетов
const { accounts } = await api.users.getAccounts({});

// получить портфель по id счета
const portfolio = await api.operations.getPortfolio({ accountId: accounts[0].id });

// получить 1-минутные свечи за последние 5 мин для акций Тинкофф Групп
const { candles } = await api.marketdata.getCandles({
  figi: 'BBG00QPYJ5H0',
  interval: CandleInterval.CANDLE_INTERVAL_1_MIN,
  ...api.helpers.fromTo('-5m'),
});
```

### Стрим
Для работы со стримом сделана обертка `api.stream`:
```ts
// подписка на свечи
api.stream.market.watch({ candles: [
  { figi: 'BBG00QPYJ5H0', interval: SubscriptionInterval.SUBSCRIPTION_INTERVAL_ONE_MINUTE }
]});

// обработка событий
api.stream.market.on('data', data => console.log(data));

// закрыть соединение через 3 сек
setTimeout(() => api.stream.market.cancel(), 3000);
```
> Примечание: со стримом можно работать и напрямую через `api.marketdataStream`. Но там `AsyncIterable`, которые менее удобны кмк.

### Универсальный счет
Для бесшовной работы со счетами в бою и песочнице сделан универсальный интерфейс `TinkoffAccount`.

```ts
import { TinkoffAccount, RealAccount, SandboxAccount } from 'tinkoff-invest-api';
import { OrderDirection, OrderType } from 'tinkoff-invest-api/dist/generated/orders.js';

// создать экземпляр счета: боевого или в песочнице
const account: TinkoffAccount = process.env.USE_REAL_ACCOUNT
    ? new RealAccount(api, '<real-account-id>')
    : new SandboxAccount(api, '<sandbox-account-id>');

// получить портфель
const protfolio = await account.getPortfolio();

// получить список заявок
const { orders } = await account.getOrders();

// создать лимит-заявку на покупку 1 лота по цене 100
const order = await account.postOrder({
  figi: 'BBG00QPYJ5H0',
  quantity: 1,
  price: api.helpers.toQuotation(100),
  direction: OrderDirection.ORDER_DIRECTION_BUY,
  orderType: OrderType.ORDER_TYPE_LIMIT,
  orderId: '<random-id>',
});
```

### Кеширование свечей
Кеширование свечей позволяет сократить кол-во запросов к API, а также более удобно получать необходимые свечи за любой период времени. Для этого нужно использовать класс `CandlesLoader`:
```ts
import { TinkoffInvestApi, CandlesLoader } from 'tinkoff-invest-api';

const api = new TinkoffInvestApi({ token: '<your-token>' });

// создать инстанс загрузчика свечей
const candlesLoader = new CandlesLoader(api, { cacheDir: '.candles' });

// загрузить минимум 100 последних свечей (в понедельник будут использованы данные пятницы)
const { candles } = await candlesLoader.getCandles({
  figi: 'BBG004730N88',
  interval: CandleInterval.CANDLE_INTERVAL_15_MIN,
  minCount: 100,
});
```

### Бэктест
Встроенный модуль для бэктеста позволяет протестировать стратегию на исторических данных, не внося изменений в код стратегии. Класс `Backtest` подменяет API и имитирует торги:

* появление новых свечей
* прием и исполнение заявок
* списание комиссий
* рассчет стоимости портфеля

Перед началом бэктеста необходимо загрузить данные в локальные файлы:
```ts
// загружаем в файл список всех акций
const { instruments: shares } = await api.instruments.shares({ instrumentStatus: InstrumentStatus.INSTRUMENT_STATUS_BASE });
fs.writeFileSync('data/shares.json', JSON.stringify(shares, null, 2));

// загружаем в файл минутные свечи по заданной акции
const { candles } = await api.marketdata.getCandles({
  figi: 'BBG00QPYJ5H0',
  interval: CandleInterval.CANDLE_INTERVAL_1_MIN,
  ...api.helpers.fromTo('1d', new Date('2022-05-06T10:00:00+03:00'))
});
fs.writeFileSync(`data/candles.json`, JSON.stringify(candles, null, 2));
```

Теперь можно запускать бэктест:
```ts
import { Backtest } from 'tinkoff-invest-api';
import { YourRobot } from './robot.js';

// Создаем инстанс бэктеста, передавая исторические свечи и инструменты
const backtest = new Backtest({
  candles: 'test/data/candles.json',
  instruments: { shares: 'test/data/shares.json' },
  initialCandleIndex: 50,
  brokerFee: 0.3,
});

// Создаем инстанс робота (стратегии), передавая замоканное API Тинькофф инвестиций
const robot = new YourRobot({ api: backtest.api });

main();

async function main() {
  // Запускаем цикл по всем свечам
  while (await backtest.tick()) {
    await robot.runStrategy();
  }
  // Рассчитываем прибыль в %
  const capital = await backtest.getCapital();
  const precent = 100 * (capital - backtest.options.initialCapital) / backtest.options.initialCapital
  console.log(`Капитал: ${capital} (${precent.toFixed(2)}%)`);
}
```

## Лицензия
MIT @ [Vitaliy Potapov](https://github.com/vitalets)
