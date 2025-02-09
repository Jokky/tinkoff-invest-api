/* eslint-disable */
import Long from "long";
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal.js";
import {
  InstrumentType,
  instrumentTypeFromJSON,
  instrumentTypeToJSON,
  MoneyValue,
  Quotation,
  SecurityTradingStatus,
  securityTradingStatusFromJSON,
  securityTradingStatusToJSON,
} from "./common.js";
import { Timestamp } from "./google/protobuf/timestamp.js";

export const protobufPackage = "tinkoff.public.invest.api.contract.v1";

/** Тип купонов. */
export enum CouponType {
  /** COUPON_TYPE_UNSPECIFIED - Неопределенное значение */
  COUPON_TYPE_UNSPECIFIED = 0,
  /** COUPON_TYPE_CONSTANT - Постоянный */
  COUPON_TYPE_CONSTANT = 1,
  /** COUPON_TYPE_FLOATING - Плавающий */
  COUPON_TYPE_FLOATING = 2,
  /** COUPON_TYPE_DISCOUNT - Дисконт */
  COUPON_TYPE_DISCOUNT = 3,
  /** COUPON_TYPE_MORTGAGE - Ипотечный */
  COUPON_TYPE_MORTGAGE = 4,
  /** COUPON_TYPE_FIX - Фиксированный */
  COUPON_TYPE_FIX = 5,
  /** COUPON_TYPE_VARIABLE - Переменный */
  COUPON_TYPE_VARIABLE = 6,
  /** COUPON_TYPE_OTHER - Прочее */
  COUPON_TYPE_OTHER = 7,
  UNRECOGNIZED = -1,
}

export function couponTypeFromJSON(object: any): CouponType {
  switch (object) {
    case 0:
    case "COUPON_TYPE_UNSPECIFIED":
      return CouponType.COUPON_TYPE_UNSPECIFIED;
    case 1:
    case "COUPON_TYPE_CONSTANT":
      return CouponType.COUPON_TYPE_CONSTANT;
    case 2:
    case "COUPON_TYPE_FLOATING":
      return CouponType.COUPON_TYPE_FLOATING;
    case 3:
    case "COUPON_TYPE_DISCOUNT":
      return CouponType.COUPON_TYPE_DISCOUNT;
    case 4:
    case "COUPON_TYPE_MORTGAGE":
      return CouponType.COUPON_TYPE_MORTGAGE;
    case 5:
    case "COUPON_TYPE_FIX":
      return CouponType.COUPON_TYPE_FIX;
    case 6:
    case "COUPON_TYPE_VARIABLE":
      return CouponType.COUPON_TYPE_VARIABLE;
    case 7:
    case "COUPON_TYPE_OTHER":
      return CouponType.COUPON_TYPE_OTHER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CouponType.UNRECOGNIZED;
  }
}

export function couponTypeToJSON(object: CouponType): string {
  switch (object) {
    case CouponType.COUPON_TYPE_UNSPECIFIED:
      return "COUPON_TYPE_UNSPECIFIED";
    case CouponType.COUPON_TYPE_CONSTANT:
      return "COUPON_TYPE_CONSTANT";
    case CouponType.COUPON_TYPE_FLOATING:
      return "COUPON_TYPE_FLOATING";
    case CouponType.COUPON_TYPE_DISCOUNT:
      return "COUPON_TYPE_DISCOUNT";
    case CouponType.COUPON_TYPE_MORTGAGE:
      return "COUPON_TYPE_MORTGAGE";
    case CouponType.COUPON_TYPE_FIX:
      return "COUPON_TYPE_FIX";
    case CouponType.COUPON_TYPE_VARIABLE:
      return "COUPON_TYPE_VARIABLE";
    case CouponType.COUPON_TYPE_OTHER:
      return "COUPON_TYPE_OTHER";
    case CouponType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Тип опциона по направлению сделки. */
export enum OptionDirection {
  /** OPTION_DIRECTION_UNSPECIFIED - Тип не определен. */
  OPTION_DIRECTION_UNSPECIFIED = 0,
  /** OPTION_DIRECTION_PUT - Опцион на продажу. */
  OPTION_DIRECTION_PUT = 1,
  /** OPTION_DIRECTION_CALL - Опцион на покупку. */
  OPTION_DIRECTION_CALL = 2,
  UNRECOGNIZED = -1,
}

export function optionDirectionFromJSON(object: any): OptionDirection {
  switch (object) {
    case 0:
    case "OPTION_DIRECTION_UNSPECIFIED":
      return OptionDirection.OPTION_DIRECTION_UNSPECIFIED;
    case 1:
    case "OPTION_DIRECTION_PUT":
      return OptionDirection.OPTION_DIRECTION_PUT;
    case 2:
    case "OPTION_DIRECTION_CALL":
      return OptionDirection.OPTION_DIRECTION_CALL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OptionDirection.UNRECOGNIZED;
  }
}

export function optionDirectionToJSON(object: OptionDirection): string {
  switch (object) {
    case OptionDirection.OPTION_DIRECTION_UNSPECIFIED:
      return "OPTION_DIRECTION_UNSPECIFIED";
    case OptionDirection.OPTION_DIRECTION_PUT:
      return "OPTION_DIRECTION_PUT";
    case OptionDirection.OPTION_DIRECTION_CALL:
      return "OPTION_DIRECTION_CALL";
    case OptionDirection.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Тип расчетов по опциону. */
export enum OptionPaymentType {
  /** OPTION_PAYMENT_TYPE_UNSPECIFIED - Тип не определен. */
  OPTION_PAYMENT_TYPE_UNSPECIFIED = 0,
  /** OPTION_PAYMENT_TYPE_PREMIUM - Опционы с использованием премии в расчетах. */
  OPTION_PAYMENT_TYPE_PREMIUM = 1,
  /** OPTION_PAYMENT_TYPE_MARGINAL - Маржируемые опционы. */
  OPTION_PAYMENT_TYPE_MARGINAL = 2,
  UNRECOGNIZED = -1,
}

export function optionPaymentTypeFromJSON(object: any): OptionPaymentType {
  switch (object) {
    case 0:
    case "OPTION_PAYMENT_TYPE_UNSPECIFIED":
      return OptionPaymentType.OPTION_PAYMENT_TYPE_UNSPECIFIED;
    case 1:
    case "OPTION_PAYMENT_TYPE_PREMIUM":
      return OptionPaymentType.OPTION_PAYMENT_TYPE_PREMIUM;
    case 2:
    case "OPTION_PAYMENT_TYPE_MARGINAL":
      return OptionPaymentType.OPTION_PAYMENT_TYPE_MARGINAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OptionPaymentType.UNRECOGNIZED;
  }
}

export function optionPaymentTypeToJSON(object: OptionPaymentType): string {
  switch (object) {
    case OptionPaymentType.OPTION_PAYMENT_TYPE_UNSPECIFIED:
      return "OPTION_PAYMENT_TYPE_UNSPECIFIED";
    case OptionPaymentType.OPTION_PAYMENT_TYPE_PREMIUM:
      return "OPTION_PAYMENT_TYPE_PREMIUM";
    case OptionPaymentType.OPTION_PAYMENT_TYPE_MARGINAL:
      return "OPTION_PAYMENT_TYPE_MARGINAL";
    case OptionPaymentType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Тип опциона по стилю. */
export enum OptionStyle {
  /** OPTION_STYLE_UNSPECIFIED - Тип не определен. */
  OPTION_STYLE_UNSPECIFIED = 0,
  /** OPTION_STYLE_AMERICAN - Американский опцион. */
  OPTION_STYLE_AMERICAN = 1,
  /** OPTION_STYLE_EUROPEAN - Европейский опцион. */
  OPTION_STYLE_EUROPEAN = 2,
  UNRECOGNIZED = -1,
}

export function optionStyleFromJSON(object: any): OptionStyle {
  switch (object) {
    case 0:
    case "OPTION_STYLE_UNSPECIFIED":
      return OptionStyle.OPTION_STYLE_UNSPECIFIED;
    case 1:
    case "OPTION_STYLE_AMERICAN":
      return OptionStyle.OPTION_STYLE_AMERICAN;
    case 2:
    case "OPTION_STYLE_EUROPEAN":
      return OptionStyle.OPTION_STYLE_EUROPEAN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OptionStyle.UNRECOGNIZED;
  }
}

export function optionStyleToJSON(object: OptionStyle): string {
  switch (object) {
    case OptionStyle.OPTION_STYLE_UNSPECIFIED:
      return "OPTION_STYLE_UNSPECIFIED";
    case OptionStyle.OPTION_STYLE_AMERICAN:
      return "OPTION_STYLE_AMERICAN";
    case OptionStyle.OPTION_STYLE_EUROPEAN:
      return "OPTION_STYLE_EUROPEAN";
    case OptionStyle.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Тип опциона по способу исполнения. */
export enum OptionSettlementType {
  /** OPTION_EXECUTION_TYPE_UNSPECIFIED - Тип не определен. */
  OPTION_EXECUTION_TYPE_UNSPECIFIED = 0,
  /** OPTION_EXECUTION_TYPE_PHYSICAL_DELIVERY - Поставочный тип опциона. */
  OPTION_EXECUTION_TYPE_PHYSICAL_DELIVERY = 1,
  /** OPTION_EXECUTION_TYPE_CASH_SETTLEMENT - Расчетный тип опциона. */
  OPTION_EXECUTION_TYPE_CASH_SETTLEMENT = 2,
  UNRECOGNIZED = -1,
}

export function optionSettlementTypeFromJSON(object: any): OptionSettlementType {
  switch (object) {
    case 0:
    case "OPTION_EXECUTION_TYPE_UNSPECIFIED":
      return OptionSettlementType.OPTION_EXECUTION_TYPE_UNSPECIFIED;
    case 1:
    case "OPTION_EXECUTION_TYPE_PHYSICAL_DELIVERY":
      return OptionSettlementType.OPTION_EXECUTION_TYPE_PHYSICAL_DELIVERY;
    case 2:
    case "OPTION_EXECUTION_TYPE_CASH_SETTLEMENT":
      return OptionSettlementType.OPTION_EXECUTION_TYPE_CASH_SETTLEMENT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OptionSettlementType.UNRECOGNIZED;
  }
}

export function optionSettlementTypeToJSON(object: OptionSettlementType): string {
  switch (object) {
    case OptionSettlementType.OPTION_EXECUTION_TYPE_UNSPECIFIED:
      return "OPTION_EXECUTION_TYPE_UNSPECIFIED";
    case OptionSettlementType.OPTION_EXECUTION_TYPE_PHYSICAL_DELIVERY:
      return "OPTION_EXECUTION_TYPE_PHYSICAL_DELIVERY";
    case OptionSettlementType.OPTION_EXECUTION_TYPE_CASH_SETTLEMENT:
      return "OPTION_EXECUTION_TYPE_CASH_SETTLEMENT";
    case OptionSettlementType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Тип идентификатора инструмента. Подробнее об идентификации инструментов: [Идентификация инструментов](https://tinkoff.github.io/investAPI/faq_identification/) */
export enum InstrumentIdType {
  /** INSTRUMENT_ID_UNSPECIFIED - Значение не определено. */
  INSTRUMENT_ID_UNSPECIFIED = 0,
  /** INSTRUMENT_ID_TYPE_FIGI - Figi. */
  INSTRUMENT_ID_TYPE_FIGI = 1,
  /** INSTRUMENT_ID_TYPE_TICKER - Ticker. */
  INSTRUMENT_ID_TYPE_TICKER = 2,
  /** INSTRUMENT_ID_TYPE_UID - Уникальный идентификатор. */
  INSTRUMENT_ID_TYPE_UID = 3,
  /** INSTRUMENT_ID_TYPE_POSITION_UID - Идентификатор позиции. */
  INSTRUMENT_ID_TYPE_POSITION_UID = 4,
  UNRECOGNIZED = -1,
}

export function instrumentIdTypeFromJSON(object: any): InstrumentIdType {
  switch (object) {
    case 0:
    case "INSTRUMENT_ID_UNSPECIFIED":
      return InstrumentIdType.INSTRUMENT_ID_UNSPECIFIED;
    case 1:
    case "INSTRUMENT_ID_TYPE_FIGI":
      return InstrumentIdType.INSTRUMENT_ID_TYPE_FIGI;
    case 2:
    case "INSTRUMENT_ID_TYPE_TICKER":
      return InstrumentIdType.INSTRUMENT_ID_TYPE_TICKER;
    case 3:
    case "INSTRUMENT_ID_TYPE_UID":
      return InstrumentIdType.INSTRUMENT_ID_TYPE_UID;
    case 4:
    case "INSTRUMENT_ID_TYPE_POSITION_UID":
      return InstrumentIdType.INSTRUMENT_ID_TYPE_POSITION_UID;
    case -1:
    case "UNRECOGNIZED":
    default:
      return InstrumentIdType.UNRECOGNIZED;
  }
}

export function instrumentIdTypeToJSON(object: InstrumentIdType): string {
  switch (object) {
    case InstrumentIdType.INSTRUMENT_ID_UNSPECIFIED:
      return "INSTRUMENT_ID_UNSPECIFIED";
    case InstrumentIdType.INSTRUMENT_ID_TYPE_FIGI:
      return "INSTRUMENT_ID_TYPE_FIGI";
    case InstrumentIdType.INSTRUMENT_ID_TYPE_TICKER:
      return "INSTRUMENT_ID_TYPE_TICKER";
    case InstrumentIdType.INSTRUMENT_ID_TYPE_UID:
      return "INSTRUMENT_ID_TYPE_UID";
    case InstrumentIdType.INSTRUMENT_ID_TYPE_POSITION_UID:
      return "INSTRUMENT_ID_TYPE_POSITION_UID";
    case InstrumentIdType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Статус запрашиваемых инструментов. */
export enum InstrumentStatus {
  /** INSTRUMENT_STATUS_UNSPECIFIED - Значение не определено. */
  INSTRUMENT_STATUS_UNSPECIFIED = 0,
  /** INSTRUMENT_STATUS_BASE - Базовый список инструментов (по умолчанию). Инструменты доступные для торговли через TINKOFF INVEST API. Cейчас списки бумаг, доступных из api и других интерфейсах совпадают (за исключением внебиржевых бумаг), но в будущем возможны ситуации, когда списки инструментов будут отличаться */
  INSTRUMENT_STATUS_BASE = 1,
  /** INSTRUMENT_STATUS_ALL - Список всех инструментов. */
  INSTRUMENT_STATUS_ALL = 2,
  UNRECOGNIZED = -1,
}

export function instrumentStatusFromJSON(object: any): InstrumentStatus {
  switch (object) {
    case 0:
    case "INSTRUMENT_STATUS_UNSPECIFIED":
      return InstrumentStatus.INSTRUMENT_STATUS_UNSPECIFIED;
    case 1:
    case "INSTRUMENT_STATUS_BASE":
      return InstrumentStatus.INSTRUMENT_STATUS_BASE;
    case 2:
    case "INSTRUMENT_STATUS_ALL":
      return InstrumentStatus.INSTRUMENT_STATUS_ALL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return InstrumentStatus.UNRECOGNIZED;
  }
}

export function instrumentStatusToJSON(object: InstrumentStatus): string {
  switch (object) {
    case InstrumentStatus.INSTRUMENT_STATUS_UNSPECIFIED:
      return "INSTRUMENT_STATUS_UNSPECIFIED";
    case InstrumentStatus.INSTRUMENT_STATUS_BASE:
      return "INSTRUMENT_STATUS_BASE";
    case InstrumentStatus.INSTRUMENT_STATUS_ALL:
      return "INSTRUMENT_STATUS_ALL";
    case InstrumentStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Тип акций. */
export enum ShareType {
  /** SHARE_TYPE_UNSPECIFIED - Значение не определено. */
  SHARE_TYPE_UNSPECIFIED = 0,
  /** SHARE_TYPE_COMMON - Обыкновенная */
  SHARE_TYPE_COMMON = 1,
  /** SHARE_TYPE_PREFERRED - Привилегированная */
  SHARE_TYPE_PREFERRED = 2,
  /** SHARE_TYPE_ADR - Американские депозитарные расписки */
  SHARE_TYPE_ADR = 3,
  /** SHARE_TYPE_GDR - Глобальные депозитарные расписки */
  SHARE_TYPE_GDR = 4,
  /** SHARE_TYPE_MLP - Товарищество с ограниченной ответственностью */
  SHARE_TYPE_MLP = 5,
  /** SHARE_TYPE_NY_REG_SHRS - Акции из реестра Нью-Йорка */
  SHARE_TYPE_NY_REG_SHRS = 6,
  /** SHARE_TYPE_CLOSED_END_FUND - Закрытый инвестиционный фонд */
  SHARE_TYPE_CLOSED_END_FUND = 7,
  /** SHARE_TYPE_REIT - Траст недвижимости */
  SHARE_TYPE_REIT = 8,
  UNRECOGNIZED = -1,
}

export function shareTypeFromJSON(object: any): ShareType {
  switch (object) {
    case 0:
    case "SHARE_TYPE_UNSPECIFIED":
      return ShareType.SHARE_TYPE_UNSPECIFIED;
    case 1:
    case "SHARE_TYPE_COMMON":
      return ShareType.SHARE_TYPE_COMMON;
    case 2:
    case "SHARE_TYPE_PREFERRED":
      return ShareType.SHARE_TYPE_PREFERRED;
    case 3:
    case "SHARE_TYPE_ADR":
      return ShareType.SHARE_TYPE_ADR;
    case 4:
    case "SHARE_TYPE_GDR":
      return ShareType.SHARE_TYPE_GDR;
    case 5:
    case "SHARE_TYPE_MLP":
      return ShareType.SHARE_TYPE_MLP;
    case 6:
    case "SHARE_TYPE_NY_REG_SHRS":
      return ShareType.SHARE_TYPE_NY_REG_SHRS;
    case 7:
    case "SHARE_TYPE_CLOSED_END_FUND":
      return ShareType.SHARE_TYPE_CLOSED_END_FUND;
    case 8:
    case "SHARE_TYPE_REIT":
      return ShareType.SHARE_TYPE_REIT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ShareType.UNRECOGNIZED;
  }
}

export function shareTypeToJSON(object: ShareType): string {
  switch (object) {
    case ShareType.SHARE_TYPE_UNSPECIFIED:
      return "SHARE_TYPE_UNSPECIFIED";
    case ShareType.SHARE_TYPE_COMMON:
      return "SHARE_TYPE_COMMON";
    case ShareType.SHARE_TYPE_PREFERRED:
      return "SHARE_TYPE_PREFERRED";
    case ShareType.SHARE_TYPE_ADR:
      return "SHARE_TYPE_ADR";
    case ShareType.SHARE_TYPE_GDR:
      return "SHARE_TYPE_GDR";
    case ShareType.SHARE_TYPE_MLP:
      return "SHARE_TYPE_MLP";
    case ShareType.SHARE_TYPE_NY_REG_SHRS:
      return "SHARE_TYPE_NY_REG_SHRS";
    case ShareType.SHARE_TYPE_CLOSED_END_FUND:
      return "SHARE_TYPE_CLOSED_END_FUND";
    case ShareType.SHARE_TYPE_REIT:
      return "SHARE_TYPE_REIT";
    case ShareType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Тип актива. */
export enum AssetType {
  /** ASSET_TYPE_UNSPECIFIED - Тип не определён. */
  ASSET_TYPE_UNSPECIFIED = 0,
  /** ASSET_TYPE_CURRENCY - Валюта. */
  ASSET_TYPE_CURRENCY = 1,
  /** ASSET_TYPE_COMMODITY - Товар. */
  ASSET_TYPE_COMMODITY = 2,
  /** ASSET_TYPE_INDEX - Индекс. */
  ASSET_TYPE_INDEX = 3,
  /** ASSET_TYPE_SECURITY - Ценная бумага. */
  ASSET_TYPE_SECURITY = 4,
  UNRECOGNIZED = -1,
}

export function assetTypeFromJSON(object: any): AssetType {
  switch (object) {
    case 0:
    case "ASSET_TYPE_UNSPECIFIED":
      return AssetType.ASSET_TYPE_UNSPECIFIED;
    case 1:
    case "ASSET_TYPE_CURRENCY":
      return AssetType.ASSET_TYPE_CURRENCY;
    case 2:
    case "ASSET_TYPE_COMMODITY":
      return AssetType.ASSET_TYPE_COMMODITY;
    case 3:
    case "ASSET_TYPE_INDEX":
      return AssetType.ASSET_TYPE_INDEX;
    case 4:
    case "ASSET_TYPE_SECURITY":
      return AssetType.ASSET_TYPE_SECURITY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AssetType.UNRECOGNIZED;
  }
}

export function assetTypeToJSON(object: AssetType): string {
  switch (object) {
    case AssetType.ASSET_TYPE_UNSPECIFIED:
      return "ASSET_TYPE_UNSPECIFIED";
    case AssetType.ASSET_TYPE_CURRENCY:
      return "ASSET_TYPE_CURRENCY";
    case AssetType.ASSET_TYPE_COMMODITY:
      return "ASSET_TYPE_COMMODITY";
    case AssetType.ASSET_TYPE_INDEX:
      return "ASSET_TYPE_INDEX";
    case AssetType.ASSET_TYPE_SECURITY:
      return "ASSET_TYPE_SECURITY";
    case AssetType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Тип структурной ноты. */
export enum StructuredProductType {
  /** SP_TYPE_UNSPECIFIED - Тип не определён. */
  SP_TYPE_UNSPECIFIED = 0,
  /** SP_TYPE_DELIVERABLE - Поставочный. */
  SP_TYPE_DELIVERABLE = 1,
  /** SP_TYPE_NON_DELIVERABLE - Беспоставочный. */
  SP_TYPE_NON_DELIVERABLE = 2,
  UNRECOGNIZED = -1,
}

export function structuredProductTypeFromJSON(object: any): StructuredProductType {
  switch (object) {
    case 0:
    case "SP_TYPE_UNSPECIFIED":
      return StructuredProductType.SP_TYPE_UNSPECIFIED;
    case 1:
    case "SP_TYPE_DELIVERABLE":
      return StructuredProductType.SP_TYPE_DELIVERABLE;
    case 2:
    case "SP_TYPE_NON_DELIVERABLE":
      return StructuredProductType.SP_TYPE_NON_DELIVERABLE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StructuredProductType.UNRECOGNIZED;
  }
}

export function structuredProductTypeToJSON(object: StructuredProductType): string {
  switch (object) {
    case StructuredProductType.SP_TYPE_UNSPECIFIED:
      return "SP_TYPE_UNSPECIFIED";
    case StructuredProductType.SP_TYPE_DELIVERABLE:
      return "SP_TYPE_DELIVERABLE";
    case StructuredProductType.SP_TYPE_NON_DELIVERABLE:
      return "SP_TYPE_NON_DELIVERABLE";
    case StructuredProductType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Тип действия со списком избранных инструментов. */
export enum EditFavoritesActionType {
  /** EDIT_FAVORITES_ACTION_TYPE_UNSPECIFIED - Тип не определён. */
  EDIT_FAVORITES_ACTION_TYPE_UNSPECIFIED = 0,
  /** EDIT_FAVORITES_ACTION_TYPE_ADD - Добавить в список. */
  EDIT_FAVORITES_ACTION_TYPE_ADD = 1,
  /** EDIT_FAVORITES_ACTION_TYPE_DEL - Удалить из списка. */
  EDIT_FAVORITES_ACTION_TYPE_DEL = 2,
  UNRECOGNIZED = -1,
}

export function editFavoritesActionTypeFromJSON(object: any): EditFavoritesActionType {
  switch (object) {
    case 0:
    case "EDIT_FAVORITES_ACTION_TYPE_UNSPECIFIED":
      return EditFavoritesActionType.EDIT_FAVORITES_ACTION_TYPE_UNSPECIFIED;
    case 1:
    case "EDIT_FAVORITES_ACTION_TYPE_ADD":
      return EditFavoritesActionType.EDIT_FAVORITES_ACTION_TYPE_ADD;
    case 2:
    case "EDIT_FAVORITES_ACTION_TYPE_DEL":
      return EditFavoritesActionType.EDIT_FAVORITES_ACTION_TYPE_DEL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EditFavoritesActionType.UNRECOGNIZED;
  }
}

export function editFavoritesActionTypeToJSON(object: EditFavoritesActionType): string {
  switch (object) {
    case EditFavoritesActionType.EDIT_FAVORITES_ACTION_TYPE_UNSPECIFIED:
      return "EDIT_FAVORITES_ACTION_TYPE_UNSPECIFIED";
    case EditFavoritesActionType.EDIT_FAVORITES_ACTION_TYPE_ADD:
      return "EDIT_FAVORITES_ACTION_TYPE_ADD";
    case EditFavoritesActionType.EDIT_FAVORITES_ACTION_TYPE_DEL:
      return "EDIT_FAVORITES_ACTION_TYPE_DEL";
    case EditFavoritesActionType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Реальная площадка исполнения расчётов. */
export enum RealExchange {
  /** REAL_EXCHANGE_UNSPECIFIED - Тип не определён. */
  REAL_EXCHANGE_UNSPECIFIED = 0,
  /** REAL_EXCHANGE_MOEX - Московская биржа. */
  REAL_EXCHANGE_MOEX = 1,
  /** REAL_EXCHANGE_RTS - Санкт-Петербургская биржа. */
  REAL_EXCHANGE_RTS = 2,
  /** REAL_EXCHANGE_OTC - Внебиржевой инструмент. */
  REAL_EXCHANGE_OTC = 3,
  UNRECOGNIZED = -1,
}

export function realExchangeFromJSON(object: any): RealExchange {
  switch (object) {
    case 0:
    case "REAL_EXCHANGE_UNSPECIFIED":
      return RealExchange.REAL_EXCHANGE_UNSPECIFIED;
    case 1:
    case "REAL_EXCHANGE_MOEX":
      return RealExchange.REAL_EXCHANGE_MOEX;
    case 2:
    case "REAL_EXCHANGE_RTS":
      return RealExchange.REAL_EXCHANGE_RTS;
    case 3:
    case "REAL_EXCHANGE_OTC":
      return RealExchange.REAL_EXCHANGE_OTC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RealExchange.UNRECOGNIZED;
  }
}

export function realExchangeToJSON(object: RealExchange): string {
  switch (object) {
    case RealExchange.REAL_EXCHANGE_UNSPECIFIED:
      return "REAL_EXCHANGE_UNSPECIFIED";
    case RealExchange.REAL_EXCHANGE_MOEX:
      return "REAL_EXCHANGE_MOEX";
    case RealExchange.REAL_EXCHANGE_RTS:
      return "REAL_EXCHANGE_RTS";
    case RealExchange.REAL_EXCHANGE_OTC:
      return "REAL_EXCHANGE_OTC";
    case RealExchange.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Уровень риска облигации. */
export enum RiskLevel {
  /** RISK_LEVEL_HIGH - Высокий уровень риска */
  RISK_LEVEL_HIGH = 0,
  /** RISK_LEVEL_MODERATE - Средний уровень риска */
  RISK_LEVEL_MODERATE = 1,
  /** RISK_LEVEL_LOW - Низкий уровень риска */
  RISK_LEVEL_LOW = 2,
  UNRECOGNIZED = -1,
}

export function riskLevelFromJSON(object: any): RiskLevel {
  switch (object) {
    case 0:
    case "RISK_LEVEL_HIGH":
      return RiskLevel.RISK_LEVEL_HIGH;
    case 1:
    case "RISK_LEVEL_MODERATE":
      return RiskLevel.RISK_LEVEL_MODERATE;
    case 2:
    case "RISK_LEVEL_LOW":
      return RiskLevel.RISK_LEVEL_LOW;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RiskLevel.UNRECOGNIZED;
  }
}

export function riskLevelToJSON(object: RiskLevel): string {
  switch (object) {
    case RiskLevel.RISK_LEVEL_HIGH:
      return "RISK_LEVEL_HIGH";
    case RiskLevel.RISK_LEVEL_MODERATE:
      return "RISK_LEVEL_MODERATE";
    case RiskLevel.RISK_LEVEL_LOW:
      return "RISK_LEVEL_LOW";
    case RiskLevel.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Запрос расписания торгов. */
export interface TradingSchedulesRequest {
  /** Наименование биржи или расчетного календаря. </br>Если не передаётся, возвращается информация по всем доступным торговым площадкам. */
  exchange: string;
  /** Начало периода по часовому поясу UTC. */
  from?:
    | Date
    | undefined;
  /** Окончание периода по часовому поясу UTC. */
  to?: Date | undefined;
}

/** Список торговых площадок. */
export interface TradingSchedulesResponse {
  /** Список торговых площадок и режимов торгов. */
  exchanges: TradingSchedule[];
}

/** Данные по торговой площадке. */
export interface TradingSchedule {
  /** Наименование торговой площадки. */
  exchange: string;
  /** Массив с торговыми и неторговыми днями. */
  days: TradingDay[];
}

/** Информация о времени торгов. */
export interface TradingDay {
  /** Дата. */
  date?:
    | Date
    | undefined;
  /** Признак торгового дня на бирже. */
  isTradingDay: boolean;
  /** Время начала торгов по часовому поясу UTC. */
  startTime?:
    | Date
    | undefined;
  /** Время окончания торгов по часовому поясу UTC. */
  endTime?:
    | Date
    | undefined;
  /** Время начала аукциона открытия в часовом поясе UTC. */
  openingAuctionStartTime?:
    | Date
    | undefined;
  /** Время окончания аукциона закрытия в часовом поясе UTC. */
  closingAuctionEndTime?:
    | Date
    | undefined;
  /** Время начала аукциона открытия вечерней сессии в часовом поясе UTC. */
  eveningOpeningAuctionStartTime?:
    | Date
    | undefined;
  /** Время начала вечерней сессии в часовом поясе UTC. */
  eveningStartTime?:
    | Date
    | undefined;
  /** Время окончания вечерней сессии в часовом поясе UTC. */
  eveningEndTime?:
    | Date
    | undefined;
  /** Время начала основного клиринга в часовом поясе UTC. */
  clearingStartTime?:
    | Date
    | undefined;
  /** Время окончания основного клиринга в часовом поясе UTC. */
  clearingEndTime?:
    | Date
    | undefined;
  /** Время начала премаркета в часовом поясе UTC. */
  premarketStartTime?:
    | Date
    | undefined;
  /** Время окончания премаркета в часовом поясе UTC. */
  premarketEndTime?:
    | Date
    | undefined;
  /** Время начала аукциона закрытия в часовом поясе UTC. */
  closingAuctionStartTime?:
    | Date
    | undefined;
  /** Время окончания аукциона открытия в часовом поясе UTC. */
  openingAuctionEndTime?: Date | undefined;
}

/** Запрос получения инструмента по идентификатору. */
export interface InstrumentRequest {
  /** Тип идентификатора инструмента. Возможные значения: figi, ticker. Подробнее об идентификации инструментов: [Идентификация инструментов](https://tinkoff.github.io/investAPI/faq_identification/) */
  idType: InstrumentIdType;
  /** Идентификатор class_code. Обязателен при id_type = ticker. */
  classCode: string;
  /** Идентификатор запрашиваемого инструмента. */
  id: string;
}

/** Запрос получения инструментов. */
export interface InstrumentsRequest {
  /** Статус запрашиваемых инструментов. Возможные значения: [InstrumentStatus](#instrumentstatus) */
  instrumentStatus: InstrumentStatus;
}

/** Параметры фильтрации опционов */
export interface FilterOptionsRequest {
  /** Идентификатор базового актива опциона.  Обязательный параметр. */
  basicAssetUid: string;
  /** Идентификатор позиции базового актива опциона */
  basicAssetPositionUid: string;
}

/** Информация об облигации. */
export interface BondResponse {
  /** Информация об облигации. */
  instrument?: Bond | undefined;
}

/** Список облигаций. */
export interface BondsResponse {
  /** Массив облигаций. */
  instruments: Bond[];
}

/** Запрос купонов по облигации. */
export interface GetBondCouponsRequest {
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Начало запрашиваемого периода в часовом поясе UTC. Фильтрация по coupon_date (дата выплаты купона) */
  from?:
    | Date
    | undefined;
  /** Окончание запрашиваемого периода в часовом поясе UTC. Фильтрация по coupon_date (дата выплаты купона) */
  to?: Date | undefined;
}

/** Купоны по облигации. */
export interface GetBondCouponsResponse {
  events: Coupon[];
}

/** Объект передачи информации о купоне облигации. */
export interface Coupon {
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Дата выплаты купона. */
  couponDate?:
    | Date
    | undefined;
  /** Номер купона. */
  couponNumber: number;
  /** (Опционально) Дата фиксации реестра для выплаты купона. */
  fixDate?:
    | Date
    | undefined;
  /** Выплата на одну облигацию. */
  payOneBond?:
    | MoneyValue
    | undefined;
  /** Тип купона. */
  couponType: CouponType;
  /** Начало купонного периода. */
  couponStartDate?:
    | Date
    | undefined;
  /** Окончание купонного периода. */
  couponEndDate?:
    | Date
    | undefined;
  /** Купонный период в днях. */
  couponPeriod: number;
}

/** Данные по валюте. */
export interface CurrencyResponse {
  /** Информация о валюте. */
  instrument?: Currency | undefined;
}

/** Данные по валютам. */
export interface CurrenciesResponse {
  /** Массив валют. */
  instruments: Currency[];
}

/** Данные по фонду. */
export interface EtfResponse {
  /** Информация о фонде. */
  instrument?: Etf | undefined;
}

/** Данные по фондам. */
export interface EtfsResponse {
  /** Массив фондов. */
  instruments: Etf[];
}

/** Данные по фьючерсу. */
export interface FutureResponse {
  /** Информация о фьючерсу. */
  instrument?: Future | undefined;
}

/** Данные по фьючерсам. */
export interface FuturesResponse {
  /** Массив фьючерсов. */
  instruments: Future[];
}

/** Данные по опциону. */
export interface OptionResponse {
  /** Информация по опциону. */
  instrument?: Option | undefined;
}

/** Данные по опционам. */
export interface OptionsResponse {
  /** Массив данных по опциону. */
  instruments: Option[];
}

/** Опцион. */
export interface Option {
  /** Уникальный идентификатор инструмента. */
  uid: string;
  /** Уникальный идентификатор позиции. */
  positionUid: string;
  /** Тикер инструмента. */
  ticker: string;
  /** Класс-код. */
  classCode: string;
  /** Уникальный идентификатор позиции основного инструмента. */
  basicAssetPositionUid: string;
  /** Текущий режим торгов инструмента. */
  tradingStatus: SecurityTradingStatus;
  /** Реальная площадка исполнения расчётов (биржа). Допустимые значения: [REAL_EXCHANGE_MOEX, REAL_EXCHANGE_RTS] */
  realExchange: RealExchange;
  /** Направление опциона. */
  direction: OptionDirection;
  /** Тип расчетов по опциону. */
  paymentType: OptionPaymentType;
  /** Стиль опциона. */
  style: OptionStyle;
  /** Способ исполнения опциона. */
  settlementType: OptionSettlementType;
  /** Название инструмента. */
  name: string;
  /** Валюта. */
  currency: string;
  /** Валюта, в которой оценивается контракт. */
  settlementCurrency: string;
  /** Тип актива. */
  assetType: string;
  /** Основной актив. */
  basicAsset: string;
  /** Tорговая площадка (секция биржи). */
  exchange: string;
  /** Код страны рисков. */
  countryOfRisk: string;
  /** Наименование страны рисков. */
  countryOfRiskName: string;
  /** Сектор экономики. */
  sector: string;
  /** Количество бумаг в лоте. */
  lot: number;
  /** Размер основного актива. */
  basicAssetSize?:
    | Quotation
    | undefined;
  /** Коэффициент ставки риска длинной позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР) */
  klong?:
    | Quotation
    | undefined;
  /** Коэффициент ставки риска короткой позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР) */
  kshort?:
    | Quotation
    | undefined;
  /** Ставка риска начальной маржи для КСУР лонг. Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) */
  dlong?:
    | Quotation
    | undefined;
  /** Ставка риска начальной маржи для КСУР шорт.  Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) */
  dshort?:
    | Quotation
    | undefined;
  /** Ставка риска начальной маржи для КПУР лонг. Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) */
  dlongMin?:
    | Quotation
    | undefined;
  /** Ставка риска начальной маржи для КПУР шорт.  Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) */
  dshortMin?:
    | Quotation
    | undefined;
  /** Минимальный шаг цены. */
  minPriceIncrement?:
    | Quotation
    | undefined;
  /** Цена страйка. */
  strikePrice?:
    | MoneyValue
    | undefined;
  /** Дата истечения срока в формате UTC. */
  expirationDate?:
    | Date
    | undefined;
  /** Дата начала обращения контракта в формате UTC. */
  firstTradeDate?:
    | Date
    | undefined;
  /** Дата исполнения в формате UTC. */
  lastTradeDate?:
    | Date
    | undefined;
  /** Дата первой минутной свечи в формате UTC. */
  first1minCandleDate?:
    | Date
    | undefined;
  /** Дата первой дневной свечи в формате UTC. */
  first1dayCandleDate?:
    | Date
    | undefined;
  /** Признак доступности для операций шорт. */
  shortEnabledFlag: boolean;
  /** Возможность покупки/продажи на ИИС. */
  forIisFlag: boolean;
  /** Признак внебиржевой ценной бумаги. */
  otcFlag: boolean;
  /** Признак доступности для покупки. */
  buyAvailableFlag: boolean;
  /** Признак доступности для продажи. */
  sellAvailableFlag: boolean;
  /** Флаг отображающий доступность торговли инструментом только для квалифицированных инвесторов. */
  forQualInvestorFlag: boolean;
  /** Флаг отображающий доступность торговли инструментом по выходным. */
  weekendFlag: boolean;
  /** Флаг заблокированного ТКС. */
  blockedTcaFlag: boolean;
  /** Параметр указывает на возможность торговать инструментом через API. */
  apiTradeAvailableFlag: boolean;
}

/** Данные по акции. */
export interface ShareResponse {
  /** Информация об акции. */
  instrument?: Share | undefined;
}

/** Данные по акциям. */
export interface SharesResponse {
  /** Массив акций. */
  instruments: Share[];
}

/** Объект передачи информации об облигации. */
export interface Bond {
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Тикер инструмента. */
  ticker: string;
  /** Класс-код (секция торгов). */
  classCode: string;
  /** Isin-идентификатор инструмента. */
  isin: string;
  /** Лотность инструмента. Возможно совершение операций только на количества ценной бумаги, кратные параметру *lot*. Подробнее: [лот](https://tinkoff.github.io/investAPI/glossary#lot) */
  lot: number;
  /** Валюта расчётов. */
  currency: string;
  /** Коэффициент ставки риска длинной позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР) */
  klong?:
    | Quotation
    | undefined;
  /** Коэффициент ставки риска короткой позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР) */
  kshort?:
    | Quotation
    | undefined;
  /** Ставка риска начальной маржи для КСУР лонг. Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) */
  dlong?:
    | Quotation
    | undefined;
  /** Ставка риска начальной маржи для КСУР шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) */
  dshort?:
    | Quotation
    | undefined;
  /** Ставка риска начальной маржи для КПУР лонг. Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) */
  dlongMin?:
    | Quotation
    | undefined;
  /** Ставка риска начальной маржи для КПУР шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) */
  dshortMin?:
    | Quotation
    | undefined;
  /** Признак доступности для операций в шорт. */
  shortEnabledFlag: boolean;
  /** Название инструмента. */
  name: string;
  /** Tорговая площадка (секция биржи). */
  exchange: string;
  /** Количество выплат по купонам в год. */
  couponQuantityPerYear: number;
  /** Дата погашения облигации в часовом поясе UTC. */
  maturityDate?:
    | Date
    | undefined;
  /** Номинал облигации. */
  nominal?:
    | MoneyValue
    | undefined;
  /** Первоначальный номинал облигации. */
  initialNominal?:
    | MoneyValue
    | undefined;
  /** Дата выпуска облигации в часовом поясе UTC. */
  stateRegDate?:
    | Date
    | undefined;
  /** Дата размещения в часовом поясе UTC. */
  placementDate?:
    | Date
    | undefined;
  /** Цена размещения. */
  placementPrice?:
    | MoneyValue
    | undefined;
  /** Значение НКД (накопленного купонного дохода) на дату. */
  aciValue?:
    | MoneyValue
    | undefined;
  /** Код страны риска, т.е. страны, в которой компания ведёт основной бизнес. */
  countryOfRisk: string;
  /** Наименование страны риска, т.е. страны, в которой компания ведёт основной бизнес. */
  countryOfRiskName: string;
  /** Сектор экономики. */
  sector: string;
  /** Форма выпуска. Возможные значения: </br>**documentary** — документарная; </br>**non_documentary** — бездокументарная. */
  issueKind: string;
  /** Размер выпуска. */
  issueSize: number;
  /** Плановый размер выпуска. */
  issueSizePlan: number;
  /** Текущий режим торгов инструмента. */
  tradingStatus: SecurityTradingStatus;
  /** Признак внебиржевой ценной бумаги. */
  otcFlag: boolean;
  /** Признак доступности для покупки. */
  buyAvailableFlag: boolean;
  /** Признак доступности для продажи. */
  sellAvailableFlag: boolean;
  /** Признак облигации с плавающим купоном. */
  floatingCouponFlag: boolean;
  /** Признак бессрочной облигации. */
  perpetualFlag: boolean;
  /** Признак облигации с амортизацией долга. */
  amortizationFlag: boolean;
  /** Шаг цены. */
  minPriceIncrement?:
    | Quotation
    | undefined;
  /** Параметр указывает на возможность торговать инструментом через API. */
  apiTradeAvailableFlag: boolean;
  /** Уникальный идентификатор инструмента. */
  uid: string;
  /** Реальная площадка исполнения расчётов. (биржа) */
  realExchange: RealExchange;
  /** Уникальный идентификатор позиции инструмента. */
  positionUid: string;
  /** Признак доступности для ИИС. */
  forIisFlag: boolean;
  /** Флаг отображающий доступность торговли инструментом только для квалифицированных инвесторов. */
  forQualInvestorFlag: boolean;
  /** Флаг отображающий доступность торговли инструментом по выходным */
  weekendFlag: boolean;
  /** Флаг заблокированного ТКС */
  blockedTcaFlag: boolean;
  /** Признак субординированной облигации. */
  subordinatedFlag: boolean;
  /** Флаг достаточной ликвидности */
  liquidityFlag: boolean;
  /** Дата первой минутной свечи. */
  first1minCandleDate?:
    | Date
    | undefined;
  /** Дата первой дневной свечи. */
  first1dayCandleDate?:
    | Date
    | undefined;
  /** Уровень риска. */
  riskLevel: RiskLevel;
}

/** Объект передачи информации о валюте. */
export interface Currency {
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Тикер инструмента. */
  ticker: string;
  /** Класс-код (секция торгов). */
  classCode: string;
  /** Isin-идентификатор инструмента. */
  isin: string;
  /** Лотность инструмента. Возможно совершение операций только на количества ценной бумаги, кратные параметру *lot*. Подробнее: [лот](https://tinkoff.github.io/investAPI/glossary#lot) */
  lot: number;
  /** Валюта расчётов. */
  currency: string;
  /** Коэффициент ставки риска длинной позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР) */
  klong?:
    | Quotation
    | undefined;
  /** Коэффициент ставки риска короткой позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР) */
  kshort?:
    | Quotation
    | undefined;
  /** Ставка риска начальной маржи для КСУР лонг.Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) */
  dlong?:
    | Quotation
    | undefined;
  /** Ставка риска начальной маржи для КСУР шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) */
  dshort?:
    | Quotation
    | undefined;
  /** Ставка риска начальной маржи для КПУР лонг. Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) */
  dlongMin?:
    | Quotation
    | undefined;
  /** Ставка риска начальной маржи для КПУР шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) */
  dshortMin?:
    | Quotation
    | undefined;
  /** Признак доступности для операций в шорт. */
  shortEnabledFlag: boolean;
  /** Название инструмента. */
  name: string;
  /** Tорговая площадка (секция биржи) */
  exchange: string;
  /** Номинал. */
  nominal?:
    | MoneyValue
    | undefined;
  /** Код страны риска, т.е. страны, в которой компания ведёт основной бизнес. */
  countryOfRisk: string;
  /** Наименование страны риска, т.е. страны, в которой компания ведёт основной бизнес. */
  countryOfRiskName: string;
  /** Текущий режим торгов инструмента. */
  tradingStatus: SecurityTradingStatus;
  /** Признак внебиржевой ценной бумаги. */
  otcFlag: boolean;
  /** Признак доступности для покупки. */
  buyAvailableFlag: boolean;
  /** Признак доступности для продажи. */
  sellAvailableFlag: boolean;
  /** Строковый ISO-код валюты. */
  isoCurrencyName: string;
  /** Шаг цены. */
  minPriceIncrement?:
    | Quotation
    | undefined;
  /** Параметр указывает на возможность торговать инструментом через API. */
  apiTradeAvailableFlag: boolean;
  /** Уникальный идентификатор инструмента. */
  uid: string;
  /** Реальная площадка исполнения расчётов (биржа). */
  realExchange: RealExchange;
  /** Уникальный идентификатор позиции инструмента. */
  positionUid: string;
  /** Признак доступности для ИИС. */
  forIisFlag: boolean;
  /** Флаг отображающий доступность торговли инструментом только для квалифицированных инвесторов. */
  forQualInvestorFlag: boolean;
  /** Флаг отображающий доступность торговли инструментом по выходным. */
  weekendFlag: boolean;
  /** Флаг заблокированного ТКС. */
  blockedTcaFlag: boolean;
  /** Дата первой минутной свечи. */
  first1minCandleDate?:
    | Date
    | undefined;
  /** Дата первой дневной свечи. */
  first1dayCandleDate?: Date | undefined;
}

/** Объект передачи информации об инвестиционном фонде. */
export interface Etf {
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Тикер инструмента. */
  ticker: string;
  /** Класс-код (секция торгов). */
  classCode: string;
  /** Isin-идентификатор инструмента. */
  isin: string;
  /** Лотность инструмента. Возможно совершение операций только на количества ценной бумаги, кратные параметру *lot*. Подробнее: [лот](https://tinkoff.github.io/investAPI/glossary#lot) */
  lot: number;
  /** Валюта расчётов. */
  currency: string;
  /** Коэффициент ставки риска длинной позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР) */
  klong?:
    | Quotation
    | undefined;
  /** Коэффициент ставки риска короткой позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР) */
  kshort?:
    | Quotation
    | undefined;
  /** Ставка риска начальной маржи для КСУР лонг.Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) */
  dlong?:
    | Quotation
    | undefined;
  /** Ставка риска начальной маржи для КСУР шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) */
  dshort?:
    | Quotation
    | undefined;
  /** Ставка риска начальной маржи для КПУР лонг. Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) */
  dlongMin?:
    | Quotation
    | undefined;
  /** Ставка риска начальной маржи для КПУР шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) */
  dshortMin?:
    | Quotation
    | undefined;
  /** Признак доступности для операций в шорт. */
  shortEnabledFlag: boolean;
  /** Название инструмента. */
  name: string;
  /** Tорговая площадка (секция биржи). */
  exchange: string;
  /** Размер фиксированной комиссии фонда. */
  fixedCommission?:
    | Quotation
    | undefined;
  /** Возможные значения: </br>**equity** — акции;</br>**fixed_income** — облигации;</br>**mixed_allocation** — смешанный;</br>**money_market** — денежный рынок;</br>**real_estate** — недвижимость;</br>**commodity** — товары;</br>**specialty** — специальный;</br>**private_equity** — private equity;</br>**alternative_investment** — альтернативные инвестиции. */
  focusType: string;
  /** Дата выпуска в часовом поясе UTC. */
  releasedDate?:
    | Date
    | undefined;
  /** Количество акций фонда в обращении. */
  numShares?:
    | Quotation
    | undefined;
  /** Код страны риска, т.е. страны, в которой компания ведёт основной бизнес. */
  countryOfRisk: string;
  /** Наименование страны риска, т.е. страны, в которой компания ведёт основной бизнес. */
  countryOfRiskName: string;
  /** Сектор экономики. */
  sector: string;
  /** Частота ребалансировки. */
  rebalancingFreq: string;
  /** Текущий режим торгов инструмента. */
  tradingStatus: SecurityTradingStatus;
  /** Признак внебиржевой ценной бумаги. */
  otcFlag: boolean;
  /** Признак доступности для покупки. */
  buyAvailableFlag: boolean;
  /** Признак доступности для продажи. */
  sellAvailableFlag: boolean;
  /** Шаг цены. */
  minPriceIncrement?:
    | Quotation
    | undefined;
  /** Параметр указывает на возможность торговать инструментом через API. */
  apiTradeAvailableFlag: boolean;
  /** Уникальный идентификатор инструмента. */
  uid: string;
  /** Реальная площадка исполнения расчётов (биржа). */
  realExchange: RealExchange;
  /** Уникальный идентификатор позиции инструмента. */
  positionUid: string;
  /** Признак доступности для ИИС. */
  forIisFlag: boolean;
  /** Флаг отображающий доступность торговли инструментом только для квалифицированных инвесторов. */
  forQualInvestorFlag: boolean;
  /** Флаг отображающий доступность торговли инструментом по выходным. */
  weekendFlag: boolean;
  /** Флаг заблокированного ТКС. */
  blockedTcaFlag: boolean;
  /** Флаг достаточной ликвидности */
  liquidityFlag: boolean;
  /** Дата первой минутной свечи. */
  first1minCandleDate?:
    | Date
    | undefined;
  /** Дата первой дневной свечи. */
  first1dayCandleDate?: Date | undefined;
}

/** Объект передачи информации о фьючерсе. */
export interface Future {
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Тикер инструмента. */
  ticker: string;
  /** Класс-код (секция торгов). */
  classCode: string;
  /** Лотность инструмента. Возможно совершение операций только на количества ценной бумаги, кратные параметру *lot*. Подробнее: [лот](https://tinkoff.github.io/investAPI/glossary#lot) */
  lot: number;
  /** Валюта расчётов. */
  currency: string;
  /** Коэффициент ставки риска длинной позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР) */
  klong?:
    | Quotation
    | undefined;
  /** Коэффициент ставки риска короткой позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР) */
  kshort?:
    | Quotation
    | undefined;
  /** Ставка риска начальной маржи для КСУР лонг.Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) */
  dlong?:
    | Quotation
    | undefined;
  /** Ставка риска начальной маржи для КСУР шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) */
  dshort?:
    | Quotation
    | undefined;
  /** Ставка риска начальной маржи для КПУР лонг. Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) */
  dlongMin?:
    | Quotation
    | undefined;
  /** Ставка риска начальной маржи для КПУР шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) */
  dshortMin?:
    | Quotation
    | undefined;
  /** Признак доступности для операций шорт. */
  shortEnabledFlag: boolean;
  /** Название инструмента. */
  name: string;
  /** Tорговая площадка (секция биржи). */
  exchange: string;
  /** Дата начала обращения контракта в часовом поясе UTC. */
  firstTradeDate?:
    | Date
    | undefined;
  /** Дата в часовом поясе UTC, до которой возможно проведение операций с фьючерсом. */
  lastTradeDate?:
    | Date
    | undefined;
  /** Тип фьючерса. Возможные значения: </br>**physical_delivery** — физические поставки; </br>**cash_settlement** — денежный эквивалент. */
  futuresType: string;
  /** Тип актива. Возможные значения: </br>**commodity** — товар; </br>**currency** — валюта; </br>**security** — ценная бумага; </br>**index** — индекс. */
  assetType: string;
  /** Основной актив. */
  basicAsset: string;
  /** Размер основного актива. */
  basicAssetSize?:
    | Quotation
    | undefined;
  /** Код страны риска, т.е. страны, в которой компания ведёт основной бизнес. */
  countryOfRisk: string;
  /** Наименование страны риска, т.е. страны, в которой компания ведёт основной бизнес. */
  countryOfRiskName: string;
  /** Сектор экономики. */
  sector: string;
  /** Дата истечения срока в часов поясе UTC. */
  expirationDate?:
    | Date
    | undefined;
  /** Текущий режим торгов инструмента. */
  tradingStatus: SecurityTradingStatus;
  /** Признак внебиржевой ценной бумаги. */
  otcFlag: boolean;
  /** Признак доступности для покупки. */
  buyAvailableFlag: boolean;
  /** Признак доступности для продажи. */
  sellAvailableFlag: boolean;
  /** Шаг цены. */
  minPriceIncrement?:
    | Quotation
    | undefined;
  /** Параметр указывает на возможность торговать инструментом через API. */
  apiTradeAvailableFlag: boolean;
  /** Уникальный идентификатор инструмента. */
  uid: string;
  /** Реальная площадка исполнения расчётов (биржа). */
  realExchange: RealExchange;
  /** Уникальный идентификатор позиции инструмента. */
  positionUid: string;
  /** Уникальный идентификатор позиции основного инструмента. */
  basicAssetPositionUid: string;
  /** Признак доступности для ИИС. */
  forIisFlag: boolean;
  /** Флаг отображающий доступность торговли инструментом только для квалифицированных инвесторов. */
  forQualInvestorFlag: boolean;
  /** Флаг отображающий доступность торговли инструментом по выходным. */
  weekendFlag: boolean;
  /** Флаг заблокированного ТКС. */
  blockedTcaFlag: boolean;
  /** Дата первой минутной свечи. */
  first1minCandleDate?:
    | Date
    | undefined;
  /** Дата первой дневной свечи. */
  first1dayCandleDate?: Date | undefined;
}

/** Объект передачи информации об акции. */
export interface Share {
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Тикер инструмента. */
  ticker: string;
  /** Класс-код (секция торгов). */
  classCode: string;
  /** Isin-идентификатор инструмента. */
  isin: string;
  /** Лотность инструмента. Возможно совершение операций только на количества ценной бумаги, кратные параметру *lot*. Подробнее: [лот](https://tinkoff.github.io/investAPI/glossary#lot) */
  lot: number;
  /** Валюта расчётов. */
  currency: string;
  /** Коэффициент ставки риска длинной позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР) */
  klong?:
    | Quotation
    | undefined;
  /** Коэффициент ставки риска короткой позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР) */
  kshort?:
    | Quotation
    | undefined;
  /** Ставка риска начальной маржи для КСУР лонг.Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) */
  dlong?:
    | Quotation
    | undefined;
  /** Ставка риска начальной маржи для КСУР шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) */
  dshort?:
    | Quotation
    | undefined;
  /** Ставка риска начальной маржи для КПУР лонг. Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) */
  dlongMin?:
    | Quotation
    | undefined;
  /** Ставка риска начальной маржи для КПУР шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) */
  dshortMin?:
    | Quotation
    | undefined;
  /** Признак доступности для операций в шорт. */
  shortEnabledFlag: boolean;
  /** Название инструмента. */
  name: string;
  /** Tорговая площадка (секция биржи). */
  exchange: string;
  /** Дата IPO акции в часовом поясе UTC. */
  ipoDate?:
    | Date
    | undefined;
  /** Размер выпуска. */
  issueSize: number;
  /** Код страны риска, т.е. страны, в которой компания ведёт основной бизнес. */
  countryOfRisk: string;
  /** Наименование страны риска, т.е. страны, в которой компания ведёт основной бизнес. */
  countryOfRiskName: string;
  /** Сектор экономики. */
  sector: string;
  /** Плановый размер выпуска. */
  issueSizePlan: number;
  /** Номинал. */
  nominal?:
    | MoneyValue
    | undefined;
  /** Текущий режим торгов инструмента. */
  tradingStatus: SecurityTradingStatus;
  /** Признак внебиржевой ценной бумаги. */
  otcFlag: boolean;
  /** Признак доступности для покупки. */
  buyAvailableFlag: boolean;
  /** Признак доступности для продажи. */
  sellAvailableFlag: boolean;
  /** Признак наличия дивидендной доходности. */
  divYieldFlag: boolean;
  /** Тип акции. Возможные значения: [ShareType](https://tinkoff.github.io/investAPI/instruments#sharetype) */
  shareType: ShareType;
  /** Шаг цены. */
  minPriceIncrement?:
    | Quotation
    | undefined;
  /** Параметр указывает на возможность торговать инструментом через API. */
  apiTradeAvailableFlag: boolean;
  /** Уникальный идентификатор инструмента. */
  uid: string;
  /** Реальная площадка исполнения расчётов (биржа). */
  realExchange: RealExchange;
  /** Уникальный идентификатор позиции инструмента. */
  positionUid: string;
  /** Признак доступности для ИИС. */
  forIisFlag: boolean;
  /** Флаг отображающий доступность торговли инструментом только для квалифицированных инвесторов. */
  forQualInvestorFlag: boolean;
  /** Флаг отображающий доступность торговли инструментом по выходным */
  weekendFlag: boolean;
  /** Флаг заблокированного ТКС */
  blockedTcaFlag: boolean;
  /** Флаг достаточной ликвидности */
  liquidityFlag: boolean;
  /** Дата первой минутной свечи. */
  first1minCandleDate?:
    | Date
    | undefined;
  /** Дата первой дневной свечи. */
  first1dayCandleDate?: Date | undefined;
}

/** Запрос НКД по облигации */
export interface GetAccruedInterestsRequest {
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Начало запрашиваемого периода в часовом поясе UTC. */
  from?:
    | Date
    | undefined;
  /** Окончание запрашиваемого периода в часовом поясе UTC. */
  to?: Date | undefined;
}

/** НКД облигации */
export interface GetAccruedInterestsResponse {
  /** Массив операций начисления купонов. */
  accruedInterests: AccruedInterest[];
}

/** Операция начисления купонов. */
export interface AccruedInterest {
  /** Дата и время выплаты в часовом поясе UTC. */
  date?:
    | Date
    | undefined;
  /** Величина выплаты. */
  value?:
    | Quotation
    | undefined;
  /** Величина выплаты в процентах от номинала. */
  valuePercent?:
    | Quotation
    | undefined;
  /** Номинал облигации. */
  nominal?: Quotation | undefined;
}

/** Запрос информации о фьючерсе */
export interface GetFuturesMarginRequest {
  /** Идентификатор инструмента. */
  figi: string;
}

/** Данные по фьючерсу */
export interface GetFuturesMarginResponse {
  /** Гарантийное обеспечение при покупке. */
  initialMarginOnBuy?:
    | MoneyValue
    | undefined;
  /** Гарантийное обеспечение при продаже. */
  initialMarginOnSell?:
    | MoneyValue
    | undefined;
  /** Шаг цены. */
  minPriceIncrement?:
    | Quotation
    | undefined;
  /** Стоимость шага цены. */
  minPriceIncrementAmount?: Quotation | undefined;
}

/** Данные по инструменту. */
export interface InstrumentResponse {
  /** Основная информация об инструменте. */
  instrument?: Instrument | undefined;
}

/** Объект передачи основной информации об инструменте. */
export interface Instrument {
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Тикер инструмента. */
  ticker: string;
  /** Класс-код инструмента. */
  classCode: string;
  /** Isin-идентификатор инструмента. */
  isin: string;
  /** Лотность инструмента. Возможно совершение операций только на количества ценной бумаги, кратные параметру *lot*. Подробнее: [лот](https://tinkoff.github.io/investAPI/glossary#lot) */
  lot: number;
  /** Валюта расчётов. */
  currency: string;
  /** Коэффициент ставки риска длинной позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР) */
  klong?:
    | Quotation
    | undefined;
  /** Коэффициент ставки риска короткой позиции по клиенту. 2 – клиент со стандартным уровнем риска (КСУР). 1 – клиент с повышенным уровнем риска (КПУР) */
  kshort?:
    | Quotation
    | undefined;
  /** ССтавка риска начальной маржи для КСУР лонг.Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) */
  dlong?:
    | Quotation
    | undefined;
  /** Ставка риска начальной маржи для КСУР шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) */
  dshort?:
    | Quotation
    | undefined;
  /** Ставка риска начальной маржи для КПУР лонг. Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) */
  dlongMin?:
    | Quotation
    | undefined;
  /** Ставка риска начальной маржи для КПУР шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) */
  dshortMin?:
    | Quotation
    | undefined;
  /** Признак доступности для операций в шорт. */
  shortEnabledFlag: boolean;
  /** Название инструмента. */
  name: string;
  /** Tорговая площадка (секция биржи). */
  exchange: string;
  /** Код страны риска, т.е. страны, в которой компания ведёт основной бизнес. */
  countryOfRisk: string;
  /** Наименование страны риска, т.е. страны, в которой компания ведёт основной бизнес. */
  countryOfRiskName: string;
  /** Тип инструмента. */
  instrumentType: string;
  /** Текущий режим торгов инструмента. */
  tradingStatus: SecurityTradingStatus;
  /** Признак внебиржевой ценной бумаги. */
  otcFlag: boolean;
  /** Признак доступности для покупки. */
  buyAvailableFlag: boolean;
  /** Признак доступности для продажи. */
  sellAvailableFlag: boolean;
  /** Шаг цены. */
  minPriceIncrement?:
    | Quotation
    | undefined;
  /** Параметр указывает на возможность торговать инструментом через API. */
  apiTradeAvailableFlag: boolean;
  /** Уникальный идентификатор инструмента. */
  uid: string;
  /** Реальная площадка исполнения расчётов (биржа). */
  realExchange: RealExchange;
  /** Уникальный идентификатор позиции инструмента. */
  positionUid: string;
  /** Признак доступности для ИИС. */
  forIisFlag: boolean;
  /** Флаг отображающий доступность торговли инструментом только для квалифицированных инвесторов. */
  forQualInvestorFlag: boolean;
  /** Флаг отображающий доступность торговли инструментом по выходным */
  weekendFlag: boolean;
  /** Флаг заблокированного ТКС */
  blockedTcaFlag: boolean;
  /** Тип инструмента. */
  instrumentKind: InstrumentType;
  /** Дата первой минутной свечи. */
  first1minCandleDate?:
    | Date
    | undefined;
  /** Дата первой дневной свечи. */
  first1dayCandleDate?: Date | undefined;
}

/** Запрос дивидендов. */
export interface GetDividendsRequest {
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Начало запрашиваемого периода в часовом поясе UTC. Фильтрация происходит по параметру *record_date* (дата фиксации реестра). */
  from?:
    | Date
    | undefined;
  /** Окончание запрашиваемого периода в часовом поясе UTC. Фильтрация происходит по параметру *record_date* (дата фиксации реестра). */
  to?: Date | undefined;
}

/** Дивиденды. */
export interface GetDividendsResponse {
  dividends: Dividend[];
}

/** Информация о выплате. */
export interface Dividend {
  /** Величина дивиденда на 1 ценную бумагу (включая валюту). */
  dividendNet?:
    | MoneyValue
    | undefined;
  /** Дата фактических выплат в часовом поясе UTC. */
  paymentDate?:
    | Date
    | undefined;
  /** Дата объявления дивидендов в часовом поясе UTC. */
  declaredDate?:
    | Date
    | undefined;
  /** Последний день (включительно) покупки для получения выплаты в часовом поясе UTC. */
  lastBuyDate?:
    | Date
    | undefined;
  /** Тип выплаты. Возможные значения: Regular Cash – регулярные выплаты, Cancelled – выплата отменена, Daily Accrual – ежедневное начисление, Return of Capital – возврат капитала, прочие типы выплат. */
  dividendType: string;
  /** Дата фиксации реестра в часовом поясе UTC. */
  recordDate?:
    | Date
    | undefined;
  /** Регулярность выплаты. Возможные значения: Annual – ежегодная, Semi-Anl – каждые полгода, прочие типы выплат. */
  regularity: string;
  /** Цена закрытия инструмента на момент ex_dividend_date. */
  closePrice?:
    | MoneyValue
    | undefined;
  /** Величина доходности. */
  yieldValue?:
    | Quotation
    | undefined;
  /** Дата и время создания записи в часовом поясе UTC. */
  createdAt?: Date | undefined;
}

/** Запрос актива по идентификатору. */
export interface AssetRequest {
  /** uid-идентификатор актива. */
  id: string;
}

/** Данные по активу. */
export interface AssetResponse {
  /** Актив. */
  asset?: AssetFull | undefined;
}

/** Запрос списка активов. */
export interface AssetsRequest {
  instrumentType: InstrumentType;
}

/** Список активов. */
export interface AssetsResponse {
  /** Активы. */
  assets: Asset[];
}

export interface AssetFull {
  /** Уникальный идентификатор актива. */
  uid: string;
  /** Тип актива. */
  type: AssetType;
  /** Наименование актива. */
  name: string;
  /** Короткое наименование актива. */
  nameBrief: string;
  /** Описание актива. */
  description: string;
  /** Дата и время удаления актива. */
  deletedAt?:
    | Date
    | undefined;
  /** Тестирование клиентов. */
  requiredTests: string[];
  /** Валюта. Обязательно и заполняется только для type = "ASSET_TYPE_CURRENCY". */
  currency?:
    | AssetCurrency
    | undefined;
  /** Ценная бумага. Обязательно и заполняется только для type = "ASSET_TYPE_SECURITY". */
  security?:
    | AssetSecurity
    | undefined;
  /** Номер государственной регистрации. */
  gosRegCode: string;
  /** Код CFI. */
  cfi: string;
  /** Код НРД инструмента. */
  codeNsd: string;
  /** Статус актива. */
  status: string;
  /** Бренд. */
  brand?:
    | Brand
    | undefined;
  /** Дата и время последнего обновления записи. */
  updatedAt?:
    | Date
    | undefined;
  /** Код типа ц.б. по классификации Банка России. */
  brCode: string;
  /** Наименование кода типа ц.б. по классификации Банка России. */
  brCodeName: string;
  /** Массив идентификаторов инструментов. */
  instruments: AssetInstrument[];
}

/** Информация об активе. */
export interface Asset {
  /** Уникальный идентификатор актива. */
  uid: string;
  /** Тип актива. */
  type: AssetType;
  /** Наименование актива. */
  name: string;
  /** Массив идентификаторов инструментов. */
  instruments: AssetInstrument[];
}

/** Валюта. */
export interface AssetCurrency {
  /** ISO-код валюты. */
  baseCurrency: string;
}

/** Ценная бумага. */
export interface AssetSecurity {
  /** ISIN-идентификатор ценной бумаги. */
  isin: string;
  /** Тип ценной бумаги. */
  type: string;
  /** Тип инструмента. */
  instrumentKind: InstrumentType;
  /** Акция. Заполняется только для акций (тип актива asset.type = "ASSET_TYPE_SECURITY" и security.type = share). */
  share?:
    | AssetShare
    | undefined;
  /** Облигация. Заполняется только для облигаций (тип актива asset.type = "ASSET_TYPE_SECURITY" и security.type = bond). */
  bond?:
    | AssetBond
    | undefined;
  /** Структурная нота. Заполняется только для структурных продуктов (тип актива asset.type = "ASSET_TYPE_SECURITY" и security.type = sp). */
  sp?:
    | AssetStructuredProduct
    | undefined;
  /** Фонд. Заполняется только для фондов (тип актива asset.type = "ASSET_TYPE_SECURITY" и security.type = etf). */
  etf?:
    | AssetEtf
    | undefined;
  /** Клиринговый сертификат участия. Заполняется только для клиринговых сертификатов (тип актива asset.type = "ASSET_TYPE_SECURITY" и security.type = clearing_certificate). */
  clearingCertificate?: AssetClearingCertificate | undefined;
}

/** Акция. */
export interface AssetShare {
  /** Тип акции. */
  type: ShareType;
  /** Объем выпуска (шт.). */
  issueSize?:
    | Quotation
    | undefined;
  /** Номинал. */
  nominal?:
    | Quotation
    | undefined;
  /** Валюта номинала. */
  nominalCurrency: string;
  /** Индекс (Bloomberg). */
  primaryIndex: string;
  /** Ставка дивиденда (для привилегированных акций). */
  dividendRate?:
    | Quotation
    | undefined;
  /** Тип привилегированных акций. */
  preferredShareType: string;
  /** Дата IPO. */
  ipoDate?:
    | Date
    | undefined;
  /** Дата регистрации. */
  registryDate?:
    | Date
    | undefined;
  /** Признак наличия дивидендной доходности. */
  divYieldFlag: boolean;
  /** Форма выпуска ФИ. */
  issueKind: string;
  /** Дата размещения акции. */
  placementDate?:
    | Date
    | undefined;
  /** ISIN базового актива. */
  represIsin: string;
  /** Объявленное количество шт. */
  issueSizePlan?:
    | Quotation
    | undefined;
  /** Количество акций в свободном обращении. */
  totalFloat?: Quotation | undefined;
}

/** Облигация. */
export interface AssetBond {
  /** Текущий номинал. */
  currentNominal?:
    | Quotation
    | undefined;
  /** Наименование заемщика. */
  borrowName: string;
  /** Объем эмиссии облигации (стоимость). */
  issueSize?:
    | Quotation
    | undefined;
  /** Номинал облигации. */
  nominal?:
    | Quotation
    | undefined;
  /** Валюта номинала. */
  nominalCurrency: string;
  /** Форма выпуска облигации. */
  issueKind: string;
  /** Форма дохода облигации. */
  interestKind: string;
  /** Количество выплат в год. */
  couponQuantityPerYear: number;
  /** Признак облигации с индексируемым номиналом. */
  indexedNominalFlag: boolean;
  /** Признак субординированной облигации. */
  subordinatedFlag: boolean;
  /** Признак обеспеченной облигации. */
  collateralFlag: boolean;
  /** Признак показывает, что купоны облигации не облагаются налогом (для mass market). */
  taxFreeFlag: boolean;
  /** Признак облигации с амортизацией долга. */
  amortizationFlag: boolean;
  /** Признак облигации с плавающим купоном. */
  floatingCouponFlag: boolean;
  /** Признак бессрочной облигации. */
  perpetualFlag: boolean;
  /** Дата погашения облигации. */
  maturityDate?:
    | Date
    | undefined;
  /** Описание и условия получения дополнительного дохода. */
  returnCondition: string;
  /** Дата выпуска облигации. */
  stateRegDate?:
    | Date
    | undefined;
  /** Дата размещения облигации. */
  placementDate?:
    | Date
    | undefined;
  /** Цена размещения облигации. */
  placementPrice?:
    | Quotation
    | undefined;
  /** Объявленное количество шт. */
  issueSizePlan?: Quotation | undefined;
}

/** Структурная нота. */
export interface AssetStructuredProduct {
  /** Наименование заемщика. */
  borrowName: string;
  /** Номинал. */
  nominal?:
    | Quotation
    | undefined;
  /** Валюта номинала. */
  nominalCurrency: string;
  /** Тип структурной ноты. */
  type: StructuredProductType;
  /** Стратегия портфеля. */
  logicPortfolio: string;
  /** Тип базового актива. */
  assetType: AssetType;
  /** Вид базового актива в зависимости от типа базового актива. */
  basicAsset: string;
  /** Барьер сохранности (в процентах). */
  safetyBarrier?:
    | Quotation
    | undefined;
  /** Дата погашения. */
  maturityDate?:
    | Date
    | undefined;
  /** Объявленное количество шт. */
  issueSizePlan?:
    | Quotation
    | undefined;
  /** Объем размещения. */
  issueSize?:
    | Quotation
    | undefined;
  /** Дата размещения ноты. */
  placementDate?:
    | Date
    | undefined;
  /** Форма выпуска. */
  issueKind: string;
}

/** Фонд. */
export interface AssetEtf {
  /** Суммарные расходы фонда (в %). */
  totalExpense?:
    | Quotation
    | undefined;
  /** Барьерная ставка доходности после которой фонд имеет право на perfomance fee (в процентах). */
  hurdleRate?:
    | Quotation
    | undefined;
  /** Комиссия за успешные результаты фонда (в процентах). */
  performanceFee?:
    | Quotation
    | undefined;
  /** Фиксированная комиссия за управление (в процентах). */
  fixedCommission?:
    | Quotation
    | undefined;
  /** Тип распределения доходов от выплат по бумагам. */
  paymentType: string;
  /** Признак необходимости выхода фонда в плюс для получения комиссии. */
  watermarkFlag: boolean;
  /** Премия (надбавка к цене) при покупке доли в фонде (в процентах). */
  buyPremium?:
    | Quotation
    | undefined;
  /** Ставка дисконта (вычет из цены) при продаже доли в фонде (в процентах). */
  sellDiscount?:
    | Quotation
    | undefined;
  /** Признак ребалансируемости портфеля фонда. */
  rebalancingFlag: boolean;
  /** Периодичность ребалансировки. */
  rebalancingFreq: string;
  /** Тип управления. */
  managementType: string;
  /** Индекс, который реплицирует (старается копировать) фонд. */
  primaryIndex: string;
  /** База ETF. */
  focusType: string;
  /** Признак использования заемных активов (плечо). */
  leveragedFlag: boolean;
  /** Количество акций в обращении. */
  numShare?:
    | Quotation
    | undefined;
  /** Признак обязательства по отчетности перед регулятором. */
  ucitsFlag: boolean;
  /** Дата выпуска. */
  releasedDate?:
    | Date
    | undefined;
  /** Описание фонда. */
  description: string;
  /** Описание индекса, за которым следует фонд. */
  primaryIndexDescription: string;
  /** Основные компании, в которые вкладывается фонд. */
  primaryIndexCompany: string;
  /** Срок восстановления индекса (после просадки). */
  indexRecoveryPeriod?:
    | Quotation
    | undefined;
  /** IVAV-код. */
  inavCode: string;
  /** Признак наличия дивидендной доходности. */
  divYieldFlag: boolean;
  /** Комиссия на покрытие расходов фонда (в процентах). */
  expenseCommission?:
    | Quotation
    | undefined;
  /** Ошибка следования за индексом (в процентах). */
  primaryIndexTrackingError?:
    | Quotation
    | undefined;
  /** Плановая ребалансировка портфеля. */
  rebalancingPlan: string;
  /** Ставки налогообложения дивидендов и купонов. */
  taxRate: string;
  /** Даты ребалансировок. */
  rebalancingDates: Date[];
  /** Форма выпуска. */
  issueKind: string;
  /** Номинал. */
  nominal?:
    | Quotation
    | undefined;
  /** Валюта номинала. */
  nominalCurrency: string;
}

/** Клиринговый сертификат участия. */
export interface AssetClearingCertificate {
  /** Номинал. */
  nominal?:
    | Quotation
    | undefined;
  /** Валюта номинала. */
  nominalCurrency: string;
}

/** Бренд. */
export interface Brand {
  /** uid идентификатор бренда. */
  uid: string;
  /** Наименование бренда. */
  name: string;
  /** Описание. */
  description: string;
  /** Информация о бренде. */
  info: string;
  /** Компания. */
  company: string;
  /** Сектор. */
  sector: string;
  /** Код страны риска. */
  countryOfRisk: string;
  /** Наименование страны риска. */
  countryOfRiskName: string;
}

/** Идентификаторы инструмента. */
export interface AssetInstrument {
  /** uid идентификатор инструмента. */
  uid: string;
  /** figi идентификатор инструмента. */
  figi: string;
  /** Тип инструмента. */
  instrumentType: string;
  /** Тикер инструмента. */
  ticker: string;
  /** Класс-код (секция торгов). */
  classCode: string;
  /** Массив связанных инструментов. */
  links: InstrumentLink[];
  /** Тип инструмента. */
  instrumentKind: InstrumentType;
  /** id позиции. */
  positionUid: string;
}

/** Связь с другим инструментом. */
export interface InstrumentLink {
  /** Тип связи. */
  type: string;
  /** uid идентификатор связанного инструмента. */
  instrumentUid: string;
}

/** Запрос списка избранных инструментов, входные параметры не требуются. */
export interface GetFavoritesRequest {
}

/** В ответ передаётся список избранных инструментов в качестве массива. */
export interface GetFavoritesResponse {
  /** Массив инструментов */
  favoriteInstruments: FavoriteInstrument[];
}

/** Массив избранных инструментов. */
export interface FavoriteInstrument {
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Тикер инструмента. */
  ticker: string;
  /** Класс-код инструмента. */
  classCode: string;
  /** Isin-идентификатор инструмента. */
  isin: string;
  /** Тип инструмента. */
  instrumentType: string;
  /** Признак внебиржевой ценной бумаги. */
  otcFlag: boolean;
  /** Параметр указывает на возможность торговать инструментом через API. */
  apiTradeAvailableFlag: boolean;
  /** Тип инструмента. */
  instrumentKind: InstrumentType;
}

/** Запрос редактирования списка избранных инструментов. */
export interface EditFavoritesRequest {
  /** Массив инструментов. */
  instruments: EditFavoritesRequestInstrument[];
  /** Тип действия со списком. */
  actionType: EditFavoritesActionType;
}

/** Массив инструментов для редактирования списка избранных инструментов. */
export interface EditFavoritesRequestInstrument {
  /** Figi-идентификатор инструмента. */
  figi: string;
}

/** Результат редактирования списка избранных инструментов. */
export interface EditFavoritesResponse {
  /** Массив инструментов */
  favoriteInstruments: FavoriteInstrument[];
}

/** Запрос справочника стран. */
export interface GetCountriesRequest {
}

/** Справочник стран. */
export interface GetCountriesResponse {
  /** Массив стран. */
  countries: CountryResponse[];
}

/** Данные о стране. */
export interface CountryResponse {
  /** Двухбуквенный код страны. */
  alfaTwo: string;
  /** Трёхбуквенный код страны. */
  alfaThree: string;
  /** Наименование страны. */
  name: string;
  /** Краткое наименование страны. */
  nameBrief: string;
}

/** Запрос на поиск инструментов. */
export interface FindInstrumentRequest {
  /** Строка поиска. */
  query: string;
  /** Фильтр по типу инструмента. */
  instrumentKind: InstrumentType;
  /** Фильтр для отображения только торговых инструментов. */
  apiTradeAvailableFlag: boolean;
}

/** Результат поиска инструментов. */
export interface FindInstrumentResponse {
  /** Массив инструментов, удовлетворяющих условиям поиска. */
  instruments: InstrumentShort[];
}

/** Краткая информация об инструменте. */
export interface InstrumentShort {
  /** Isin инструмента. */
  isin: string;
  /** Figi инструмента. */
  figi: string;
  /** Ticker инструмента. */
  ticker: string;
  /** ClassCode инструмента. */
  classCode: string;
  /** Тип инструмента. */
  instrumentType: string;
  /** Название инструмента. */
  name: string;
  /** Уникальный идентификатор инструмента. */
  uid: string;
  /** Уникальный идентификатор позиции инструмента. */
  positionUid: string;
  /** Тип инструмента. */
  instrumentKind: InstrumentType;
  /** Параметр указывает на возможность торговать инструментом через API. */
  apiTradeAvailableFlag: boolean;
  /** Признак доступности для ИИС. */
  forIisFlag: boolean;
  /** Дата первой минутной свечи. */
  first1minCandleDate?:
    | Date
    | undefined;
  /** Дата первой дневной свечи. */
  first1dayCandleDate?:
    | Date
    | undefined;
  /** Флаг отображающий доступность торговли инструментом только для квалифицированных инвесторов. */
  forQualInvestorFlag: boolean;
  /** Флаг отображающий доступность торговли инструментом по выходным */
  weekendFlag: boolean;
  /** Флаг заблокированного ТКС */
  blockedTcaFlag: boolean;
}

/** Запрос списка брендов. */
export interface GetBrandsRequest {
}

/** Запрос бренда. */
export interface GetBrandRequest {
  /** Uid-идентификатор бренда. */
  id: string;
}

/** Список брендов. */
export interface GetBrandsResponse {
  /** Массив брендов. */
  brands: Brand[];
}

function createBaseTradingSchedulesRequest(): TradingSchedulesRequest {
  return { exchange: "", from: undefined, to: undefined };
}

export const TradingSchedulesRequest = {
  encode(message: TradingSchedulesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.exchange !== "") {
      writer.uint32(10).string(message.exchange);
    }
    if (message.from !== undefined) {
      Timestamp.encode(toTimestamp(message.from), writer.uint32(18).fork()).ldelim();
    }
    if (message.to !== undefined) {
      Timestamp.encode(toTimestamp(message.to), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TradingSchedulesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradingSchedulesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.exchange = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.from = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.to = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TradingSchedulesRequest {
    return {
      exchange: isSet(object.exchange) ? globalThis.String(object.exchange) : "",
      from: isSet(object.from) ? fromJsonTimestamp(object.from) : undefined,
      to: isSet(object.to) ? fromJsonTimestamp(object.to) : undefined,
    };
  },

  toJSON(message: TradingSchedulesRequest): unknown {
    const obj: any = {};
    if (message.exchange !== "") {
      obj.exchange = message.exchange;
    }
    if (message.from !== undefined) {
      obj.from = message.from.toISOString();
    }
    if (message.to !== undefined) {
      obj.to = message.to.toISOString();
    }
    return obj;
  },
};

function createBaseTradingSchedulesResponse(): TradingSchedulesResponse {
  return { exchanges: [] };
}

export const TradingSchedulesResponse = {
  encode(message: TradingSchedulesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.exchanges) {
      TradingSchedule.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TradingSchedulesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradingSchedulesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.exchanges.push(TradingSchedule.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TradingSchedulesResponse {
    return {
      exchanges: globalThis.Array.isArray(object?.exchanges)
        ? object.exchanges.map((e: any) => TradingSchedule.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TradingSchedulesResponse): unknown {
    const obj: any = {};
    if (message.exchanges?.length) {
      obj.exchanges = message.exchanges.map((e) => TradingSchedule.toJSON(e));
    }
    return obj;
  },
};

function createBaseTradingSchedule(): TradingSchedule {
  return { exchange: "", days: [] };
}

export const TradingSchedule = {
  encode(message: TradingSchedule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.exchange !== "") {
      writer.uint32(10).string(message.exchange);
    }
    for (const v of message.days) {
      TradingDay.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TradingSchedule {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradingSchedule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.exchange = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.days.push(TradingDay.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TradingSchedule {
    return {
      exchange: isSet(object.exchange) ? globalThis.String(object.exchange) : "",
      days: globalThis.Array.isArray(object?.days) ? object.days.map((e: any) => TradingDay.fromJSON(e)) : [],
    };
  },

  toJSON(message: TradingSchedule): unknown {
    const obj: any = {};
    if (message.exchange !== "") {
      obj.exchange = message.exchange;
    }
    if (message.days?.length) {
      obj.days = message.days.map((e) => TradingDay.toJSON(e));
    }
    return obj;
  },
};

function createBaseTradingDay(): TradingDay {
  return {
    date: undefined,
    isTradingDay: false,
    startTime: undefined,
    endTime: undefined,
    openingAuctionStartTime: undefined,
    closingAuctionEndTime: undefined,
    eveningOpeningAuctionStartTime: undefined,
    eveningStartTime: undefined,
    eveningEndTime: undefined,
    clearingStartTime: undefined,
    clearingEndTime: undefined,
    premarketStartTime: undefined,
    premarketEndTime: undefined,
    closingAuctionStartTime: undefined,
    openingAuctionEndTime: undefined,
  };
}

export const TradingDay = {
  encode(message: TradingDay, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.date !== undefined) {
      Timestamp.encode(toTimestamp(message.date), writer.uint32(10).fork()).ldelim();
    }
    if (message.isTradingDay === true) {
      writer.uint32(16).bool(message.isTradingDay);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(26).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(toTimestamp(message.endTime), writer.uint32(34).fork()).ldelim();
    }
    if (message.openingAuctionStartTime !== undefined) {
      Timestamp.encode(toTimestamp(message.openingAuctionStartTime), writer.uint32(58).fork()).ldelim();
    }
    if (message.closingAuctionEndTime !== undefined) {
      Timestamp.encode(toTimestamp(message.closingAuctionEndTime), writer.uint32(66).fork()).ldelim();
    }
    if (message.eveningOpeningAuctionStartTime !== undefined) {
      Timestamp.encode(toTimestamp(message.eveningOpeningAuctionStartTime), writer.uint32(74).fork()).ldelim();
    }
    if (message.eveningStartTime !== undefined) {
      Timestamp.encode(toTimestamp(message.eveningStartTime), writer.uint32(82).fork()).ldelim();
    }
    if (message.eveningEndTime !== undefined) {
      Timestamp.encode(toTimestamp(message.eveningEndTime), writer.uint32(90).fork()).ldelim();
    }
    if (message.clearingStartTime !== undefined) {
      Timestamp.encode(toTimestamp(message.clearingStartTime), writer.uint32(98).fork()).ldelim();
    }
    if (message.clearingEndTime !== undefined) {
      Timestamp.encode(toTimestamp(message.clearingEndTime), writer.uint32(106).fork()).ldelim();
    }
    if (message.premarketStartTime !== undefined) {
      Timestamp.encode(toTimestamp(message.premarketStartTime), writer.uint32(114).fork()).ldelim();
    }
    if (message.premarketEndTime !== undefined) {
      Timestamp.encode(toTimestamp(message.premarketEndTime), writer.uint32(122).fork()).ldelim();
    }
    if (message.closingAuctionStartTime !== undefined) {
      Timestamp.encode(toTimestamp(message.closingAuctionStartTime), writer.uint32(130).fork()).ldelim();
    }
    if (message.openingAuctionEndTime !== undefined) {
      Timestamp.encode(toTimestamp(message.openingAuctionEndTime), writer.uint32(138).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TradingDay {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradingDay();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.date = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.isTradingDay = reader.bool();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.openingAuctionStartTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.closingAuctionEndTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.eveningOpeningAuctionStartTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.eveningStartTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.eveningEndTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.clearingStartTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.clearingEndTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.premarketStartTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.premarketEndTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.closingAuctionStartTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.openingAuctionEndTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TradingDay {
    return {
      date: isSet(object.date) ? fromJsonTimestamp(object.date) : undefined,
      isTradingDay: isSet(object.isTradingDay) ? globalThis.Boolean(object.isTradingDay) : false,
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      endTime: isSet(object.endTime) ? fromJsonTimestamp(object.endTime) : undefined,
      openingAuctionStartTime: isSet(object.openingAuctionStartTime)
        ? fromJsonTimestamp(object.openingAuctionStartTime)
        : undefined,
      closingAuctionEndTime: isSet(object.closingAuctionEndTime)
        ? fromJsonTimestamp(object.closingAuctionEndTime)
        : undefined,
      eveningOpeningAuctionStartTime: isSet(object.eveningOpeningAuctionStartTime)
        ? fromJsonTimestamp(object.eveningOpeningAuctionStartTime)
        : undefined,
      eveningStartTime: isSet(object.eveningStartTime) ? fromJsonTimestamp(object.eveningStartTime) : undefined,
      eveningEndTime: isSet(object.eveningEndTime) ? fromJsonTimestamp(object.eveningEndTime) : undefined,
      clearingStartTime: isSet(object.clearingStartTime) ? fromJsonTimestamp(object.clearingStartTime) : undefined,
      clearingEndTime: isSet(object.clearingEndTime) ? fromJsonTimestamp(object.clearingEndTime) : undefined,
      premarketStartTime: isSet(object.premarketStartTime) ? fromJsonTimestamp(object.premarketStartTime) : undefined,
      premarketEndTime: isSet(object.premarketEndTime) ? fromJsonTimestamp(object.premarketEndTime) : undefined,
      closingAuctionStartTime: isSet(object.closingAuctionStartTime)
        ? fromJsonTimestamp(object.closingAuctionStartTime)
        : undefined,
      openingAuctionEndTime: isSet(object.openingAuctionEndTime)
        ? fromJsonTimestamp(object.openingAuctionEndTime)
        : undefined,
    };
  },

  toJSON(message: TradingDay): unknown {
    const obj: any = {};
    if (message.date !== undefined) {
      obj.date = message.date.toISOString();
    }
    if (message.isTradingDay === true) {
      obj.isTradingDay = message.isTradingDay;
    }
    if (message.startTime !== undefined) {
      obj.startTime = message.startTime.toISOString();
    }
    if (message.endTime !== undefined) {
      obj.endTime = message.endTime.toISOString();
    }
    if (message.openingAuctionStartTime !== undefined) {
      obj.openingAuctionStartTime = message.openingAuctionStartTime.toISOString();
    }
    if (message.closingAuctionEndTime !== undefined) {
      obj.closingAuctionEndTime = message.closingAuctionEndTime.toISOString();
    }
    if (message.eveningOpeningAuctionStartTime !== undefined) {
      obj.eveningOpeningAuctionStartTime = message.eveningOpeningAuctionStartTime.toISOString();
    }
    if (message.eveningStartTime !== undefined) {
      obj.eveningStartTime = message.eveningStartTime.toISOString();
    }
    if (message.eveningEndTime !== undefined) {
      obj.eveningEndTime = message.eveningEndTime.toISOString();
    }
    if (message.clearingStartTime !== undefined) {
      obj.clearingStartTime = message.clearingStartTime.toISOString();
    }
    if (message.clearingEndTime !== undefined) {
      obj.clearingEndTime = message.clearingEndTime.toISOString();
    }
    if (message.premarketStartTime !== undefined) {
      obj.premarketStartTime = message.premarketStartTime.toISOString();
    }
    if (message.premarketEndTime !== undefined) {
      obj.premarketEndTime = message.premarketEndTime.toISOString();
    }
    if (message.closingAuctionStartTime !== undefined) {
      obj.closingAuctionStartTime = message.closingAuctionStartTime.toISOString();
    }
    if (message.openingAuctionEndTime !== undefined) {
      obj.openingAuctionEndTime = message.openingAuctionEndTime.toISOString();
    }
    return obj;
  },
};

function createBaseInstrumentRequest(): InstrumentRequest {
  return { idType: 0, classCode: "", id: "" };
}

export const InstrumentRequest = {
  encode(message: InstrumentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.idType !== 0) {
      writer.uint32(8).int32(message.idType);
    }
    if (message.classCode !== "") {
      writer.uint32(18).string(message.classCode);
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InstrumentRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstrumentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.idType = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.classCode = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InstrumentRequest {
    return {
      idType: isSet(object.idType) ? instrumentIdTypeFromJSON(object.idType) : 0,
      classCode: isSet(object.classCode) ? globalThis.String(object.classCode) : "",
      id: isSet(object.id) ? globalThis.String(object.id) : "",
    };
  },

  toJSON(message: InstrumentRequest): unknown {
    const obj: any = {};
    if (message.idType !== 0) {
      obj.idType = instrumentIdTypeToJSON(message.idType);
    }
    if (message.classCode !== "") {
      obj.classCode = message.classCode;
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },
};

function createBaseInstrumentsRequest(): InstrumentsRequest {
  return { instrumentStatus: 0 };
}

export const InstrumentsRequest = {
  encode(message: InstrumentsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instrumentStatus !== 0) {
      writer.uint32(8).int32(message.instrumentStatus);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InstrumentsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstrumentsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.instrumentStatus = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InstrumentsRequest {
    return { instrumentStatus: isSet(object.instrumentStatus) ? instrumentStatusFromJSON(object.instrumentStatus) : 0 };
  },

  toJSON(message: InstrumentsRequest): unknown {
    const obj: any = {};
    if (message.instrumentStatus !== 0) {
      obj.instrumentStatus = instrumentStatusToJSON(message.instrumentStatus);
    }
    return obj;
  },
};

function createBaseFilterOptionsRequest(): FilterOptionsRequest {
  return { basicAssetUid: "", basicAssetPositionUid: "" };
}

export const FilterOptionsRequest = {
  encode(message: FilterOptionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.basicAssetUid !== "") {
      writer.uint32(10).string(message.basicAssetUid);
    }
    if (message.basicAssetPositionUid !== "") {
      writer.uint32(18).string(message.basicAssetPositionUid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FilterOptionsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFilterOptionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.basicAssetUid = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.basicAssetPositionUid = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FilterOptionsRequest {
    return {
      basicAssetUid: isSet(object.basicAssetUid) ? globalThis.String(object.basicAssetUid) : "",
      basicAssetPositionUid: isSet(object.basicAssetPositionUid) ? globalThis.String(object.basicAssetPositionUid) : "",
    };
  },

  toJSON(message: FilterOptionsRequest): unknown {
    const obj: any = {};
    if (message.basicAssetUid !== "") {
      obj.basicAssetUid = message.basicAssetUid;
    }
    if (message.basicAssetPositionUid !== "") {
      obj.basicAssetPositionUid = message.basicAssetPositionUid;
    }
    return obj;
  },
};

function createBaseBondResponse(): BondResponse {
  return { instrument: undefined };
}

export const BondResponse = {
  encode(message: BondResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instrument !== undefined) {
      Bond.encode(message.instrument, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BondResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBondResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instrument = Bond.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BondResponse {
    return { instrument: isSet(object.instrument) ? Bond.fromJSON(object.instrument) : undefined };
  },

  toJSON(message: BondResponse): unknown {
    const obj: any = {};
    if (message.instrument !== undefined) {
      obj.instrument = Bond.toJSON(message.instrument);
    }
    return obj;
  },
};

function createBaseBondsResponse(): BondsResponse {
  return { instruments: [] };
}

export const BondsResponse = {
  encode(message: BondsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.instruments) {
      Bond.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BondsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBondsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instruments.push(Bond.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BondsResponse {
    return {
      instruments: globalThis.Array.isArray(object?.instruments)
        ? object.instruments.map((e: any) => Bond.fromJSON(e))
        : [],
    };
  },

  toJSON(message: BondsResponse): unknown {
    const obj: any = {};
    if (message.instruments?.length) {
      obj.instruments = message.instruments.map((e) => Bond.toJSON(e));
    }
    return obj;
  },
};

function createBaseGetBondCouponsRequest(): GetBondCouponsRequest {
  return { figi: "", from: undefined, to: undefined };
}

export const GetBondCouponsRequest = {
  encode(message: GetBondCouponsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.from !== undefined) {
      Timestamp.encode(toTimestamp(message.from), writer.uint32(18).fork()).ldelim();
    }
    if (message.to !== undefined) {
      Timestamp.encode(toTimestamp(message.to), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBondCouponsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBondCouponsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.figi = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.from = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.to = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetBondCouponsRequest {
    return {
      figi: isSet(object.figi) ? globalThis.String(object.figi) : "",
      from: isSet(object.from) ? fromJsonTimestamp(object.from) : undefined,
      to: isSet(object.to) ? fromJsonTimestamp(object.to) : undefined,
    };
  },

  toJSON(message: GetBondCouponsRequest): unknown {
    const obj: any = {};
    if (message.figi !== "") {
      obj.figi = message.figi;
    }
    if (message.from !== undefined) {
      obj.from = message.from.toISOString();
    }
    if (message.to !== undefined) {
      obj.to = message.to.toISOString();
    }
    return obj;
  },
};

function createBaseGetBondCouponsResponse(): GetBondCouponsResponse {
  return { events: [] };
}

export const GetBondCouponsResponse = {
  encode(message: GetBondCouponsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.events) {
      Coupon.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBondCouponsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBondCouponsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.events.push(Coupon.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetBondCouponsResponse {
    return {
      events: globalThis.Array.isArray(object?.events) ? object.events.map((e: any) => Coupon.fromJSON(e)) : [],
    };
  },

  toJSON(message: GetBondCouponsResponse): unknown {
    const obj: any = {};
    if (message.events?.length) {
      obj.events = message.events.map((e) => Coupon.toJSON(e));
    }
    return obj;
  },
};

function createBaseCoupon(): Coupon {
  return {
    figi: "",
    couponDate: undefined,
    couponNumber: 0,
    fixDate: undefined,
    payOneBond: undefined,
    couponType: 0,
    couponStartDate: undefined,
    couponEndDate: undefined,
    couponPeriod: 0,
  };
}

export const Coupon = {
  encode(message: Coupon, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.couponDate !== undefined) {
      Timestamp.encode(toTimestamp(message.couponDate), writer.uint32(18).fork()).ldelim();
    }
    if (message.couponNumber !== 0) {
      writer.uint32(24).int64(message.couponNumber);
    }
    if (message.fixDate !== undefined) {
      Timestamp.encode(toTimestamp(message.fixDate), writer.uint32(34).fork()).ldelim();
    }
    if (message.payOneBond !== undefined) {
      MoneyValue.encode(message.payOneBond, writer.uint32(42).fork()).ldelim();
    }
    if (message.couponType !== 0) {
      writer.uint32(48).int32(message.couponType);
    }
    if (message.couponStartDate !== undefined) {
      Timestamp.encode(toTimestamp(message.couponStartDate), writer.uint32(58).fork()).ldelim();
    }
    if (message.couponEndDate !== undefined) {
      Timestamp.encode(toTimestamp(message.couponEndDate), writer.uint32(66).fork()).ldelim();
    }
    if (message.couponPeriod !== 0) {
      writer.uint32(72).int32(message.couponPeriod);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Coupon {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCoupon();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.figi = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.couponDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.couponNumber = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.fixDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.payOneBond = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.couponType = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.couponStartDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.couponEndDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.couponPeriod = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Coupon {
    return {
      figi: isSet(object.figi) ? globalThis.String(object.figi) : "",
      couponDate: isSet(object.couponDate) ? fromJsonTimestamp(object.couponDate) : undefined,
      couponNumber: isSet(object.couponNumber) ? globalThis.Number(object.couponNumber) : 0,
      fixDate: isSet(object.fixDate) ? fromJsonTimestamp(object.fixDate) : undefined,
      payOneBond: isSet(object.payOneBond) ? MoneyValue.fromJSON(object.payOneBond) : undefined,
      couponType: isSet(object.couponType) ? couponTypeFromJSON(object.couponType) : 0,
      couponStartDate: isSet(object.couponStartDate) ? fromJsonTimestamp(object.couponStartDate) : undefined,
      couponEndDate: isSet(object.couponEndDate) ? fromJsonTimestamp(object.couponEndDate) : undefined,
      couponPeriod: isSet(object.couponPeriod) ? globalThis.Number(object.couponPeriod) : 0,
    };
  },

  toJSON(message: Coupon): unknown {
    const obj: any = {};
    if (message.figi !== "") {
      obj.figi = message.figi;
    }
    if (message.couponDate !== undefined) {
      obj.couponDate = message.couponDate.toISOString();
    }
    if (message.couponNumber !== 0) {
      obj.couponNumber = Math.round(message.couponNumber);
    }
    if (message.fixDate !== undefined) {
      obj.fixDate = message.fixDate.toISOString();
    }
    if (message.payOneBond !== undefined) {
      obj.payOneBond = MoneyValue.toJSON(message.payOneBond);
    }
    if (message.couponType !== 0) {
      obj.couponType = couponTypeToJSON(message.couponType);
    }
    if (message.couponStartDate !== undefined) {
      obj.couponStartDate = message.couponStartDate.toISOString();
    }
    if (message.couponEndDate !== undefined) {
      obj.couponEndDate = message.couponEndDate.toISOString();
    }
    if (message.couponPeriod !== 0) {
      obj.couponPeriod = Math.round(message.couponPeriod);
    }
    return obj;
  },
};

function createBaseCurrencyResponse(): CurrencyResponse {
  return { instrument: undefined };
}

export const CurrencyResponse = {
  encode(message: CurrencyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instrument !== undefined) {
      Currency.encode(message.instrument, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CurrencyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurrencyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instrument = Currency.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CurrencyResponse {
    return { instrument: isSet(object.instrument) ? Currency.fromJSON(object.instrument) : undefined };
  },

  toJSON(message: CurrencyResponse): unknown {
    const obj: any = {};
    if (message.instrument !== undefined) {
      obj.instrument = Currency.toJSON(message.instrument);
    }
    return obj;
  },
};

function createBaseCurrenciesResponse(): CurrenciesResponse {
  return { instruments: [] };
}

export const CurrenciesResponse = {
  encode(message: CurrenciesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.instruments) {
      Currency.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CurrenciesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurrenciesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instruments.push(Currency.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CurrenciesResponse {
    return {
      instruments: globalThis.Array.isArray(object?.instruments)
        ? object.instruments.map((e: any) => Currency.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CurrenciesResponse): unknown {
    const obj: any = {};
    if (message.instruments?.length) {
      obj.instruments = message.instruments.map((e) => Currency.toJSON(e));
    }
    return obj;
  },
};

function createBaseEtfResponse(): EtfResponse {
  return { instrument: undefined };
}

export const EtfResponse = {
  encode(message: EtfResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instrument !== undefined) {
      Etf.encode(message.instrument, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EtfResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEtfResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instrument = Etf.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EtfResponse {
    return { instrument: isSet(object.instrument) ? Etf.fromJSON(object.instrument) : undefined };
  },

  toJSON(message: EtfResponse): unknown {
    const obj: any = {};
    if (message.instrument !== undefined) {
      obj.instrument = Etf.toJSON(message.instrument);
    }
    return obj;
  },
};

function createBaseEtfsResponse(): EtfsResponse {
  return { instruments: [] };
}

export const EtfsResponse = {
  encode(message: EtfsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.instruments) {
      Etf.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EtfsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEtfsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instruments.push(Etf.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EtfsResponse {
    return {
      instruments: globalThis.Array.isArray(object?.instruments)
        ? object.instruments.map((e: any) => Etf.fromJSON(e))
        : [],
    };
  },

  toJSON(message: EtfsResponse): unknown {
    const obj: any = {};
    if (message.instruments?.length) {
      obj.instruments = message.instruments.map((e) => Etf.toJSON(e));
    }
    return obj;
  },
};

function createBaseFutureResponse(): FutureResponse {
  return { instrument: undefined };
}

export const FutureResponse = {
  encode(message: FutureResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instrument !== undefined) {
      Future.encode(message.instrument, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FutureResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFutureResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instrument = Future.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FutureResponse {
    return { instrument: isSet(object.instrument) ? Future.fromJSON(object.instrument) : undefined };
  },

  toJSON(message: FutureResponse): unknown {
    const obj: any = {};
    if (message.instrument !== undefined) {
      obj.instrument = Future.toJSON(message.instrument);
    }
    return obj;
  },
};

function createBaseFuturesResponse(): FuturesResponse {
  return { instruments: [] };
}

export const FuturesResponse = {
  encode(message: FuturesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.instruments) {
      Future.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FuturesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFuturesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instruments.push(Future.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FuturesResponse {
    return {
      instruments: globalThis.Array.isArray(object?.instruments)
        ? object.instruments.map((e: any) => Future.fromJSON(e))
        : [],
    };
  },

  toJSON(message: FuturesResponse): unknown {
    const obj: any = {};
    if (message.instruments?.length) {
      obj.instruments = message.instruments.map((e) => Future.toJSON(e));
    }
    return obj;
  },
};

function createBaseOptionResponse(): OptionResponse {
  return { instrument: undefined };
}

export const OptionResponse = {
  encode(message: OptionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instrument !== undefined) {
      Option.encode(message.instrument, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OptionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOptionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instrument = Option.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OptionResponse {
    return { instrument: isSet(object.instrument) ? Option.fromJSON(object.instrument) : undefined };
  },

  toJSON(message: OptionResponse): unknown {
    const obj: any = {};
    if (message.instrument !== undefined) {
      obj.instrument = Option.toJSON(message.instrument);
    }
    return obj;
  },
};

function createBaseOptionsResponse(): OptionsResponse {
  return { instruments: [] };
}

export const OptionsResponse = {
  encode(message: OptionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.instruments) {
      Option.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OptionsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOptionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instruments.push(Option.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OptionsResponse {
    return {
      instruments: globalThis.Array.isArray(object?.instruments)
        ? object.instruments.map((e: any) => Option.fromJSON(e))
        : [],
    };
  },

  toJSON(message: OptionsResponse): unknown {
    const obj: any = {};
    if (message.instruments?.length) {
      obj.instruments = message.instruments.map((e) => Option.toJSON(e));
    }
    return obj;
  },
};

function createBaseOption(): Option {
  return {
    uid: "",
    positionUid: "",
    ticker: "",
    classCode: "",
    basicAssetPositionUid: "",
    tradingStatus: 0,
    realExchange: 0,
    direction: 0,
    paymentType: 0,
    style: 0,
    settlementType: 0,
    name: "",
    currency: "",
    settlementCurrency: "",
    assetType: "",
    basicAsset: "",
    exchange: "",
    countryOfRisk: "",
    countryOfRiskName: "",
    sector: "",
    lot: 0,
    basicAssetSize: undefined,
    klong: undefined,
    kshort: undefined,
    dlong: undefined,
    dshort: undefined,
    dlongMin: undefined,
    dshortMin: undefined,
    minPriceIncrement: undefined,
    strikePrice: undefined,
    expirationDate: undefined,
    firstTradeDate: undefined,
    lastTradeDate: undefined,
    first1minCandleDate: undefined,
    first1dayCandleDate: undefined,
    shortEnabledFlag: false,
    forIisFlag: false,
    otcFlag: false,
    buyAvailableFlag: false,
    sellAvailableFlag: false,
    forQualInvestorFlag: false,
    weekendFlag: false,
    blockedTcaFlag: false,
    apiTradeAvailableFlag: false,
  };
}

export const Option = {
  encode(message: Option, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uid !== "") {
      writer.uint32(10).string(message.uid);
    }
    if (message.positionUid !== "") {
      writer.uint32(18).string(message.positionUid);
    }
    if (message.ticker !== "") {
      writer.uint32(26).string(message.ticker);
    }
    if (message.classCode !== "") {
      writer.uint32(34).string(message.classCode);
    }
    if (message.basicAssetPositionUid !== "") {
      writer.uint32(42).string(message.basicAssetPositionUid);
    }
    if (message.tradingStatus !== 0) {
      writer.uint32(168).int32(message.tradingStatus);
    }
    if (message.realExchange !== 0) {
      writer.uint32(248).int32(message.realExchange);
    }
    if (message.direction !== 0) {
      writer.uint32(328).int32(message.direction);
    }
    if (message.paymentType !== 0) {
      writer.uint32(336).int32(message.paymentType);
    }
    if (message.style !== 0) {
      writer.uint32(344).int32(message.style);
    }
    if (message.settlementType !== 0) {
      writer.uint32(352).int32(message.settlementType);
    }
    if (message.name !== "") {
      writer.uint32(810).string(message.name);
    }
    if (message.currency !== "") {
      writer.uint32(890).string(message.currency);
    }
    if (message.settlementCurrency !== "") {
      writer.uint32(898).string(message.settlementCurrency);
    }
    if (message.assetType !== "") {
      writer.uint32(1050).string(message.assetType);
    }
    if (message.basicAsset !== "") {
      writer.uint32(1058).string(message.basicAsset);
    }
    if (message.exchange !== "") {
      writer.uint32(1130).string(message.exchange);
    }
    if (message.countryOfRisk !== "") {
      writer.uint32(1210).string(message.countryOfRisk);
    }
    if (message.countryOfRiskName !== "") {
      writer.uint32(1218).string(message.countryOfRiskName);
    }
    if (message.sector !== "") {
      writer.uint32(1290).string(message.sector);
    }
    if (message.lot !== 0) {
      writer.uint32(1608).int32(message.lot);
    }
    if (message.basicAssetSize !== undefined) {
      Quotation.encode(message.basicAssetSize, writer.uint32(1690).fork()).ldelim();
    }
    if (message.klong !== undefined) {
      Quotation.encode(message.klong, writer.uint32(1770).fork()).ldelim();
    }
    if (message.kshort !== undefined) {
      Quotation.encode(message.kshort, writer.uint32(1778).fork()).ldelim();
    }
    if (message.dlong !== undefined) {
      Quotation.encode(message.dlong, writer.uint32(1786).fork()).ldelim();
    }
    if (message.dshort !== undefined) {
      Quotation.encode(message.dshort, writer.uint32(1794).fork()).ldelim();
    }
    if (message.dlongMin !== undefined) {
      Quotation.encode(message.dlongMin, writer.uint32(1802).fork()).ldelim();
    }
    if (message.dshortMin !== undefined) {
      Quotation.encode(message.dshortMin, writer.uint32(1810).fork()).ldelim();
    }
    if (message.minPriceIncrement !== undefined) {
      Quotation.encode(message.minPriceIncrement, writer.uint32(1850).fork()).ldelim();
    }
    if (message.strikePrice !== undefined) {
      MoneyValue.encode(message.strikePrice, writer.uint32(1930).fork()).ldelim();
    }
    if (message.expirationDate !== undefined) {
      Timestamp.encode(toTimestamp(message.expirationDate), writer.uint32(2410).fork()).ldelim();
    }
    if (message.firstTradeDate !== undefined) {
      Timestamp.encode(toTimestamp(message.firstTradeDate), writer.uint32(2490).fork()).ldelim();
    }
    if (message.lastTradeDate !== undefined) {
      Timestamp.encode(toTimestamp(message.lastTradeDate), writer.uint32(2498).fork()).ldelim();
    }
    if (message.first1minCandleDate !== undefined) {
      Timestamp.encode(toTimestamp(message.first1minCandleDate), writer.uint32(2570).fork()).ldelim();
    }
    if (message.first1dayCandleDate !== undefined) {
      Timestamp.encode(toTimestamp(message.first1dayCandleDate), writer.uint32(2578).fork()).ldelim();
    }
    if (message.shortEnabledFlag === true) {
      writer.uint32(3208).bool(message.shortEnabledFlag);
    }
    if (message.forIisFlag === true) {
      writer.uint32(3216).bool(message.forIisFlag);
    }
    if (message.otcFlag === true) {
      writer.uint32(3224).bool(message.otcFlag);
    }
    if (message.buyAvailableFlag === true) {
      writer.uint32(3232).bool(message.buyAvailableFlag);
    }
    if (message.sellAvailableFlag === true) {
      writer.uint32(3240).bool(message.sellAvailableFlag);
    }
    if (message.forQualInvestorFlag === true) {
      writer.uint32(3248).bool(message.forQualInvestorFlag);
    }
    if (message.weekendFlag === true) {
      writer.uint32(3256).bool(message.weekendFlag);
    }
    if (message.blockedTcaFlag === true) {
      writer.uint32(3264).bool(message.blockedTcaFlag);
    }
    if (message.apiTradeAvailableFlag === true) {
      writer.uint32(3272).bool(message.apiTradeAvailableFlag);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Option {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.uid = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.positionUid = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.ticker = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.classCode = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.basicAssetPositionUid = reader.string();
          continue;
        case 21:
          if (tag !== 168) {
            break;
          }

          message.tradingStatus = reader.int32() as any;
          continue;
        case 31:
          if (tag !== 248) {
            break;
          }

          message.realExchange = reader.int32() as any;
          continue;
        case 41:
          if (tag !== 328) {
            break;
          }

          message.direction = reader.int32() as any;
          continue;
        case 42:
          if (tag !== 336) {
            break;
          }

          message.paymentType = reader.int32() as any;
          continue;
        case 43:
          if (tag !== 344) {
            break;
          }

          message.style = reader.int32() as any;
          continue;
        case 44:
          if (tag !== 352) {
            break;
          }

          message.settlementType = reader.int32() as any;
          continue;
        case 101:
          if (tag !== 810) {
            break;
          }

          message.name = reader.string();
          continue;
        case 111:
          if (tag !== 890) {
            break;
          }

          message.currency = reader.string();
          continue;
        case 112:
          if (tag !== 898) {
            break;
          }

          message.settlementCurrency = reader.string();
          continue;
        case 131:
          if (tag !== 1050) {
            break;
          }

          message.assetType = reader.string();
          continue;
        case 132:
          if (tag !== 1058) {
            break;
          }

          message.basicAsset = reader.string();
          continue;
        case 141:
          if (tag !== 1130) {
            break;
          }

          message.exchange = reader.string();
          continue;
        case 151:
          if (tag !== 1210) {
            break;
          }

          message.countryOfRisk = reader.string();
          continue;
        case 152:
          if (tag !== 1218) {
            break;
          }

          message.countryOfRiskName = reader.string();
          continue;
        case 161:
          if (tag !== 1290) {
            break;
          }

          message.sector = reader.string();
          continue;
        case 201:
          if (tag !== 1608) {
            break;
          }

          message.lot = reader.int32();
          continue;
        case 211:
          if (tag !== 1690) {
            break;
          }

          message.basicAssetSize = Quotation.decode(reader, reader.uint32());
          continue;
        case 221:
          if (tag !== 1770) {
            break;
          }

          message.klong = Quotation.decode(reader, reader.uint32());
          continue;
        case 222:
          if (tag !== 1778) {
            break;
          }

          message.kshort = Quotation.decode(reader, reader.uint32());
          continue;
        case 223:
          if (tag !== 1786) {
            break;
          }

          message.dlong = Quotation.decode(reader, reader.uint32());
          continue;
        case 224:
          if (tag !== 1794) {
            break;
          }

          message.dshort = Quotation.decode(reader, reader.uint32());
          continue;
        case 225:
          if (tag !== 1802) {
            break;
          }

          message.dlongMin = Quotation.decode(reader, reader.uint32());
          continue;
        case 226:
          if (tag !== 1810) {
            break;
          }

          message.dshortMin = Quotation.decode(reader, reader.uint32());
          continue;
        case 231:
          if (tag !== 1850) {
            break;
          }

          message.minPriceIncrement = Quotation.decode(reader, reader.uint32());
          continue;
        case 241:
          if (tag !== 1930) {
            break;
          }

          message.strikePrice = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 301:
          if (tag !== 2410) {
            break;
          }

          message.expirationDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 311:
          if (tag !== 2490) {
            break;
          }

          message.firstTradeDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 312:
          if (tag !== 2498) {
            break;
          }

          message.lastTradeDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 321:
          if (tag !== 2570) {
            break;
          }

          message.first1minCandleDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 322:
          if (tag !== 2578) {
            break;
          }

          message.first1dayCandleDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 401:
          if (tag !== 3208) {
            break;
          }

          message.shortEnabledFlag = reader.bool();
          continue;
        case 402:
          if (tag !== 3216) {
            break;
          }

          message.forIisFlag = reader.bool();
          continue;
        case 403:
          if (tag !== 3224) {
            break;
          }

          message.otcFlag = reader.bool();
          continue;
        case 404:
          if (tag !== 3232) {
            break;
          }

          message.buyAvailableFlag = reader.bool();
          continue;
        case 405:
          if (tag !== 3240) {
            break;
          }

          message.sellAvailableFlag = reader.bool();
          continue;
        case 406:
          if (tag !== 3248) {
            break;
          }

          message.forQualInvestorFlag = reader.bool();
          continue;
        case 407:
          if (tag !== 3256) {
            break;
          }

          message.weekendFlag = reader.bool();
          continue;
        case 408:
          if (tag !== 3264) {
            break;
          }

          message.blockedTcaFlag = reader.bool();
          continue;
        case 409:
          if (tag !== 3272) {
            break;
          }

          message.apiTradeAvailableFlag = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Option {
    return {
      uid: isSet(object.uid) ? globalThis.String(object.uid) : "",
      positionUid: isSet(object.positionUid) ? globalThis.String(object.positionUid) : "",
      ticker: isSet(object.ticker) ? globalThis.String(object.ticker) : "",
      classCode: isSet(object.classCode) ? globalThis.String(object.classCode) : "",
      basicAssetPositionUid: isSet(object.basicAssetPositionUid) ? globalThis.String(object.basicAssetPositionUid) : "",
      tradingStatus: isSet(object.tradingStatus) ? securityTradingStatusFromJSON(object.tradingStatus) : 0,
      realExchange: isSet(object.realExchange) ? realExchangeFromJSON(object.realExchange) : 0,
      direction: isSet(object.direction) ? optionDirectionFromJSON(object.direction) : 0,
      paymentType: isSet(object.paymentType) ? optionPaymentTypeFromJSON(object.paymentType) : 0,
      style: isSet(object.style) ? optionStyleFromJSON(object.style) : 0,
      settlementType: isSet(object.settlementType) ? optionSettlementTypeFromJSON(object.settlementType) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      currency: isSet(object.currency) ? globalThis.String(object.currency) : "",
      settlementCurrency: isSet(object.settlementCurrency) ? globalThis.String(object.settlementCurrency) : "",
      assetType: isSet(object.assetType) ? globalThis.String(object.assetType) : "",
      basicAsset: isSet(object.basicAsset) ? globalThis.String(object.basicAsset) : "",
      exchange: isSet(object.exchange) ? globalThis.String(object.exchange) : "",
      countryOfRisk: isSet(object.countryOfRisk) ? globalThis.String(object.countryOfRisk) : "",
      countryOfRiskName: isSet(object.countryOfRiskName) ? globalThis.String(object.countryOfRiskName) : "",
      sector: isSet(object.sector) ? globalThis.String(object.sector) : "",
      lot: isSet(object.lot) ? globalThis.Number(object.lot) : 0,
      basicAssetSize: isSet(object.basicAssetSize) ? Quotation.fromJSON(object.basicAssetSize) : undefined,
      klong: isSet(object.klong) ? Quotation.fromJSON(object.klong) : undefined,
      kshort: isSet(object.kshort) ? Quotation.fromJSON(object.kshort) : undefined,
      dlong: isSet(object.dlong) ? Quotation.fromJSON(object.dlong) : undefined,
      dshort: isSet(object.dshort) ? Quotation.fromJSON(object.dshort) : undefined,
      dlongMin: isSet(object.dlongMin) ? Quotation.fromJSON(object.dlongMin) : undefined,
      dshortMin: isSet(object.dshortMin) ? Quotation.fromJSON(object.dshortMin) : undefined,
      minPriceIncrement: isSet(object.minPriceIncrement) ? Quotation.fromJSON(object.minPriceIncrement) : undefined,
      strikePrice: isSet(object.strikePrice) ? MoneyValue.fromJSON(object.strikePrice) : undefined,
      expirationDate: isSet(object.expirationDate) ? fromJsonTimestamp(object.expirationDate) : undefined,
      firstTradeDate: isSet(object.firstTradeDate) ? fromJsonTimestamp(object.firstTradeDate) : undefined,
      lastTradeDate: isSet(object.lastTradeDate) ? fromJsonTimestamp(object.lastTradeDate) : undefined,
      first1minCandleDate: isSet(object.first1minCandleDate)
        ? fromJsonTimestamp(object.first1minCandleDate)
        : undefined,
      first1dayCandleDate: isSet(object.first1dayCandleDate)
        ? fromJsonTimestamp(object.first1dayCandleDate)
        : undefined,
      shortEnabledFlag: isSet(object.shortEnabledFlag) ? globalThis.Boolean(object.shortEnabledFlag) : false,
      forIisFlag: isSet(object.forIisFlag) ? globalThis.Boolean(object.forIisFlag) : false,
      otcFlag: isSet(object.otcFlag) ? globalThis.Boolean(object.otcFlag) : false,
      buyAvailableFlag: isSet(object.buyAvailableFlag) ? globalThis.Boolean(object.buyAvailableFlag) : false,
      sellAvailableFlag: isSet(object.sellAvailableFlag) ? globalThis.Boolean(object.sellAvailableFlag) : false,
      forQualInvestorFlag: isSet(object.forQualInvestorFlag) ? globalThis.Boolean(object.forQualInvestorFlag) : false,
      weekendFlag: isSet(object.weekendFlag) ? globalThis.Boolean(object.weekendFlag) : false,
      blockedTcaFlag: isSet(object.blockedTcaFlag) ? globalThis.Boolean(object.blockedTcaFlag) : false,
      apiTradeAvailableFlag: isSet(object.apiTradeAvailableFlag)
        ? globalThis.Boolean(object.apiTradeAvailableFlag)
        : false,
    };
  },

  toJSON(message: Option): unknown {
    const obj: any = {};
    if (message.uid !== "") {
      obj.uid = message.uid;
    }
    if (message.positionUid !== "") {
      obj.positionUid = message.positionUid;
    }
    if (message.ticker !== "") {
      obj.ticker = message.ticker;
    }
    if (message.classCode !== "") {
      obj.classCode = message.classCode;
    }
    if (message.basicAssetPositionUid !== "") {
      obj.basicAssetPositionUid = message.basicAssetPositionUid;
    }
    if (message.tradingStatus !== 0) {
      obj.tradingStatus = securityTradingStatusToJSON(message.tradingStatus);
    }
    if (message.realExchange !== 0) {
      obj.realExchange = realExchangeToJSON(message.realExchange);
    }
    if (message.direction !== 0) {
      obj.direction = optionDirectionToJSON(message.direction);
    }
    if (message.paymentType !== 0) {
      obj.paymentType = optionPaymentTypeToJSON(message.paymentType);
    }
    if (message.style !== 0) {
      obj.style = optionStyleToJSON(message.style);
    }
    if (message.settlementType !== 0) {
      obj.settlementType = optionSettlementTypeToJSON(message.settlementType);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.currency !== "") {
      obj.currency = message.currency;
    }
    if (message.settlementCurrency !== "") {
      obj.settlementCurrency = message.settlementCurrency;
    }
    if (message.assetType !== "") {
      obj.assetType = message.assetType;
    }
    if (message.basicAsset !== "") {
      obj.basicAsset = message.basicAsset;
    }
    if (message.exchange !== "") {
      obj.exchange = message.exchange;
    }
    if (message.countryOfRisk !== "") {
      obj.countryOfRisk = message.countryOfRisk;
    }
    if (message.countryOfRiskName !== "") {
      obj.countryOfRiskName = message.countryOfRiskName;
    }
    if (message.sector !== "") {
      obj.sector = message.sector;
    }
    if (message.lot !== 0) {
      obj.lot = Math.round(message.lot);
    }
    if (message.basicAssetSize !== undefined) {
      obj.basicAssetSize = Quotation.toJSON(message.basicAssetSize);
    }
    if (message.klong !== undefined) {
      obj.klong = Quotation.toJSON(message.klong);
    }
    if (message.kshort !== undefined) {
      obj.kshort = Quotation.toJSON(message.kshort);
    }
    if (message.dlong !== undefined) {
      obj.dlong = Quotation.toJSON(message.dlong);
    }
    if (message.dshort !== undefined) {
      obj.dshort = Quotation.toJSON(message.dshort);
    }
    if (message.dlongMin !== undefined) {
      obj.dlongMin = Quotation.toJSON(message.dlongMin);
    }
    if (message.dshortMin !== undefined) {
      obj.dshortMin = Quotation.toJSON(message.dshortMin);
    }
    if (message.minPriceIncrement !== undefined) {
      obj.minPriceIncrement = Quotation.toJSON(message.minPriceIncrement);
    }
    if (message.strikePrice !== undefined) {
      obj.strikePrice = MoneyValue.toJSON(message.strikePrice);
    }
    if (message.expirationDate !== undefined) {
      obj.expirationDate = message.expirationDate.toISOString();
    }
    if (message.firstTradeDate !== undefined) {
      obj.firstTradeDate = message.firstTradeDate.toISOString();
    }
    if (message.lastTradeDate !== undefined) {
      obj.lastTradeDate = message.lastTradeDate.toISOString();
    }
    if (message.first1minCandleDate !== undefined) {
      obj.first1minCandleDate = message.first1minCandleDate.toISOString();
    }
    if (message.first1dayCandleDate !== undefined) {
      obj.first1dayCandleDate = message.first1dayCandleDate.toISOString();
    }
    if (message.shortEnabledFlag === true) {
      obj.shortEnabledFlag = message.shortEnabledFlag;
    }
    if (message.forIisFlag === true) {
      obj.forIisFlag = message.forIisFlag;
    }
    if (message.otcFlag === true) {
      obj.otcFlag = message.otcFlag;
    }
    if (message.buyAvailableFlag === true) {
      obj.buyAvailableFlag = message.buyAvailableFlag;
    }
    if (message.sellAvailableFlag === true) {
      obj.sellAvailableFlag = message.sellAvailableFlag;
    }
    if (message.forQualInvestorFlag === true) {
      obj.forQualInvestorFlag = message.forQualInvestorFlag;
    }
    if (message.weekendFlag === true) {
      obj.weekendFlag = message.weekendFlag;
    }
    if (message.blockedTcaFlag === true) {
      obj.blockedTcaFlag = message.blockedTcaFlag;
    }
    if (message.apiTradeAvailableFlag === true) {
      obj.apiTradeAvailableFlag = message.apiTradeAvailableFlag;
    }
    return obj;
  },
};

function createBaseShareResponse(): ShareResponse {
  return { instrument: undefined };
}

export const ShareResponse = {
  encode(message: ShareResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instrument !== undefined) {
      Share.encode(message.instrument, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ShareResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShareResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instrument = Share.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ShareResponse {
    return { instrument: isSet(object.instrument) ? Share.fromJSON(object.instrument) : undefined };
  },

  toJSON(message: ShareResponse): unknown {
    const obj: any = {};
    if (message.instrument !== undefined) {
      obj.instrument = Share.toJSON(message.instrument);
    }
    return obj;
  },
};

function createBaseSharesResponse(): SharesResponse {
  return { instruments: [] };
}

export const SharesResponse = {
  encode(message: SharesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.instruments) {
      Share.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SharesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSharesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instruments.push(Share.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SharesResponse {
    return {
      instruments: globalThis.Array.isArray(object?.instruments)
        ? object.instruments.map((e: any) => Share.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SharesResponse): unknown {
    const obj: any = {};
    if (message.instruments?.length) {
      obj.instruments = message.instruments.map((e) => Share.toJSON(e));
    }
    return obj;
  },
};

function createBaseBond(): Bond {
  return {
    figi: "",
    ticker: "",
    classCode: "",
    isin: "",
    lot: 0,
    currency: "",
    klong: undefined,
    kshort: undefined,
    dlong: undefined,
    dshort: undefined,
    dlongMin: undefined,
    dshortMin: undefined,
    shortEnabledFlag: false,
    name: "",
    exchange: "",
    couponQuantityPerYear: 0,
    maturityDate: undefined,
    nominal: undefined,
    initialNominal: undefined,
    stateRegDate: undefined,
    placementDate: undefined,
    placementPrice: undefined,
    aciValue: undefined,
    countryOfRisk: "",
    countryOfRiskName: "",
    sector: "",
    issueKind: "",
    issueSize: 0,
    issueSizePlan: 0,
    tradingStatus: 0,
    otcFlag: false,
    buyAvailableFlag: false,
    sellAvailableFlag: false,
    floatingCouponFlag: false,
    perpetualFlag: false,
    amortizationFlag: false,
    minPriceIncrement: undefined,
    apiTradeAvailableFlag: false,
    uid: "",
    realExchange: 0,
    positionUid: "",
    forIisFlag: false,
    forQualInvestorFlag: false,
    weekendFlag: false,
    blockedTcaFlag: false,
    subordinatedFlag: false,
    liquidityFlag: false,
    first1minCandleDate: undefined,
    first1dayCandleDate: undefined,
    riskLevel: 0,
  };
}

export const Bond = {
  encode(message: Bond, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.ticker !== "") {
      writer.uint32(18).string(message.ticker);
    }
    if (message.classCode !== "") {
      writer.uint32(26).string(message.classCode);
    }
    if (message.isin !== "") {
      writer.uint32(34).string(message.isin);
    }
    if (message.lot !== 0) {
      writer.uint32(40).int32(message.lot);
    }
    if (message.currency !== "") {
      writer.uint32(50).string(message.currency);
    }
    if (message.klong !== undefined) {
      Quotation.encode(message.klong, writer.uint32(58).fork()).ldelim();
    }
    if (message.kshort !== undefined) {
      Quotation.encode(message.kshort, writer.uint32(66).fork()).ldelim();
    }
    if (message.dlong !== undefined) {
      Quotation.encode(message.dlong, writer.uint32(74).fork()).ldelim();
    }
    if (message.dshort !== undefined) {
      Quotation.encode(message.dshort, writer.uint32(82).fork()).ldelim();
    }
    if (message.dlongMin !== undefined) {
      Quotation.encode(message.dlongMin, writer.uint32(90).fork()).ldelim();
    }
    if (message.dshortMin !== undefined) {
      Quotation.encode(message.dshortMin, writer.uint32(98).fork()).ldelim();
    }
    if (message.shortEnabledFlag === true) {
      writer.uint32(104).bool(message.shortEnabledFlag);
    }
    if (message.name !== "") {
      writer.uint32(122).string(message.name);
    }
    if (message.exchange !== "") {
      writer.uint32(130).string(message.exchange);
    }
    if (message.couponQuantityPerYear !== 0) {
      writer.uint32(136).int32(message.couponQuantityPerYear);
    }
    if (message.maturityDate !== undefined) {
      Timestamp.encode(toTimestamp(message.maturityDate), writer.uint32(146).fork()).ldelim();
    }
    if (message.nominal !== undefined) {
      MoneyValue.encode(message.nominal, writer.uint32(154).fork()).ldelim();
    }
    if (message.initialNominal !== undefined) {
      MoneyValue.encode(message.initialNominal, writer.uint32(162).fork()).ldelim();
    }
    if (message.stateRegDate !== undefined) {
      Timestamp.encode(toTimestamp(message.stateRegDate), writer.uint32(170).fork()).ldelim();
    }
    if (message.placementDate !== undefined) {
      Timestamp.encode(toTimestamp(message.placementDate), writer.uint32(178).fork()).ldelim();
    }
    if (message.placementPrice !== undefined) {
      MoneyValue.encode(message.placementPrice, writer.uint32(186).fork()).ldelim();
    }
    if (message.aciValue !== undefined) {
      MoneyValue.encode(message.aciValue, writer.uint32(194).fork()).ldelim();
    }
    if (message.countryOfRisk !== "") {
      writer.uint32(202).string(message.countryOfRisk);
    }
    if (message.countryOfRiskName !== "") {
      writer.uint32(210).string(message.countryOfRiskName);
    }
    if (message.sector !== "") {
      writer.uint32(218).string(message.sector);
    }
    if (message.issueKind !== "") {
      writer.uint32(226).string(message.issueKind);
    }
    if (message.issueSize !== 0) {
      writer.uint32(232).int64(message.issueSize);
    }
    if (message.issueSizePlan !== 0) {
      writer.uint32(240).int64(message.issueSizePlan);
    }
    if (message.tradingStatus !== 0) {
      writer.uint32(248).int32(message.tradingStatus);
    }
    if (message.otcFlag === true) {
      writer.uint32(256).bool(message.otcFlag);
    }
    if (message.buyAvailableFlag === true) {
      writer.uint32(264).bool(message.buyAvailableFlag);
    }
    if (message.sellAvailableFlag === true) {
      writer.uint32(272).bool(message.sellAvailableFlag);
    }
    if (message.floatingCouponFlag === true) {
      writer.uint32(280).bool(message.floatingCouponFlag);
    }
    if (message.perpetualFlag === true) {
      writer.uint32(288).bool(message.perpetualFlag);
    }
    if (message.amortizationFlag === true) {
      writer.uint32(296).bool(message.amortizationFlag);
    }
    if (message.minPriceIncrement !== undefined) {
      Quotation.encode(message.minPriceIncrement, writer.uint32(306).fork()).ldelim();
    }
    if (message.apiTradeAvailableFlag === true) {
      writer.uint32(312).bool(message.apiTradeAvailableFlag);
    }
    if (message.uid !== "") {
      writer.uint32(322).string(message.uid);
    }
    if (message.realExchange !== 0) {
      writer.uint32(328).int32(message.realExchange);
    }
    if (message.positionUid !== "") {
      writer.uint32(338).string(message.positionUid);
    }
    if (message.forIisFlag === true) {
      writer.uint32(408).bool(message.forIisFlag);
    }
    if (message.forQualInvestorFlag === true) {
      writer.uint32(416).bool(message.forQualInvestorFlag);
    }
    if (message.weekendFlag === true) {
      writer.uint32(424).bool(message.weekendFlag);
    }
    if (message.blockedTcaFlag === true) {
      writer.uint32(432).bool(message.blockedTcaFlag);
    }
    if (message.subordinatedFlag === true) {
      writer.uint32(440).bool(message.subordinatedFlag);
    }
    if (message.liquidityFlag === true) {
      writer.uint32(448).bool(message.liquidityFlag);
    }
    if (message.first1minCandleDate !== undefined) {
      Timestamp.encode(toTimestamp(message.first1minCandleDate), writer.uint32(490).fork()).ldelim();
    }
    if (message.first1dayCandleDate !== undefined) {
      Timestamp.encode(toTimestamp(message.first1dayCandleDate), writer.uint32(498).fork()).ldelim();
    }
    if (message.riskLevel !== 0) {
      writer.uint32(504).int32(message.riskLevel);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Bond {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBond();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.figi = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.ticker = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.classCode = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.isin = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.lot = reader.int32();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.currency = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.klong = Quotation.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.kshort = Quotation.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.dlong = Quotation.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.dshort = Quotation.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.dlongMin = Quotation.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.dshortMin = Quotation.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.shortEnabledFlag = reader.bool();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.name = reader.string();
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.exchange = reader.string();
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }

          message.couponQuantityPerYear = reader.int32();
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.maturityDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.nominal = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.initialNominal = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.stateRegDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.placementDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.placementPrice = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.aciValue = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 25:
          if (tag !== 202) {
            break;
          }

          message.countryOfRisk = reader.string();
          continue;
        case 26:
          if (tag !== 210) {
            break;
          }

          message.countryOfRiskName = reader.string();
          continue;
        case 27:
          if (tag !== 218) {
            break;
          }

          message.sector = reader.string();
          continue;
        case 28:
          if (tag !== 226) {
            break;
          }

          message.issueKind = reader.string();
          continue;
        case 29:
          if (tag !== 232) {
            break;
          }

          message.issueSize = longToNumber(reader.int64() as Long);
          continue;
        case 30:
          if (tag !== 240) {
            break;
          }

          message.issueSizePlan = longToNumber(reader.int64() as Long);
          continue;
        case 31:
          if (tag !== 248) {
            break;
          }

          message.tradingStatus = reader.int32() as any;
          continue;
        case 32:
          if (tag !== 256) {
            break;
          }

          message.otcFlag = reader.bool();
          continue;
        case 33:
          if (tag !== 264) {
            break;
          }

          message.buyAvailableFlag = reader.bool();
          continue;
        case 34:
          if (tag !== 272) {
            break;
          }

          message.sellAvailableFlag = reader.bool();
          continue;
        case 35:
          if (tag !== 280) {
            break;
          }

          message.floatingCouponFlag = reader.bool();
          continue;
        case 36:
          if (tag !== 288) {
            break;
          }

          message.perpetualFlag = reader.bool();
          continue;
        case 37:
          if (tag !== 296) {
            break;
          }

          message.amortizationFlag = reader.bool();
          continue;
        case 38:
          if (tag !== 306) {
            break;
          }

          message.minPriceIncrement = Quotation.decode(reader, reader.uint32());
          continue;
        case 39:
          if (tag !== 312) {
            break;
          }

          message.apiTradeAvailableFlag = reader.bool();
          continue;
        case 40:
          if (tag !== 322) {
            break;
          }

          message.uid = reader.string();
          continue;
        case 41:
          if (tag !== 328) {
            break;
          }

          message.realExchange = reader.int32() as any;
          continue;
        case 42:
          if (tag !== 338) {
            break;
          }

          message.positionUid = reader.string();
          continue;
        case 51:
          if (tag !== 408) {
            break;
          }

          message.forIisFlag = reader.bool();
          continue;
        case 52:
          if (tag !== 416) {
            break;
          }

          message.forQualInvestorFlag = reader.bool();
          continue;
        case 53:
          if (tag !== 424) {
            break;
          }

          message.weekendFlag = reader.bool();
          continue;
        case 54:
          if (tag !== 432) {
            break;
          }

          message.blockedTcaFlag = reader.bool();
          continue;
        case 55:
          if (tag !== 440) {
            break;
          }

          message.subordinatedFlag = reader.bool();
          continue;
        case 56:
          if (tag !== 448) {
            break;
          }

          message.liquidityFlag = reader.bool();
          continue;
        case 61:
          if (tag !== 490) {
            break;
          }

          message.first1minCandleDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 62:
          if (tag !== 498) {
            break;
          }

          message.first1dayCandleDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 63:
          if (tag !== 504) {
            break;
          }

          message.riskLevel = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Bond {
    return {
      figi: isSet(object.figi) ? globalThis.String(object.figi) : "",
      ticker: isSet(object.ticker) ? globalThis.String(object.ticker) : "",
      classCode: isSet(object.classCode) ? globalThis.String(object.classCode) : "",
      isin: isSet(object.isin) ? globalThis.String(object.isin) : "",
      lot: isSet(object.lot) ? globalThis.Number(object.lot) : 0,
      currency: isSet(object.currency) ? globalThis.String(object.currency) : "",
      klong: isSet(object.klong) ? Quotation.fromJSON(object.klong) : undefined,
      kshort: isSet(object.kshort) ? Quotation.fromJSON(object.kshort) : undefined,
      dlong: isSet(object.dlong) ? Quotation.fromJSON(object.dlong) : undefined,
      dshort: isSet(object.dshort) ? Quotation.fromJSON(object.dshort) : undefined,
      dlongMin: isSet(object.dlongMin) ? Quotation.fromJSON(object.dlongMin) : undefined,
      dshortMin: isSet(object.dshortMin) ? Quotation.fromJSON(object.dshortMin) : undefined,
      shortEnabledFlag: isSet(object.shortEnabledFlag) ? globalThis.Boolean(object.shortEnabledFlag) : false,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      exchange: isSet(object.exchange) ? globalThis.String(object.exchange) : "",
      couponQuantityPerYear: isSet(object.couponQuantityPerYear) ? globalThis.Number(object.couponQuantityPerYear) : 0,
      maturityDate: isSet(object.maturityDate) ? fromJsonTimestamp(object.maturityDate) : undefined,
      nominal: isSet(object.nominal) ? MoneyValue.fromJSON(object.nominal) : undefined,
      initialNominal: isSet(object.initialNominal) ? MoneyValue.fromJSON(object.initialNominal) : undefined,
      stateRegDate: isSet(object.stateRegDate) ? fromJsonTimestamp(object.stateRegDate) : undefined,
      placementDate: isSet(object.placementDate) ? fromJsonTimestamp(object.placementDate) : undefined,
      placementPrice: isSet(object.placementPrice) ? MoneyValue.fromJSON(object.placementPrice) : undefined,
      aciValue: isSet(object.aciValue) ? MoneyValue.fromJSON(object.aciValue) : undefined,
      countryOfRisk: isSet(object.countryOfRisk) ? globalThis.String(object.countryOfRisk) : "",
      countryOfRiskName: isSet(object.countryOfRiskName) ? globalThis.String(object.countryOfRiskName) : "",
      sector: isSet(object.sector) ? globalThis.String(object.sector) : "",
      issueKind: isSet(object.issueKind) ? globalThis.String(object.issueKind) : "",
      issueSize: isSet(object.issueSize) ? globalThis.Number(object.issueSize) : 0,
      issueSizePlan: isSet(object.issueSizePlan) ? globalThis.Number(object.issueSizePlan) : 0,
      tradingStatus: isSet(object.tradingStatus) ? securityTradingStatusFromJSON(object.tradingStatus) : 0,
      otcFlag: isSet(object.otcFlag) ? globalThis.Boolean(object.otcFlag) : false,
      buyAvailableFlag: isSet(object.buyAvailableFlag) ? globalThis.Boolean(object.buyAvailableFlag) : false,
      sellAvailableFlag: isSet(object.sellAvailableFlag) ? globalThis.Boolean(object.sellAvailableFlag) : false,
      floatingCouponFlag: isSet(object.floatingCouponFlag) ? globalThis.Boolean(object.floatingCouponFlag) : false,
      perpetualFlag: isSet(object.perpetualFlag) ? globalThis.Boolean(object.perpetualFlag) : false,
      amortizationFlag: isSet(object.amortizationFlag) ? globalThis.Boolean(object.amortizationFlag) : false,
      minPriceIncrement: isSet(object.minPriceIncrement) ? Quotation.fromJSON(object.minPriceIncrement) : undefined,
      apiTradeAvailableFlag: isSet(object.apiTradeAvailableFlag)
        ? globalThis.Boolean(object.apiTradeAvailableFlag)
        : false,
      uid: isSet(object.uid) ? globalThis.String(object.uid) : "",
      realExchange: isSet(object.realExchange) ? realExchangeFromJSON(object.realExchange) : 0,
      positionUid: isSet(object.positionUid) ? globalThis.String(object.positionUid) : "",
      forIisFlag: isSet(object.forIisFlag) ? globalThis.Boolean(object.forIisFlag) : false,
      forQualInvestorFlag: isSet(object.forQualInvestorFlag) ? globalThis.Boolean(object.forQualInvestorFlag) : false,
      weekendFlag: isSet(object.weekendFlag) ? globalThis.Boolean(object.weekendFlag) : false,
      blockedTcaFlag: isSet(object.blockedTcaFlag) ? globalThis.Boolean(object.blockedTcaFlag) : false,
      subordinatedFlag: isSet(object.subordinatedFlag) ? globalThis.Boolean(object.subordinatedFlag) : false,
      liquidityFlag: isSet(object.liquidityFlag) ? globalThis.Boolean(object.liquidityFlag) : false,
      first1minCandleDate: isSet(object.first1minCandleDate)
        ? fromJsonTimestamp(object.first1minCandleDate)
        : undefined,
      first1dayCandleDate: isSet(object.first1dayCandleDate)
        ? fromJsonTimestamp(object.first1dayCandleDate)
        : undefined,
      riskLevel: isSet(object.riskLevel) ? riskLevelFromJSON(object.riskLevel) : 0,
    };
  },

  toJSON(message: Bond): unknown {
    const obj: any = {};
    if (message.figi !== "") {
      obj.figi = message.figi;
    }
    if (message.ticker !== "") {
      obj.ticker = message.ticker;
    }
    if (message.classCode !== "") {
      obj.classCode = message.classCode;
    }
    if (message.isin !== "") {
      obj.isin = message.isin;
    }
    if (message.lot !== 0) {
      obj.lot = Math.round(message.lot);
    }
    if (message.currency !== "") {
      obj.currency = message.currency;
    }
    if (message.klong !== undefined) {
      obj.klong = Quotation.toJSON(message.klong);
    }
    if (message.kshort !== undefined) {
      obj.kshort = Quotation.toJSON(message.kshort);
    }
    if (message.dlong !== undefined) {
      obj.dlong = Quotation.toJSON(message.dlong);
    }
    if (message.dshort !== undefined) {
      obj.dshort = Quotation.toJSON(message.dshort);
    }
    if (message.dlongMin !== undefined) {
      obj.dlongMin = Quotation.toJSON(message.dlongMin);
    }
    if (message.dshortMin !== undefined) {
      obj.dshortMin = Quotation.toJSON(message.dshortMin);
    }
    if (message.shortEnabledFlag === true) {
      obj.shortEnabledFlag = message.shortEnabledFlag;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.exchange !== "") {
      obj.exchange = message.exchange;
    }
    if (message.couponQuantityPerYear !== 0) {
      obj.couponQuantityPerYear = Math.round(message.couponQuantityPerYear);
    }
    if (message.maturityDate !== undefined) {
      obj.maturityDate = message.maturityDate.toISOString();
    }
    if (message.nominal !== undefined) {
      obj.nominal = MoneyValue.toJSON(message.nominal);
    }
    if (message.initialNominal !== undefined) {
      obj.initialNominal = MoneyValue.toJSON(message.initialNominal);
    }
    if (message.stateRegDate !== undefined) {
      obj.stateRegDate = message.stateRegDate.toISOString();
    }
    if (message.placementDate !== undefined) {
      obj.placementDate = message.placementDate.toISOString();
    }
    if (message.placementPrice !== undefined) {
      obj.placementPrice = MoneyValue.toJSON(message.placementPrice);
    }
    if (message.aciValue !== undefined) {
      obj.aciValue = MoneyValue.toJSON(message.aciValue);
    }
    if (message.countryOfRisk !== "") {
      obj.countryOfRisk = message.countryOfRisk;
    }
    if (message.countryOfRiskName !== "") {
      obj.countryOfRiskName = message.countryOfRiskName;
    }
    if (message.sector !== "") {
      obj.sector = message.sector;
    }
    if (message.issueKind !== "") {
      obj.issueKind = message.issueKind;
    }
    if (message.issueSize !== 0) {
      obj.issueSize = Math.round(message.issueSize);
    }
    if (message.issueSizePlan !== 0) {
      obj.issueSizePlan = Math.round(message.issueSizePlan);
    }
    if (message.tradingStatus !== 0) {
      obj.tradingStatus = securityTradingStatusToJSON(message.tradingStatus);
    }
    if (message.otcFlag === true) {
      obj.otcFlag = message.otcFlag;
    }
    if (message.buyAvailableFlag === true) {
      obj.buyAvailableFlag = message.buyAvailableFlag;
    }
    if (message.sellAvailableFlag === true) {
      obj.sellAvailableFlag = message.sellAvailableFlag;
    }
    if (message.floatingCouponFlag === true) {
      obj.floatingCouponFlag = message.floatingCouponFlag;
    }
    if (message.perpetualFlag === true) {
      obj.perpetualFlag = message.perpetualFlag;
    }
    if (message.amortizationFlag === true) {
      obj.amortizationFlag = message.amortizationFlag;
    }
    if (message.minPriceIncrement !== undefined) {
      obj.minPriceIncrement = Quotation.toJSON(message.minPriceIncrement);
    }
    if (message.apiTradeAvailableFlag === true) {
      obj.apiTradeAvailableFlag = message.apiTradeAvailableFlag;
    }
    if (message.uid !== "") {
      obj.uid = message.uid;
    }
    if (message.realExchange !== 0) {
      obj.realExchange = realExchangeToJSON(message.realExchange);
    }
    if (message.positionUid !== "") {
      obj.positionUid = message.positionUid;
    }
    if (message.forIisFlag === true) {
      obj.forIisFlag = message.forIisFlag;
    }
    if (message.forQualInvestorFlag === true) {
      obj.forQualInvestorFlag = message.forQualInvestorFlag;
    }
    if (message.weekendFlag === true) {
      obj.weekendFlag = message.weekendFlag;
    }
    if (message.blockedTcaFlag === true) {
      obj.blockedTcaFlag = message.blockedTcaFlag;
    }
    if (message.subordinatedFlag === true) {
      obj.subordinatedFlag = message.subordinatedFlag;
    }
    if (message.liquidityFlag === true) {
      obj.liquidityFlag = message.liquidityFlag;
    }
    if (message.first1minCandleDate !== undefined) {
      obj.first1minCandleDate = message.first1minCandleDate.toISOString();
    }
    if (message.first1dayCandleDate !== undefined) {
      obj.first1dayCandleDate = message.first1dayCandleDate.toISOString();
    }
    if (message.riskLevel !== 0) {
      obj.riskLevel = riskLevelToJSON(message.riskLevel);
    }
    return obj;
  },
};

function createBaseCurrency(): Currency {
  return {
    figi: "",
    ticker: "",
    classCode: "",
    isin: "",
    lot: 0,
    currency: "",
    klong: undefined,
    kshort: undefined,
    dlong: undefined,
    dshort: undefined,
    dlongMin: undefined,
    dshortMin: undefined,
    shortEnabledFlag: false,
    name: "",
    exchange: "",
    nominal: undefined,
    countryOfRisk: "",
    countryOfRiskName: "",
    tradingStatus: 0,
    otcFlag: false,
    buyAvailableFlag: false,
    sellAvailableFlag: false,
    isoCurrencyName: "",
    minPriceIncrement: undefined,
    apiTradeAvailableFlag: false,
    uid: "",
    realExchange: 0,
    positionUid: "",
    forIisFlag: false,
    forQualInvestorFlag: false,
    weekendFlag: false,
    blockedTcaFlag: false,
    first1minCandleDate: undefined,
    first1dayCandleDate: undefined,
  };
}

export const Currency = {
  encode(message: Currency, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.ticker !== "") {
      writer.uint32(18).string(message.ticker);
    }
    if (message.classCode !== "") {
      writer.uint32(26).string(message.classCode);
    }
    if (message.isin !== "") {
      writer.uint32(34).string(message.isin);
    }
    if (message.lot !== 0) {
      writer.uint32(40).int32(message.lot);
    }
    if (message.currency !== "") {
      writer.uint32(50).string(message.currency);
    }
    if (message.klong !== undefined) {
      Quotation.encode(message.klong, writer.uint32(58).fork()).ldelim();
    }
    if (message.kshort !== undefined) {
      Quotation.encode(message.kshort, writer.uint32(66).fork()).ldelim();
    }
    if (message.dlong !== undefined) {
      Quotation.encode(message.dlong, writer.uint32(74).fork()).ldelim();
    }
    if (message.dshort !== undefined) {
      Quotation.encode(message.dshort, writer.uint32(82).fork()).ldelim();
    }
    if (message.dlongMin !== undefined) {
      Quotation.encode(message.dlongMin, writer.uint32(90).fork()).ldelim();
    }
    if (message.dshortMin !== undefined) {
      Quotation.encode(message.dshortMin, writer.uint32(98).fork()).ldelim();
    }
    if (message.shortEnabledFlag === true) {
      writer.uint32(104).bool(message.shortEnabledFlag);
    }
    if (message.name !== "") {
      writer.uint32(122).string(message.name);
    }
    if (message.exchange !== "") {
      writer.uint32(130).string(message.exchange);
    }
    if (message.nominal !== undefined) {
      MoneyValue.encode(message.nominal, writer.uint32(138).fork()).ldelim();
    }
    if (message.countryOfRisk !== "") {
      writer.uint32(146).string(message.countryOfRisk);
    }
    if (message.countryOfRiskName !== "") {
      writer.uint32(154).string(message.countryOfRiskName);
    }
    if (message.tradingStatus !== 0) {
      writer.uint32(160).int32(message.tradingStatus);
    }
    if (message.otcFlag === true) {
      writer.uint32(168).bool(message.otcFlag);
    }
    if (message.buyAvailableFlag === true) {
      writer.uint32(176).bool(message.buyAvailableFlag);
    }
    if (message.sellAvailableFlag === true) {
      writer.uint32(184).bool(message.sellAvailableFlag);
    }
    if (message.isoCurrencyName !== "") {
      writer.uint32(194).string(message.isoCurrencyName);
    }
    if (message.minPriceIncrement !== undefined) {
      Quotation.encode(message.minPriceIncrement, writer.uint32(202).fork()).ldelim();
    }
    if (message.apiTradeAvailableFlag === true) {
      writer.uint32(208).bool(message.apiTradeAvailableFlag);
    }
    if (message.uid !== "") {
      writer.uint32(218).string(message.uid);
    }
    if (message.realExchange !== 0) {
      writer.uint32(224).int32(message.realExchange);
    }
    if (message.positionUid !== "") {
      writer.uint32(234).string(message.positionUid);
    }
    if (message.forIisFlag === true) {
      writer.uint32(328).bool(message.forIisFlag);
    }
    if (message.forQualInvestorFlag === true) {
      writer.uint32(416).bool(message.forQualInvestorFlag);
    }
    if (message.weekendFlag === true) {
      writer.uint32(424).bool(message.weekendFlag);
    }
    if (message.blockedTcaFlag === true) {
      writer.uint32(432).bool(message.blockedTcaFlag);
    }
    if (message.first1minCandleDate !== undefined) {
      Timestamp.encode(toTimestamp(message.first1minCandleDate), writer.uint32(450).fork()).ldelim();
    }
    if (message.first1dayCandleDate !== undefined) {
      Timestamp.encode(toTimestamp(message.first1dayCandleDate), writer.uint32(458).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Currency {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurrency();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.figi = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.ticker = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.classCode = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.isin = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.lot = reader.int32();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.currency = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.klong = Quotation.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.kshort = Quotation.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.dlong = Quotation.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.dshort = Quotation.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.dlongMin = Quotation.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.dshortMin = Quotation.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.shortEnabledFlag = reader.bool();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.name = reader.string();
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.exchange = reader.string();
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.nominal = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.countryOfRisk = reader.string();
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.countryOfRiskName = reader.string();
          continue;
        case 20:
          if (tag !== 160) {
            break;
          }

          message.tradingStatus = reader.int32() as any;
          continue;
        case 21:
          if (tag !== 168) {
            break;
          }

          message.otcFlag = reader.bool();
          continue;
        case 22:
          if (tag !== 176) {
            break;
          }

          message.buyAvailableFlag = reader.bool();
          continue;
        case 23:
          if (tag !== 184) {
            break;
          }

          message.sellAvailableFlag = reader.bool();
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.isoCurrencyName = reader.string();
          continue;
        case 25:
          if (tag !== 202) {
            break;
          }

          message.minPriceIncrement = Quotation.decode(reader, reader.uint32());
          continue;
        case 26:
          if (tag !== 208) {
            break;
          }

          message.apiTradeAvailableFlag = reader.bool();
          continue;
        case 27:
          if (tag !== 218) {
            break;
          }

          message.uid = reader.string();
          continue;
        case 28:
          if (tag !== 224) {
            break;
          }

          message.realExchange = reader.int32() as any;
          continue;
        case 29:
          if (tag !== 234) {
            break;
          }

          message.positionUid = reader.string();
          continue;
        case 41:
          if (tag !== 328) {
            break;
          }

          message.forIisFlag = reader.bool();
          continue;
        case 52:
          if (tag !== 416) {
            break;
          }

          message.forQualInvestorFlag = reader.bool();
          continue;
        case 53:
          if (tag !== 424) {
            break;
          }

          message.weekendFlag = reader.bool();
          continue;
        case 54:
          if (tag !== 432) {
            break;
          }

          message.blockedTcaFlag = reader.bool();
          continue;
        case 56:
          if (tag !== 450) {
            break;
          }

          message.first1minCandleDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 57:
          if (tag !== 458) {
            break;
          }

          message.first1dayCandleDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Currency {
    return {
      figi: isSet(object.figi) ? globalThis.String(object.figi) : "",
      ticker: isSet(object.ticker) ? globalThis.String(object.ticker) : "",
      classCode: isSet(object.classCode) ? globalThis.String(object.classCode) : "",
      isin: isSet(object.isin) ? globalThis.String(object.isin) : "",
      lot: isSet(object.lot) ? globalThis.Number(object.lot) : 0,
      currency: isSet(object.currency) ? globalThis.String(object.currency) : "",
      klong: isSet(object.klong) ? Quotation.fromJSON(object.klong) : undefined,
      kshort: isSet(object.kshort) ? Quotation.fromJSON(object.kshort) : undefined,
      dlong: isSet(object.dlong) ? Quotation.fromJSON(object.dlong) : undefined,
      dshort: isSet(object.dshort) ? Quotation.fromJSON(object.dshort) : undefined,
      dlongMin: isSet(object.dlongMin) ? Quotation.fromJSON(object.dlongMin) : undefined,
      dshortMin: isSet(object.dshortMin) ? Quotation.fromJSON(object.dshortMin) : undefined,
      shortEnabledFlag: isSet(object.shortEnabledFlag) ? globalThis.Boolean(object.shortEnabledFlag) : false,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      exchange: isSet(object.exchange) ? globalThis.String(object.exchange) : "",
      nominal: isSet(object.nominal) ? MoneyValue.fromJSON(object.nominal) : undefined,
      countryOfRisk: isSet(object.countryOfRisk) ? globalThis.String(object.countryOfRisk) : "",
      countryOfRiskName: isSet(object.countryOfRiskName) ? globalThis.String(object.countryOfRiskName) : "",
      tradingStatus: isSet(object.tradingStatus) ? securityTradingStatusFromJSON(object.tradingStatus) : 0,
      otcFlag: isSet(object.otcFlag) ? globalThis.Boolean(object.otcFlag) : false,
      buyAvailableFlag: isSet(object.buyAvailableFlag) ? globalThis.Boolean(object.buyAvailableFlag) : false,
      sellAvailableFlag: isSet(object.sellAvailableFlag) ? globalThis.Boolean(object.sellAvailableFlag) : false,
      isoCurrencyName: isSet(object.isoCurrencyName) ? globalThis.String(object.isoCurrencyName) : "",
      minPriceIncrement: isSet(object.minPriceIncrement) ? Quotation.fromJSON(object.minPriceIncrement) : undefined,
      apiTradeAvailableFlag: isSet(object.apiTradeAvailableFlag)
        ? globalThis.Boolean(object.apiTradeAvailableFlag)
        : false,
      uid: isSet(object.uid) ? globalThis.String(object.uid) : "",
      realExchange: isSet(object.realExchange) ? realExchangeFromJSON(object.realExchange) : 0,
      positionUid: isSet(object.positionUid) ? globalThis.String(object.positionUid) : "",
      forIisFlag: isSet(object.forIisFlag) ? globalThis.Boolean(object.forIisFlag) : false,
      forQualInvestorFlag: isSet(object.forQualInvestorFlag) ? globalThis.Boolean(object.forQualInvestorFlag) : false,
      weekendFlag: isSet(object.weekendFlag) ? globalThis.Boolean(object.weekendFlag) : false,
      blockedTcaFlag: isSet(object.blockedTcaFlag) ? globalThis.Boolean(object.blockedTcaFlag) : false,
      first1minCandleDate: isSet(object.first1minCandleDate)
        ? fromJsonTimestamp(object.first1minCandleDate)
        : undefined,
      first1dayCandleDate: isSet(object.first1dayCandleDate)
        ? fromJsonTimestamp(object.first1dayCandleDate)
        : undefined,
    };
  },

  toJSON(message: Currency): unknown {
    const obj: any = {};
    if (message.figi !== "") {
      obj.figi = message.figi;
    }
    if (message.ticker !== "") {
      obj.ticker = message.ticker;
    }
    if (message.classCode !== "") {
      obj.classCode = message.classCode;
    }
    if (message.isin !== "") {
      obj.isin = message.isin;
    }
    if (message.lot !== 0) {
      obj.lot = Math.round(message.lot);
    }
    if (message.currency !== "") {
      obj.currency = message.currency;
    }
    if (message.klong !== undefined) {
      obj.klong = Quotation.toJSON(message.klong);
    }
    if (message.kshort !== undefined) {
      obj.kshort = Quotation.toJSON(message.kshort);
    }
    if (message.dlong !== undefined) {
      obj.dlong = Quotation.toJSON(message.dlong);
    }
    if (message.dshort !== undefined) {
      obj.dshort = Quotation.toJSON(message.dshort);
    }
    if (message.dlongMin !== undefined) {
      obj.dlongMin = Quotation.toJSON(message.dlongMin);
    }
    if (message.dshortMin !== undefined) {
      obj.dshortMin = Quotation.toJSON(message.dshortMin);
    }
    if (message.shortEnabledFlag === true) {
      obj.shortEnabledFlag = message.shortEnabledFlag;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.exchange !== "") {
      obj.exchange = message.exchange;
    }
    if (message.nominal !== undefined) {
      obj.nominal = MoneyValue.toJSON(message.nominal);
    }
    if (message.countryOfRisk !== "") {
      obj.countryOfRisk = message.countryOfRisk;
    }
    if (message.countryOfRiskName !== "") {
      obj.countryOfRiskName = message.countryOfRiskName;
    }
    if (message.tradingStatus !== 0) {
      obj.tradingStatus = securityTradingStatusToJSON(message.tradingStatus);
    }
    if (message.otcFlag === true) {
      obj.otcFlag = message.otcFlag;
    }
    if (message.buyAvailableFlag === true) {
      obj.buyAvailableFlag = message.buyAvailableFlag;
    }
    if (message.sellAvailableFlag === true) {
      obj.sellAvailableFlag = message.sellAvailableFlag;
    }
    if (message.isoCurrencyName !== "") {
      obj.isoCurrencyName = message.isoCurrencyName;
    }
    if (message.minPriceIncrement !== undefined) {
      obj.minPriceIncrement = Quotation.toJSON(message.minPriceIncrement);
    }
    if (message.apiTradeAvailableFlag === true) {
      obj.apiTradeAvailableFlag = message.apiTradeAvailableFlag;
    }
    if (message.uid !== "") {
      obj.uid = message.uid;
    }
    if (message.realExchange !== 0) {
      obj.realExchange = realExchangeToJSON(message.realExchange);
    }
    if (message.positionUid !== "") {
      obj.positionUid = message.positionUid;
    }
    if (message.forIisFlag === true) {
      obj.forIisFlag = message.forIisFlag;
    }
    if (message.forQualInvestorFlag === true) {
      obj.forQualInvestorFlag = message.forQualInvestorFlag;
    }
    if (message.weekendFlag === true) {
      obj.weekendFlag = message.weekendFlag;
    }
    if (message.blockedTcaFlag === true) {
      obj.blockedTcaFlag = message.blockedTcaFlag;
    }
    if (message.first1minCandleDate !== undefined) {
      obj.first1minCandleDate = message.first1minCandleDate.toISOString();
    }
    if (message.first1dayCandleDate !== undefined) {
      obj.first1dayCandleDate = message.first1dayCandleDate.toISOString();
    }
    return obj;
  },
};

function createBaseEtf(): Etf {
  return {
    figi: "",
    ticker: "",
    classCode: "",
    isin: "",
    lot: 0,
    currency: "",
    klong: undefined,
    kshort: undefined,
    dlong: undefined,
    dshort: undefined,
    dlongMin: undefined,
    dshortMin: undefined,
    shortEnabledFlag: false,
    name: "",
    exchange: "",
    fixedCommission: undefined,
    focusType: "",
    releasedDate: undefined,
    numShares: undefined,
    countryOfRisk: "",
    countryOfRiskName: "",
    sector: "",
    rebalancingFreq: "",
    tradingStatus: 0,
    otcFlag: false,
    buyAvailableFlag: false,
    sellAvailableFlag: false,
    minPriceIncrement: undefined,
    apiTradeAvailableFlag: false,
    uid: "",
    realExchange: 0,
    positionUid: "",
    forIisFlag: false,
    forQualInvestorFlag: false,
    weekendFlag: false,
    blockedTcaFlag: false,
    liquidityFlag: false,
    first1minCandleDate: undefined,
    first1dayCandleDate: undefined,
  };
}

export const Etf = {
  encode(message: Etf, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.ticker !== "") {
      writer.uint32(18).string(message.ticker);
    }
    if (message.classCode !== "") {
      writer.uint32(26).string(message.classCode);
    }
    if (message.isin !== "") {
      writer.uint32(34).string(message.isin);
    }
    if (message.lot !== 0) {
      writer.uint32(40).int32(message.lot);
    }
    if (message.currency !== "") {
      writer.uint32(50).string(message.currency);
    }
    if (message.klong !== undefined) {
      Quotation.encode(message.klong, writer.uint32(58).fork()).ldelim();
    }
    if (message.kshort !== undefined) {
      Quotation.encode(message.kshort, writer.uint32(66).fork()).ldelim();
    }
    if (message.dlong !== undefined) {
      Quotation.encode(message.dlong, writer.uint32(74).fork()).ldelim();
    }
    if (message.dshort !== undefined) {
      Quotation.encode(message.dshort, writer.uint32(82).fork()).ldelim();
    }
    if (message.dlongMin !== undefined) {
      Quotation.encode(message.dlongMin, writer.uint32(90).fork()).ldelim();
    }
    if (message.dshortMin !== undefined) {
      Quotation.encode(message.dshortMin, writer.uint32(98).fork()).ldelim();
    }
    if (message.shortEnabledFlag === true) {
      writer.uint32(104).bool(message.shortEnabledFlag);
    }
    if (message.name !== "") {
      writer.uint32(122).string(message.name);
    }
    if (message.exchange !== "") {
      writer.uint32(130).string(message.exchange);
    }
    if (message.fixedCommission !== undefined) {
      Quotation.encode(message.fixedCommission, writer.uint32(138).fork()).ldelim();
    }
    if (message.focusType !== "") {
      writer.uint32(146).string(message.focusType);
    }
    if (message.releasedDate !== undefined) {
      Timestamp.encode(toTimestamp(message.releasedDate), writer.uint32(154).fork()).ldelim();
    }
    if (message.numShares !== undefined) {
      Quotation.encode(message.numShares, writer.uint32(162).fork()).ldelim();
    }
    if (message.countryOfRisk !== "") {
      writer.uint32(170).string(message.countryOfRisk);
    }
    if (message.countryOfRiskName !== "") {
      writer.uint32(178).string(message.countryOfRiskName);
    }
    if (message.sector !== "") {
      writer.uint32(186).string(message.sector);
    }
    if (message.rebalancingFreq !== "") {
      writer.uint32(194).string(message.rebalancingFreq);
    }
    if (message.tradingStatus !== 0) {
      writer.uint32(200).int32(message.tradingStatus);
    }
    if (message.otcFlag === true) {
      writer.uint32(208).bool(message.otcFlag);
    }
    if (message.buyAvailableFlag === true) {
      writer.uint32(216).bool(message.buyAvailableFlag);
    }
    if (message.sellAvailableFlag === true) {
      writer.uint32(224).bool(message.sellAvailableFlag);
    }
    if (message.minPriceIncrement !== undefined) {
      Quotation.encode(message.minPriceIncrement, writer.uint32(234).fork()).ldelim();
    }
    if (message.apiTradeAvailableFlag === true) {
      writer.uint32(240).bool(message.apiTradeAvailableFlag);
    }
    if (message.uid !== "") {
      writer.uint32(250).string(message.uid);
    }
    if (message.realExchange !== 0) {
      writer.uint32(256).int32(message.realExchange);
    }
    if (message.positionUid !== "") {
      writer.uint32(266).string(message.positionUid);
    }
    if (message.forIisFlag === true) {
      writer.uint32(328).bool(message.forIisFlag);
    }
    if (message.forQualInvestorFlag === true) {
      writer.uint32(336).bool(message.forQualInvestorFlag);
    }
    if (message.weekendFlag === true) {
      writer.uint32(344).bool(message.weekendFlag);
    }
    if (message.blockedTcaFlag === true) {
      writer.uint32(352).bool(message.blockedTcaFlag);
    }
    if (message.liquidityFlag === true) {
      writer.uint32(360).bool(message.liquidityFlag);
    }
    if (message.first1minCandleDate !== undefined) {
      Timestamp.encode(toTimestamp(message.first1minCandleDate), writer.uint32(450).fork()).ldelim();
    }
    if (message.first1dayCandleDate !== undefined) {
      Timestamp.encode(toTimestamp(message.first1dayCandleDate), writer.uint32(458).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Etf {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEtf();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.figi = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.ticker = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.classCode = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.isin = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.lot = reader.int32();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.currency = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.klong = Quotation.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.kshort = Quotation.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.dlong = Quotation.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.dshort = Quotation.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.dlongMin = Quotation.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.dshortMin = Quotation.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.shortEnabledFlag = reader.bool();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.name = reader.string();
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.exchange = reader.string();
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.fixedCommission = Quotation.decode(reader, reader.uint32());
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.focusType = reader.string();
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.releasedDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.numShares = Quotation.decode(reader, reader.uint32());
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.countryOfRisk = reader.string();
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.countryOfRiskName = reader.string();
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.sector = reader.string();
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.rebalancingFreq = reader.string();
          continue;
        case 25:
          if (tag !== 200) {
            break;
          }

          message.tradingStatus = reader.int32() as any;
          continue;
        case 26:
          if (tag !== 208) {
            break;
          }

          message.otcFlag = reader.bool();
          continue;
        case 27:
          if (tag !== 216) {
            break;
          }

          message.buyAvailableFlag = reader.bool();
          continue;
        case 28:
          if (tag !== 224) {
            break;
          }

          message.sellAvailableFlag = reader.bool();
          continue;
        case 29:
          if (tag !== 234) {
            break;
          }

          message.minPriceIncrement = Quotation.decode(reader, reader.uint32());
          continue;
        case 30:
          if (tag !== 240) {
            break;
          }

          message.apiTradeAvailableFlag = reader.bool();
          continue;
        case 31:
          if (tag !== 250) {
            break;
          }

          message.uid = reader.string();
          continue;
        case 32:
          if (tag !== 256) {
            break;
          }

          message.realExchange = reader.int32() as any;
          continue;
        case 33:
          if (tag !== 266) {
            break;
          }

          message.positionUid = reader.string();
          continue;
        case 41:
          if (tag !== 328) {
            break;
          }

          message.forIisFlag = reader.bool();
          continue;
        case 42:
          if (tag !== 336) {
            break;
          }

          message.forQualInvestorFlag = reader.bool();
          continue;
        case 43:
          if (tag !== 344) {
            break;
          }

          message.weekendFlag = reader.bool();
          continue;
        case 44:
          if (tag !== 352) {
            break;
          }

          message.blockedTcaFlag = reader.bool();
          continue;
        case 45:
          if (tag !== 360) {
            break;
          }

          message.liquidityFlag = reader.bool();
          continue;
        case 56:
          if (tag !== 450) {
            break;
          }

          message.first1minCandleDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 57:
          if (tag !== 458) {
            break;
          }

          message.first1dayCandleDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Etf {
    return {
      figi: isSet(object.figi) ? globalThis.String(object.figi) : "",
      ticker: isSet(object.ticker) ? globalThis.String(object.ticker) : "",
      classCode: isSet(object.classCode) ? globalThis.String(object.classCode) : "",
      isin: isSet(object.isin) ? globalThis.String(object.isin) : "",
      lot: isSet(object.lot) ? globalThis.Number(object.lot) : 0,
      currency: isSet(object.currency) ? globalThis.String(object.currency) : "",
      klong: isSet(object.klong) ? Quotation.fromJSON(object.klong) : undefined,
      kshort: isSet(object.kshort) ? Quotation.fromJSON(object.kshort) : undefined,
      dlong: isSet(object.dlong) ? Quotation.fromJSON(object.dlong) : undefined,
      dshort: isSet(object.dshort) ? Quotation.fromJSON(object.dshort) : undefined,
      dlongMin: isSet(object.dlongMin) ? Quotation.fromJSON(object.dlongMin) : undefined,
      dshortMin: isSet(object.dshortMin) ? Quotation.fromJSON(object.dshortMin) : undefined,
      shortEnabledFlag: isSet(object.shortEnabledFlag) ? globalThis.Boolean(object.shortEnabledFlag) : false,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      exchange: isSet(object.exchange) ? globalThis.String(object.exchange) : "",
      fixedCommission: isSet(object.fixedCommission) ? Quotation.fromJSON(object.fixedCommission) : undefined,
      focusType: isSet(object.focusType) ? globalThis.String(object.focusType) : "",
      releasedDate: isSet(object.releasedDate) ? fromJsonTimestamp(object.releasedDate) : undefined,
      numShares: isSet(object.numShares) ? Quotation.fromJSON(object.numShares) : undefined,
      countryOfRisk: isSet(object.countryOfRisk) ? globalThis.String(object.countryOfRisk) : "",
      countryOfRiskName: isSet(object.countryOfRiskName) ? globalThis.String(object.countryOfRiskName) : "",
      sector: isSet(object.sector) ? globalThis.String(object.sector) : "",
      rebalancingFreq: isSet(object.rebalancingFreq) ? globalThis.String(object.rebalancingFreq) : "",
      tradingStatus: isSet(object.tradingStatus) ? securityTradingStatusFromJSON(object.tradingStatus) : 0,
      otcFlag: isSet(object.otcFlag) ? globalThis.Boolean(object.otcFlag) : false,
      buyAvailableFlag: isSet(object.buyAvailableFlag) ? globalThis.Boolean(object.buyAvailableFlag) : false,
      sellAvailableFlag: isSet(object.sellAvailableFlag) ? globalThis.Boolean(object.sellAvailableFlag) : false,
      minPriceIncrement: isSet(object.minPriceIncrement) ? Quotation.fromJSON(object.minPriceIncrement) : undefined,
      apiTradeAvailableFlag: isSet(object.apiTradeAvailableFlag)
        ? globalThis.Boolean(object.apiTradeAvailableFlag)
        : false,
      uid: isSet(object.uid) ? globalThis.String(object.uid) : "",
      realExchange: isSet(object.realExchange) ? realExchangeFromJSON(object.realExchange) : 0,
      positionUid: isSet(object.positionUid) ? globalThis.String(object.positionUid) : "",
      forIisFlag: isSet(object.forIisFlag) ? globalThis.Boolean(object.forIisFlag) : false,
      forQualInvestorFlag: isSet(object.forQualInvestorFlag) ? globalThis.Boolean(object.forQualInvestorFlag) : false,
      weekendFlag: isSet(object.weekendFlag) ? globalThis.Boolean(object.weekendFlag) : false,
      blockedTcaFlag: isSet(object.blockedTcaFlag) ? globalThis.Boolean(object.blockedTcaFlag) : false,
      liquidityFlag: isSet(object.liquidityFlag) ? globalThis.Boolean(object.liquidityFlag) : false,
      first1minCandleDate: isSet(object.first1minCandleDate)
        ? fromJsonTimestamp(object.first1minCandleDate)
        : undefined,
      first1dayCandleDate: isSet(object.first1dayCandleDate)
        ? fromJsonTimestamp(object.first1dayCandleDate)
        : undefined,
    };
  },

  toJSON(message: Etf): unknown {
    const obj: any = {};
    if (message.figi !== "") {
      obj.figi = message.figi;
    }
    if (message.ticker !== "") {
      obj.ticker = message.ticker;
    }
    if (message.classCode !== "") {
      obj.classCode = message.classCode;
    }
    if (message.isin !== "") {
      obj.isin = message.isin;
    }
    if (message.lot !== 0) {
      obj.lot = Math.round(message.lot);
    }
    if (message.currency !== "") {
      obj.currency = message.currency;
    }
    if (message.klong !== undefined) {
      obj.klong = Quotation.toJSON(message.klong);
    }
    if (message.kshort !== undefined) {
      obj.kshort = Quotation.toJSON(message.kshort);
    }
    if (message.dlong !== undefined) {
      obj.dlong = Quotation.toJSON(message.dlong);
    }
    if (message.dshort !== undefined) {
      obj.dshort = Quotation.toJSON(message.dshort);
    }
    if (message.dlongMin !== undefined) {
      obj.dlongMin = Quotation.toJSON(message.dlongMin);
    }
    if (message.dshortMin !== undefined) {
      obj.dshortMin = Quotation.toJSON(message.dshortMin);
    }
    if (message.shortEnabledFlag === true) {
      obj.shortEnabledFlag = message.shortEnabledFlag;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.exchange !== "") {
      obj.exchange = message.exchange;
    }
    if (message.fixedCommission !== undefined) {
      obj.fixedCommission = Quotation.toJSON(message.fixedCommission);
    }
    if (message.focusType !== "") {
      obj.focusType = message.focusType;
    }
    if (message.releasedDate !== undefined) {
      obj.releasedDate = message.releasedDate.toISOString();
    }
    if (message.numShares !== undefined) {
      obj.numShares = Quotation.toJSON(message.numShares);
    }
    if (message.countryOfRisk !== "") {
      obj.countryOfRisk = message.countryOfRisk;
    }
    if (message.countryOfRiskName !== "") {
      obj.countryOfRiskName = message.countryOfRiskName;
    }
    if (message.sector !== "") {
      obj.sector = message.sector;
    }
    if (message.rebalancingFreq !== "") {
      obj.rebalancingFreq = message.rebalancingFreq;
    }
    if (message.tradingStatus !== 0) {
      obj.tradingStatus = securityTradingStatusToJSON(message.tradingStatus);
    }
    if (message.otcFlag === true) {
      obj.otcFlag = message.otcFlag;
    }
    if (message.buyAvailableFlag === true) {
      obj.buyAvailableFlag = message.buyAvailableFlag;
    }
    if (message.sellAvailableFlag === true) {
      obj.sellAvailableFlag = message.sellAvailableFlag;
    }
    if (message.minPriceIncrement !== undefined) {
      obj.minPriceIncrement = Quotation.toJSON(message.minPriceIncrement);
    }
    if (message.apiTradeAvailableFlag === true) {
      obj.apiTradeAvailableFlag = message.apiTradeAvailableFlag;
    }
    if (message.uid !== "") {
      obj.uid = message.uid;
    }
    if (message.realExchange !== 0) {
      obj.realExchange = realExchangeToJSON(message.realExchange);
    }
    if (message.positionUid !== "") {
      obj.positionUid = message.positionUid;
    }
    if (message.forIisFlag === true) {
      obj.forIisFlag = message.forIisFlag;
    }
    if (message.forQualInvestorFlag === true) {
      obj.forQualInvestorFlag = message.forQualInvestorFlag;
    }
    if (message.weekendFlag === true) {
      obj.weekendFlag = message.weekendFlag;
    }
    if (message.blockedTcaFlag === true) {
      obj.blockedTcaFlag = message.blockedTcaFlag;
    }
    if (message.liquidityFlag === true) {
      obj.liquidityFlag = message.liquidityFlag;
    }
    if (message.first1minCandleDate !== undefined) {
      obj.first1minCandleDate = message.first1minCandleDate.toISOString();
    }
    if (message.first1dayCandleDate !== undefined) {
      obj.first1dayCandleDate = message.first1dayCandleDate.toISOString();
    }
    return obj;
  },
};

function createBaseFuture(): Future {
  return {
    figi: "",
    ticker: "",
    classCode: "",
    lot: 0,
    currency: "",
    klong: undefined,
    kshort: undefined,
    dlong: undefined,
    dshort: undefined,
    dlongMin: undefined,
    dshortMin: undefined,
    shortEnabledFlag: false,
    name: "",
    exchange: "",
    firstTradeDate: undefined,
    lastTradeDate: undefined,
    futuresType: "",
    assetType: "",
    basicAsset: "",
    basicAssetSize: undefined,
    countryOfRisk: "",
    countryOfRiskName: "",
    sector: "",
    expirationDate: undefined,
    tradingStatus: 0,
    otcFlag: false,
    buyAvailableFlag: false,
    sellAvailableFlag: false,
    minPriceIncrement: undefined,
    apiTradeAvailableFlag: false,
    uid: "",
    realExchange: 0,
    positionUid: "",
    basicAssetPositionUid: "",
    forIisFlag: false,
    forQualInvestorFlag: false,
    weekendFlag: false,
    blockedTcaFlag: false,
    first1minCandleDate: undefined,
    first1dayCandleDate: undefined,
  };
}

export const Future = {
  encode(message: Future, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.ticker !== "") {
      writer.uint32(18).string(message.ticker);
    }
    if (message.classCode !== "") {
      writer.uint32(26).string(message.classCode);
    }
    if (message.lot !== 0) {
      writer.uint32(32).int32(message.lot);
    }
    if (message.currency !== "") {
      writer.uint32(42).string(message.currency);
    }
    if (message.klong !== undefined) {
      Quotation.encode(message.klong, writer.uint32(50).fork()).ldelim();
    }
    if (message.kshort !== undefined) {
      Quotation.encode(message.kshort, writer.uint32(58).fork()).ldelim();
    }
    if (message.dlong !== undefined) {
      Quotation.encode(message.dlong, writer.uint32(66).fork()).ldelim();
    }
    if (message.dshort !== undefined) {
      Quotation.encode(message.dshort, writer.uint32(74).fork()).ldelim();
    }
    if (message.dlongMin !== undefined) {
      Quotation.encode(message.dlongMin, writer.uint32(82).fork()).ldelim();
    }
    if (message.dshortMin !== undefined) {
      Quotation.encode(message.dshortMin, writer.uint32(90).fork()).ldelim();
    }
    if (message.shortEnabledFlag === true) {
      writer.uint32(96).bool(message.shortEnabledFlag);
    }
    if (message.name !== "") {
      writer.uint32(106).string(message.name);
    }
    if (message.exchange !== "") {
      writer.uint32(114).string(message.exchange);
    }
    if (message.firstTradeDate !== undefined) {
      Timestamp.encode(toTimestamp(message.firstTradeDate), writer.uint32(122).fork()).ldelim();
    }
    if (message.lastTradeDate !== undefined) {
      Timestamp.encode(toTimestamp(message.lastTradeDate), writer.uint32(130).fork()).ldelim();
    }
    if (message.futuresType !== "") {
      writer.uint32(138).string(message.futuresType);
    }
    if (message.assetType !== "") {
      writer.uint32(146).string(message.assetType);
    }
    if (message.basicAsset !== "") {
      writer.uint32(154).string(message.basicAsset);
    }
    if (message.basicAssetSize !== undefined) {
      Quotation.encode(message.basicAssetSize, writer.uint32(162).fork()).ldelim();
    }
    if (message.countryOfRisk !== "") {
      writer.uint32(170).string(message.countryOfRisk);
    }
    if (message.countryOfRiskName !== "") {
      writer.uint32(178).string(message.countryOfRiskName);
    }
    if (message.sector !== "") {
      writer.uint32(186).string(message.sector);
    }
    if (message.expirationDate !== undefined) {
      Timestamp.encode(toTimestamp(message.expirationDate), writer.uint32(194).fork()).ldelim();
    }
    if (message.tradingStatus !== 0) {
      writer.uint32(200).int32(message.tradingStatus);
    }
    if (message.otcFlag === true) {
      writer.uint32(208).bool(message.otcFlag);
    }
    if (message.buyAvailableFlag === true) {
      writer.uint32(216).bool(message.buyAvailableFlag);
    }
    if (message.sellAvailableFlag === true) {
      writer.uint32(224).bool(message.sellAvailableFlag);
    }
    if (message.minPriceIncrement !== undefined) {
      Quotation.encode(message.minPriceIncrement, writer.uint32(234).fork()).ldelim();
    }
    if (message.apiTradeAvailableFlag === true) {
      writer.uint32(240).bool(message.apiTradeAvailableFlag);
    }
    if (message.uid !== "") {
      writer.uint32(250).string(message.uid);
    }
    if (message.realExchange !== 0) {
      writer.uint32(256).int32(message.realExchange);
    }
    if (message.positionUid !== "") {
      writer.uint32(266).string(message.positionUid);
    }
    if (message.basicAssetPositionUid !== "") {
      writer.uint32(274).string(message.basicAssetPositionUid);
    }
    if (message.forIisFlag === true) {
      writer.uint32(328).bool(message.forIisFlag);
    }
    if (message.forQualInvestorFlag === true) {
      writer.uint32(336).bool(message.forQualInvestorFlag);
    }
    if (message.weekendFlag === true) {
      writer.uint32(344).bool(message.weekendFlag);
    }
    if (message.blockedTcaFlag === true) {
      writer.uint32(352).bool(message.blockedTcaFlag);
    }
    if (message.first1minCandleDate !== undefined) {
      Timestamp.encode(toTimestamp(message.first1minCandleDate), writer.uint32(450).fork()).ldelim();
    }
    if (message.first1dayCandleDate !== undefined) {
      Timestamp.encode(toTimestamp(message.first1dayCandleDate), writer.uint32(458).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Future {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFuture();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.figi = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.ticker = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.classCode = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.lot = reader.int32();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.currency = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.klong = Quotation.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.kshort = Quotation.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.dlong = Quotation.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.dshort = Quotation.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.dlongMin = Quotation.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.dshortMin = Quotation.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.shortEnabledFlag = reader.bool();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.name = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.exchange = reader.string();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.firstTradeDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.lastTradeDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.futuresType = reader.string();
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.assetType = reader.string();
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.basicAsset = reader.string();
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.basicAssetSize = Quotation.decode(reader, reader.uint32());
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.countryOfRisk = reader.string();
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.countryOfRiskName = reader.string();
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.sector = reader.string();
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.expirationDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 25:
          if (tag !== 200) {
            break;
          }

          message.tradingStatus = reader.int32() as any;
          continue;
        case 26:
          if (tag !== 208) {
            break;
          }

          message.otcFlag = reader.bool();
          continue;
        case 27:
          if (tag !== 216) {
            break;
          }

          message.buyAvailableFlag = reader.bool();
          continue;
        case 28:
          if (tag !== 224) {
            break;
          }

          message.sellAvailableFlag = reader.bool();
          continue;
        case 29:
          if (tag !== 234) {
            break;
          }

          message.minPriceIncrement = Quotation.decode(reader, reader.uint32());
          continue;
        case 30:
          if (tag !== 240) {
            break;
          }

          message.apiTradeAvailableFlag = reader.bool();
          continue;
        case 31:
          if (tag !== 250) {
            break;
          }

          message.uid = reader.string();
          continue;
        case 32:
          if (tag !== 256) {
            break;
          }

          message.realExchange = reader.int32() as any;
          continue;
        case 33:
          if (tag !== 266) {
            break;
          }

          message.positionUid = reader.string();
          continue;
        case 34:
          if (tag !== 274) {
            break;
          }

          message.basicAssetPositionUid = reader.string();
          continue;
        case 41:
          if (tag !== 328) {
            break;
          }

          message.forIisFlag = reader.bool();
          continue;
        case 42:
          if (tag !== 336) {
            break;
          }

          message.forQualInvestorFlag = reader.bool();
          continue;
        case 43:
          if (tag !== 344) {
            break;
          }

          message.weekendFlag = reader.bool();
          continue;
        case 44:
          if (tag !== 352) {
            break;
          }

          message.blockedTcaFlag = reader.bool();
          continue;
        case 56:
          if (tag !== 450) {
            break;
          }

          message.first1minCandleDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 57:
          if (tag !== 458) {
            break;
          }

          message.first1dayCandleDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Future {
    return {
      figi: isSet(object.figi) ? globalThis.String(object.figi) : "",
      ticker: isSet(object.ticker) ? globalThis.String(object.ticker) : "",
      classCode: isSet(object.classCode) ? globalThis.String(object.classCode) : "",
      lot: isSet(object.lot) ? globalThis.Number(object.lot) : 0,
      currency: isSet(object.currency) ? globalThis.String(object.currency) : "",
      klong: isSet(object.klong) ? Quotation.fromJSON(object.klong) : undefined,
      kshort: isSet(object.kshort) ? Quotation.fromJSON(object.kshort) : undefined,
      dlong: isSet(object.dlong) ? Quotation.fromJSON(object.dlong) : undefined,
      dshort: isSet(object.dshort) ? Quotation.fromJSON(object.dshort) : undefined,
      dlongMin: isSet(object.dlongMin) ? Quotation.fromJSON(object.dlongMin) : undefined,
      dshortMin: isSet(object.dshortMin) ? Quotation.fromJSON(object.dshortMin) : undefined,
      shortEnabledFlag: isSet(object.shortEnabledFlag) ? globalThis.Boolean(object.shortEnabledFlag) : false,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      exchange: isSet(object.exchange) ? globalThis.String(object.exchange) : "",
      firstTradeDate: isSet(object.firstTradeDate) ? fromJsonTimestamp(object.firstTradeDate) : undefined,
      lastTradeDate: isSet(object.lastTradeDate) ? fromJsonTimestamp(object.lastTradeDate) : undefined,
      futuresType: isSet(object.futuresType) ? globalThis.String(object.futuresType) : "",
      assetType: isSet(object.assetType) ? globalThis.String(object.assetType) : "",
      basicAsset: isSet(object.basicAsset) ? globalThis.String(object.basicAsset) : "",
      basicAssetSize: isSet(object.basicAssetSize) ? Quotation.fromJSON(object.basicAssetSize) : undefined,
      countryOfRisk: isSet(object.countryOfRisk) ? globalThis.String(object.countryOfRisk) : "",
      countryOfRiskName: isSet(object.countryOfRiskName) ? globalThis.String(object.countryOfRiskName) : "",
      sector: isSet(object.sector) ? globalThis.String(object.sector) : "",
      expirationDate: isSet(object.expirationDate) ? fromJsonTimestamp(object.expirationDate) : undefined,
      tradingStatus: isSet(object.tradingStatus) ? securityTradingStatusFromJSON(object.tradingStatus) : 0,
      otcFlag: isSet(object.otcFlag) ? globalThis.Boolean(object.otcFlag) : false,
      buyAvailableFlag: isSet(object.buyAvailableFlag) ? globalThis.Boolean(object.buyAvailableFlag) : false,
      sellAvailableFlag: isSet(object.sellAvailableFlag) ? globalThis.Boolean(object.sellAvailableFlag) : false,
      minPriceIncrement: isSet(object.minPriceIncrement) ? Quotation.fromJSON(object.minPriceIncrement) : undefined,
      apiTradeAvailableFlag: isSet(object.apiTradeAvailableFlag)
        ? globalThis.Boolean(object.apiTradeAvailableFlag)
        : false,
      uid: isSet(object.uid) ? globalThis.String(object.uid) : "",
      realExchange: isSet(object.realExchange) ? realExchangeFromJSON(object.realExchange) : 0,
      positionUid: isSet(object.positionUid) ? globalThis.String(object.positionUid) : "",
      basicAssetPositionUid: isSet(object.basicAssetPositionUid) ? globalThis.String(object.basicAssetPositionUid) : "",
      forIisFlag: isSet(object.forIisFlag) ? globalThis.Boolean(object.forIisFlag) : false,
      forQualInvestorFlag: isSet(object.forQualInvestorFlag) ? globalThis.Boolean(object.forQualInvestorFlag) : false,
      weekendFlag: isSet(object.weekendFlag) ? globalThis.Boolean(object.weekendFlag) : false,
      blockedTcaFlag: isSet(object.blockedTcaFlag) ? globalThis.Boolean(object.blockedTcaFlag) : false,
      first1minCandleDate: isSet(object.first1minCandleDate)
        ? fromJsonTimestamp(object.first1minCandleDate)
        : undefined,
      first1dayCandleDate: isSet(object.first1dayCandleDate)
        ? fromJsonTimestamp(object.first1dayCandleDate)
        : undefined,
    };
  },

  toJSON(message: Future): unknown {
    const obj: any = {};
    if (message.figi !== "") {
      obj.figi = message.figi;
    }
    if (message.ticker !== "") {
      obj.ticker = message.ticker;
    }
    if (message.classCode !== "") {
      obj.classCode = message.classCode;
    }
    if (message.lot !== 0) {
      obj.lot = Math.round(message.lot);
    }
    if (message.currency !== "") {
      obj.currency = message.currency;
    }
    if (message.klong !== undefined) {
      obj.klong = Quotation.toJSON(message.klong);
    }
    if (message.kshort !== undefined) {
      obj.kshort = Quotation.toJSON(message.kshort);
    }
    if (message.dlong !== undefined) {
      obj.dlong = Quotation.toJSON(message.dlong);
    }
    if (message.dshort !== undefined) {
      obj.dshort = Quotation.toJSON(message.dshort);
    }
    if (message.dlongMin !== undefined) {
      obj.dlongMin = Quotation.toJSON(message.dlongMin);
    }
    if (message.dshortMin !== undefined) {
      obj.dshortMin = Quotation.toJSON(message.dshortMin);
    }
    if (message.shortEnabledFlag === true) {
      obj.shortEnabledFlag = message.shortEnabledFlag;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.exchange !== "") {
      obj.exchange = message.exchange;
    }
    if (message.firstTradeDate !== undefined) {
      obj.firstTradeDate = message.firstTradeDate.toISOString();
    }
    if (message.lastTradeDate !== undefined) {
      obj.lastTradeDate = message.lastTradeDate.toISOString();
    }
    if (message.futuresType !== "") {
      obj.futuresType = message.futuresType;
    }
    if (message.assetType !== "") {
      obj.assetType = message.assetType;
    }
    if (message.basicAsset !== "") {
      obj.basicAsset = message.basicAsset;
    }
    if (message.basicAssetSize !== undefined) {
      obj.basicAssetSize = Quotation.toJSON(message.basicAssetSize);
    }
    if (message.countryOfRisk !== "") {
      obj.countryOfRisk = message.countryOfRisk;
    }
    if (message.countryOfRiskName !== "") {
      obj.countryOfRiskName = message.countryOfRiskName;
    }
    if (message.sector !== "") {
      obj.sector = message.sector;
    }
    if (message.expirationDate !== undefined) {
      obj.expirationDate = message.expirationDate.toISOString();
    }
    if (message.tradingStatus !== 0) {
      obj.tradingStatus = securityTradingStatusToJSON(message.tradingStatus);
    }
    if (message.otcFlag === true) {
      obj.otcFlag = message.otcFlag;
    }
    if (message.buyAvailableFlag === true) {
      obj.buyAvailableFlag = message.buyAvailableFlag;
    }
    if (message.sellAvailableFlag === true) {
      obj.sellAvailableFlag = message.sellAvailableFlag;
    }
    if (message.minPriceIncrement !== undefined) {
      obj.minPriceIncrement = Quotation.toJSON(message.minPriceIncrement);
    }
    if (message.apiTradeAvailableFlag === true) {
      obj.apiTradeAvailableFlag = message.apiTradeAvailableFlag;
    }
    if (message.uid !== "") {
      obj.uid = message.uid;
    }
    if (message.realExchange !== 0) {
      obj.realExchange = realExchangeToJSON(message.realExchange);
    }
    if (message.positionUid !== "") {
      obj.positionUid = message.positionUid;
    }
    if (message.basicAssetPositionUid !== "") {
      obj.basicAssetPositionUid = message.basicAssetPositionUid;
    }
    if (message.forIisFlag === true) {
      obj.forIisFlag = message.forIisFlag;
    }
    if (message.forQualInvestorFlag === true) {
      obj.forQualInvestorFlag = message.forQualInvestorFlag;
    }
    if (message.weekendFlag === true) {
      obj.weekendFlag = message.weekendFlag;
    }
    if (message.blockedTcaFlag === true) {
      obj.blockedTcaFlag = message.blockedTcaFlag;
    }
    if (message.first1minCandleDate !== undefined) {
      obj.first1minCandleDate = message.first1minCandleDate.toISOString();
    }
    if (message.first1dayCandleDate !== undefined) {
      obj.first1dayCandleDate = message.first1dayCandleDate.toISOString();
    }
    return obj;
  },
};

function createBaseShare(): Share {
  return {
    figi: "",
    ticker: "",
    classCode: "",
    isin: "",
    lot: 0,
    currency: "",
    klong: undefined,
    kshort: undefined,
    dlong: undefined,
    dshort: undefined,
    dlongMin: undefined,
    dshortMin: undefined,
    shortEnabledFlag: false,
    name: "",
    exchange: "",
    ipoDate: undefined,
    issueSize: 0,
    countryOfRisk: "",
    countryOfRiskName: "",
    sector: "",
    issueSizePlan: 0,
    nominal: undefined,
    tradingStatus: 0,
    otcFlag: false,
    buyAvailableFlag: false,
    sellAvailableFlag: false,
    divYieldFlag: false,
    shareType: 0,
    minPriceIncrement: undefined,
    apiTradeAvailableFlag: false,
    uid: "",
    realExchange: 0,
    positionUid: "",
    forIisFlag: false,
    forQualInvestorFlag: false,
    weekendFlag: false,
    blockedTcaFlag: false,
    liquidityFlag: false,
    first1minCandleDate: undefined,
    first1dayCandleDate: undefined,
  };
}

export const Share = {
  encode(message: Share, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.ticker !== "") {
      writer.uint32(18).string(message.ticker);
    }
    if (message.classCode !== "") {
      writer.uint32(26).string(message.classCode);
    }
    if (message.isin !== "") {
      writer.uint32(34).string(message.isin);
    }
    if (message.lot !== 0) {
      writer.uint32(40).int32(message.lot);
    }
    if (message.currency !== "") {
      writer.uint32(50).string(message.currency);
    }
    if (message.klong !== undefined) {
      Quotation.encode(message.klong, writer.uint32(58).fork()).ldelim();
    }
    if (message.kshort !== undefined) {
      Quotation.encode(message.kshort, writer.uint32(66).fork()).ldelim();
    }
    if (message.dlong !== undefined) {
      Quotation.encode(message.dlong, writer.uint32(74).fork()).ldelim();
    }
    if (message.dshort !== undefined) {
      Quotation.encode(message.dshort, writer.uint32(82).fork()).ldelim();
    }
    if (message.dlongMin !== undefined) {
      Quotation.encode(message.dlongMin, writer.uint32(90).fork()).ldelim();
    }
    if (message.dshortMin !== undefined) {
      Quotation.encode(message.dshortMin, writer.uint32(98).fork()).ldelim();
    }
    if (message.shortEnabledFlag === true) {
      writer.uint32(104).bool(message.shortEnabledFlag);
    }
    if (message.name !== "") {
      writer.uint32(122).string(message.name);
    }
    if (message.exchange !== "") {
      writer.uint32(130).string(message.exchange);
    }
    if (message.ipoDate !== undefined) {
      Timestamp.encode(toTimestamp(message.ipoDate), writer.uint32(138).fork()).ldelim();
    }
    if (message.issueSize !== 0) {
      writer.uint32(144).int64(message.issueSize);
    }
    if (message.countryOfRisk !== "") {
      writer.uint32(154).string(message.countryOfRisk);
    }
    if (message.countryOfRiskName !== "") {
      writer.uint32(162).string(message.countryOfRiskName);
    }
    if (message.sector !== "") {
      writer.uint32(170).string(message.sector);
    }
    if (message.issueSizePlan !== 0) {
      writer.uint32(176).int64(message.issueSizePlan);
    }
    if (message.nominal !== undefined) {
      MoneyValue.encode(message.nominal, writer.uint32(186).fork()).ldelim();
    }
    if (message.tradingStatus !== 0) {
      writer.uint32(200).int32(message.tradingStatus);
    }
    if (message.otcFlag === true) {
      writer.uint32(208).bool(message.otcFlag);
    }
    if (message.buyAvailableFlag === true) {
      writer.uint32(216).bool(message.buyAvailableFlag);
    }
    if (message.sellAvailableFlag === true) {
      writer.uint32(224).bool(message.sellAvailableFlag);
    }
    if (message.divYieldFlag === true) {
      writer.uint32(232).bool(message.divYieldFlag);
    }
    if (message.shareType !== 0) {
      writer.uint32(240).int32(message.shareType);
    }
    if (message.minPriceIncrement !== undefined) {
      Quotation.encode(message.minPriceIncrement, writer.uint32(250).fork()).ldelim();
    }
    if (message.apiTradeAvailableFlag === true) {
      writer.uint32(256).bool(message.apiTradeAvailableFlag);
    }
    if (message.uid !== "") {
      writer.uint32(266).string(message.uid);
    }
    if (message.realExchange !== 0) {
      writer.uint32(272).int32(message.realExchange);
    }
    if (message.positionUid !== "") {
      writer.uint32(282).string(message.positionUid);
    }
    if (message.forIisFlag === true) {
      writer.uint32(368).bool(message.forIisFlag);
    }
    if (message.forQualInvestorFlag === true) {
      writer.uint32(376).bool(message.forQualInvestorFlag);
    }
    if (message.weekendFlag === true) {
      writer.uint32(384).bool(message.weekendFlag);
    }
    if (message.blockedTcaFlag === true) {
      writer.uint32(392).bool(message.blockedTcaFlag);
    }
    if (message.liquidityFlag === true) {
      writer.uint32(400).bool(message.liquidityFlag);
    }
    if (message.first1minCandleDate !== undefined) {
      Timestamp.encode(toTimestamp(message.first1minCandleDate), writer.uint32(450).fork()).ldelim();
    }
    if (message.first1dayCandleDate !== undefined) {
      Timestamp.encode(toTimestamp(message.first1dayCandleDate), writer.uint32(458).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Share {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShare();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.figi = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.ticker = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.classCode = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.isin = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.lot = reader.int32();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.currency = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.klong = Quotation.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.kshort = Quotation.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.dlong = Quotation.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.dshort = Quotation.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.dlongMin = Quotation.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.dshortMin = Quotation.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.shortEnabledFlag = reader.bool();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.name = reader.string();
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.exchange = reader.string();
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.ipoDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 18:
          if (tag !== 144) {
            break;
          }

          message.issueSize = longToNumber(reader.int64() as Long);
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.countryOfRisk = reader.string();
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.countryOfRiskName = reader.string();
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.sector = reader.string();
          continue;
        case 22:
          if (tag !== 176) {
            break;
          }

          message.issueSizePlan = longToNumber(reader.int64() as Long);
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.nominal = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 25:
          if (tag !== 200) {
            break;
          }

          message.tradingStatus = reader.int32() as any;
          continue;
        case 26:
          if (tag !== 208) {
            break;
          }

          message.otcFlag = reader.bool();
          continue;
        case 27:
          if (tag !== 216) {
            break;
          }

          message.buyAvailableFlag = reader.bool();
          continue;
        case 28:
          if (tag !== 224) {
            break;
          }

          message.sellAvailableFlag = reader.bool();
          continue;
        case 29:
          if (tag !== 232) {
            break;
          }

          message.divYieldFlag = reader.bool();
          continue;
        case 30:
          if (tag !== 240) {
            break;
          }

          message.shareType = reader.int32() as any;
          continue;
        case 31:
          if (tag !== 250) {
            break;
          }

          message.minPriceIncrement = Quotation.decode(reader, reader.uint32());
          continue;
        case 32:
          if (tag !== 256) {
            break;
          }

          message.apiTradeAvailableFlag = reader.bool();
          continue;
        case 33:
          if (tag !== 266) {
            break;
          }

          message.uid = reader.string();
          continue;
        case 34:
          if (tag !== 272) {
            break;
          }

          message.realExchange = reader.int32() as any;
          continue;
        case 35:
          if (tag !== 282) {
            break;
          }

          message.positionUid = reader.string();
          continue;
        case 46:
          if (tag !== 368) {
            break;
          }

          message.forIisFlag = reader.bool();
          continue;
        case 47:
          if (tag !== 376) {
            break;
          }

          message.forQualInvestorFlag = reader.bool();
          continue;
        case 48:
          if (tag !== 384) {
            break;
          }

          message.weekendFlag = reader.bool();
          continue;
        case 49:
          if (tag !== 392) {
            break;
          }

          message.blockedTcaFlag = reader.bool();
          continue;
        case 50:
          if (tag !== 400) {
            break;
          }

          message.liquidityFlag = reader.bool();
          continue;
        case 56:
          if (tag !== 450) {
            break;
          }

          message.first1minCandleDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 57:
          if (tag !== 458) {
            break;
          }

          message.first1dayCandleDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Share {
    return {
      figi: isSet(object.figi) ? globalThis.String(object.figi) : "",
      ticker: isSet(object.ticker) ? globalThis.String(object.ticker) : "",
      classCode: isSet(object.classCode) ? globalThis.String(object.classCode) : "",
      isin: isSet(object.isin) ? globalThis.String(object.isin) : "",
      lot: isSet(object.lot) ? globalThis.Number(object.lot) : 0,
      currency: isSet(object.currency) ? globalThis.String(object.currency) : "",
      klong: isSet(object.klong) ? Quotation.fromJSON(object.klong) : undefined,
      kshort: isSet(object.kshort) ? Quotation.fromJSON(object.kshort) : undefined,
      dlong: isSet(object.dlong) ? Quotation.fromJSON(object.dlong) : undefined,
      dshort: isSet(object.dshort) ? Quotation.fromJSON(object.dshort) : undefined,
      dlongMin: isSet(object.dlongMin) ? Quotation.fromJSON(object.dlongMin) : undefined,
      dshortMin: isSet(object.dshortMin) ? Quotation.fromJSON(object.dshortMin) : undefined,
      shortEnabledFlag: isSet(object.shortEnabledFlag) ? globalThis.Boolean(object.shortEnabledFlag) : false,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      exchange: isSet(object.exchange) ? globalThis.String(object.exchange) : "",
      ipoDate: isSet(object.ipoDate) ? fromJsonTimestamp(object.ipoDate) : undefined,
      issueSize: isSet(object.issueSize) ? globalThis.Number(object.issueSize) : 0,
      countryOfRisk: isSet(object.countryOfRisk) ? globalThis.String(object.countryOfRisk) : "",
      countryOfRiskName: isSet(object.countryOfRiskName) ? globalThis.String(object.countryOfRiskName) : "",
      sector: isSet(object.sector) ? globalThis.String(object.sector) : "",
      issueSizePlan: isSet(object.issueSizePlan) ? globalThis.Number(object.issueSizePlan) : 0,
      nominal: isSet(object.nominal) ? MoneyValue.fromJSON(object.nominal) : undefined,
      tradingStatus: isSet(object.tradingStatus) ? securityTradingStatusFromJSON(object.tradingStatus) : 0,
      otcFlag: isSet(object.otcFlag) ? globalThis.Boolean(object.otcFlag) : false,
      buyAvailableFlag: isSet(object.buyAvailableFlag) ? globalThis.Boolean(object.buyAvailableFlag) : false,
      sellAvailableFlag: isSet(object.sellAvailableFlag) ? globalThis.Boolean(object.sellAvailableFlag) : false,
      divYieldFlag: isSet(object.divYieldFlag) ? globalThis.Boolean(object.divYieldFlag) : false,
      shareType: isSet(object.shareType) ? shareTypeFromJSON(object.shareType) : 0,
      minPriceIncrement: isSet(object.minPriceIncrement) ? Quotation.fromJSON(object.minPriceIncrement) : undefined,
      apiTradeAvailableFlag: isSet(object.apiTradeAvailableFlag)
        ? globalThis.Boolean(object.apiTradeAvailableFlag)
        : false,
      uid: isSet(object.uid) ? globalThis.String(object.uid) : "",
      realExchange: isSet(object.realExchange) ? realExchangeFromJSON(object.realExchange) : 0,
      positionUid: isSet(object.positionUid) ? globalThis.String(object.positionUid) : "",
      forIisFlag: isSet(object.forIisFlag) ? globalThis.Boolean(object.forIisFlag) : false,
      forQualInvestorFlag: isSet(object.forQualInvestorFlag) ? globalThis.Boolean(object.forQualInvestorFlag) : false,
      weekendFlag: isSet(object.weekendFlag) ? globalThis.Boolean(object.weekendFlag) : false,
      blockedTcaFlag: isSet(object.blockedTcaFlag) ? globalThis.Boolean(object.blockedTcaFlag) : false,
      liquidityFlag: isSet(object.liquidityFlag) ? globalThis.Boolean(object.liquidityFlag) : false,
      first1minCandleDate: isSet(object.first1minCandleDate)
        ? fromJsonTimestamp(object.first1minCandleDate)
        : undefined,
      first1dayCandleDate: isSet(object.first1dayCandleDate)
        ? fromJsonTimestamp(object.first1dayCandleDate)
        : undefined,
    };
  },

  toJSON(message: Share): unknown {
    const obj: any = {};
    if (message.figi !== "") {
      obj.figi = message.figi;
    }
    if (message.ticker !== "") {
      obj.ticker = message.ticker;
    }
    if (message.classCode !== "") {
      obj.classCode = message.classCode;
    }
    if (message.isin !== "") {
      obj.isin = message.isin;
    }
    if (message.lot !== 0) {
      obj.lot = Math.round(message.lot);
    }
    if (message.currency !== "") {
      obj.currency = message.currency;
    }
    if (message.klong !== undefined) {
      obj.klong = Quotation.toJSON(message.klong);
    }
    if (message.kshort !== undefined) {
      obj.kshort = Quotation.toJSON(message.kshort);
    }
    if (message.dlong !== undefined) {
      obj.dlong = Quotation.toJSON(message.dlong);
    }
    if (message.dshort !== undefined) {
      obj.dshort = Quotation.toJSON(message.dshort);
    }
    if (message.dlongMin !== undefined) {
      obj.dlongMin = Quotation.toJSON(message.dlongMin);
    }
    if (message.dshortMin !== undefined) {
      obj.dshortMin = Quotation.toJSON(message.dshortMin);
    }
    if (message.shortEnabledFlag === true) {
      obj.shortEnabledFlag = message.shortEnabledFlag;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.exchange !== "") {
      obj.exchange = message.exchange;
    }
    if (message.ipoDate !== undefined) {
      obj.ipoDate = message.ipoDate.toISOString();
    }
    if (message.issueSize !== 0) {
      obj.issueSize = Math.round(message.issueSize);
    }
    if (message.countryOfRisk !== "") {
      obj.countryOfRisk = message.countryOfRisk;
    }
    if (message.countryOfRiskName !== "") {
      obj.countryOfRiskName = message.countryOfRiskName;
    }
    if (message.sector !== "") {
      obj.sector = message.sector;
    }
    if (message.issueSizePlan !== 0) {
      obj.issueSizePlan = Math.round(message.issueSizePlan);
    }
    if (message.nominal !== undefined) {
      obj.nominal = MoneyValue.toJSON(message.nominal);
    }
    if (message.tradingStatus !== 0) {
      obj.tradingStatus = securityTradingStatusToJSON(message.tradingStatus);
    }
    if (message.otcFlag === true) {
      obj.otcFlag = message.otcFlag;
    }
    if (message.buyAvailableFlag === true) {
      obj.buyAvailableFlag = message.buyAvailableFlag;
    }
    if (message.sellAvailableFlag === true) {
      obj.sellAvailableFlag = message.sellAvailableFlag;
    }
    if (message.divYieldFlag === true) {
      obj.divYieldFlag = message.divYieldFlag;
    }
    if (message.shareType !== 0) {
      obj.shareType = shareTypeToJSON(message.shareType);
    }
    if (message.minPriceIncrement !== undefined) {
      obj.minPriceIncrement = Quotation.toJSON(message.minPriceIncrement);
    }
    if (message.apiTradeAvailableFlag === true) {
      obj.apiTradeAvailableFlag = message.apiTradeAvailableFlag;
    }
    if (message.uid !== "") {
      obj.uid = message.uid;
    }
    if (message.realExchange !== 0) {
      obj.realExchange = realExchangeToJSON(message.realExchange);
    }
    if (message.positionUid !== "") {
      obj.positionUid = message.positionUid;
    }
    if (message.forIisFlag === true) {
      obj.forIisFlag = message.forIisFlag;
    }
    if (message.forQualInvestorFlag === true) {
      obj.forQualInvestorFlag = message.forQualInvestorFlag;
    }
    if (message.weekendFlag === true) {
      obj.weekendFlag = message.weekendFlag;
    }
    if (message.blockedTcaFlag === true) {
      obj.blockedTcaFlag = message.blockedTcaFlag;
    }
    if (message.liquidityFlag === true) {
      obj.liquidityFlag = message.liquidityFlag;
    }
    if (message.first1minCandleDate !== undefined) {
      obj.first1minCandleDate = message.first1minCandleDate.toISOString();
    }
    if (message.first1dayCandleDate !== undefined) {
      obj.first1dayCandleDate = message.first1dayCandleDate.toISOString();
    }
    return obj;
  },
};

function createBaseGetAccruedInterestsRequest(): GetAccruedInterestsRequest {
  return { figi: "", from: undefined, to: undefined };
}

export const GetAccruedInterestsRequest = {
  encode(message: GetAccruedInterestsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.from !== undefined) {
      Timestamp.encode(toTimestamp(message.from), writer.uint32(18).fork()).ldelim();
    }
    if (message.to !== undefined) {
      Timestamp.encode(toTimestamp(message.to), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAccruedInterestsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAccruedInterestsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.figi = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.from = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.to = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetAccruedInterestsRequest {
    return {
      figi: isSet(object.figi) ? globalThis.String(object.figi) : "",
      from: isSet(object.from) ? fromJsonTimestamp(object.from) : undefined,
      to: isSet(object.to) ? fromJsonTimestamp(object.to) : undefined,
    };
  },

  toJSON(message: GetAccruedInterestsRequest): unknown {
    const obj: any = {};
    if (message.figi !== "") {
      obj.figi = message.figi;
    }
    if (message.from !== undefined) {
      obj.from = message.from.toISOString();
    }
    if (message.to !== undefined) {
      obj.to = message.to.toISOString();
    }
    return obj;
  },
};

function createBaseGetAccruedInterestsResponse(): GetAccruedInterestsResponse {
  return { accruedInterests: [] };
}

export const GetAccruedInterestsResponse = {
  encode(message: GetAccruedInterestsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accruedInterests) {
      AccruedInterest.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAccruedInterestsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAccruedInterestsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accruedInterests.push(AccruedInterest.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetAccruedInterestsResponse {
    return {
      accruedInterests: globalThis.Array.isArray(object?.accruedInterests)
        ? object.accruedInterests.map((e: any) => AccruedInterest.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetAccruedInterestsResponse): unknown {
    const obj: any = {};
    if (message.accruedInterests?.length) {
      obj.accruedInterests = message.accruedInterests.map((e) => AccruedInterest.toJSON(e));
    }
    return obj;
  },
};

function createBaseAccruedInterest(): AccruedInterest {
  return { date: undefined, value: undefined, valuePercent: undefined, nominal: undefined };
}

export const AccruedInterest = {
  encode(message: AccruedInterest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.date !== undefined) {
      Timestamp.encode(toTimestamp(message.date), writer.uint32(10).fork()).ldelim();
    }
    if (message.value !== undefined) {
      Quotation.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    if (message.valuePercent !== undefined) {
      Quotation.encode(message.valuePercent, writer.uint32(26).fork()).ldelim();
    }
    if (message.nominal !== undefined) {
      Quotation.encode(message.nominal, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccruedInterest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccruedInterest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.date = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = Quotation.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.valuePercent = Quotation.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.nominal = Quotation.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AccruedInterest {
    return {
      date: isSet(object.date) ? fromJsonTimestamp(object.date) : undefined,
      value: isSet(object.value) ? Quotation.fromJSON(object.value) : undefined,
      valuePercent: isSet(object.valuePercent) ? Quotation.fromJSON(object.valuePercent) : undefined,
      nominal: isSet(object.nominal) ? Quotation.fromJSON(object.nominal) : undefined,
    };
  },

  toJSON(message: AccruedInterest): unknown {
    const obj: any = {};
    if (message.date !== undefined) {
      obj.date = message.date.toISOString();
    }
    if (message.value !== undefined) {
      obj.value = Quotation.toJSON(message.value);
    }
    if (message.valuePercent !== undefined) {
      obj.valuePercent = Quotation.toJSON(message.valuePercent);
    }
    if (message.nominal !== undefined) {
      obj.nominal = Quotation.toJSON(message.nominal);
    }
    return obj;
  },
};

function createBaseGetFuturesMarginRequest(): GetFuturesMarginRequest {
  return { figi: "" };
}

export const GetFuturesMarginRequest = {
  encode(message: GetFuturesMarginRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetFuturesMarginRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetFuturesMarginRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.figi = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetFuturesMarginRequest {
    return { figi: isSet(object.figi) ? globalThis.String(object.figi) : "" };
  },

  toJSON(message: GetFuturesMarginRequest): unknown {
    const obj: any = {};
    if (message.figi !== "") {
      obj.figi = message.figi;
    }
    return obj;
  },
};

function createBaseGetFuturesMarginResponse(): GetFuturesMarginResponse {
  return {
    initialMarginOnBuy: undefined,
    initialMarginOnSell: undefined,
    minPriceIncrement: undefined,
    minPriceIncrementAmount: undefined,
  };
}

export const GetFuturesMarginResponse = {
  encode(message: GetFuturesMarginResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.initialMarginOnBuy !== undefined) {
      MoneyValue.encode(message.initialMarginOnBuy, writer.uint32(10).fork()).ldelim();
    }
    if (message.initialMarginOnSell !== undefined) {
      MoneyValue.encode(message.initialMarginOnSell, writer.uint32(18).fork()).ldelim();
    }
    if (message.minPriceIncrement !== undefined) {
      Quotation.encode(message.minPriceIncrement, writer.uint32(26).fork()).ldelim();
    }
    if (message.minPriceIncrementAmount !== undefined) {
      Quotation.encode(message.minPriceIncrementAmount, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetFuturesMarginResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetFuturesMarginResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.initialMarginOnBuy = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.initialMarginOnSell = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.minPriceIncrement = Quotation.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.minPriceIncrementAmount = Quotation.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetFuturesMarginResponse {
    return {
      initialMarginOnBuy: isSet(object.initialMarginOnBuy) ? MoneyValue.fromJSON(object.initialMarginOnBuy) : undefined,
      initialMarginOnSell: isSet(object.initialMarginOnSell)
        ? MoneyValue.fromJSON(object.initialMarginOnSell)
        : undefined,
      minPriceIncrement: isSet(object.minPriceIncrement) ? Quotation.fromJSON(object.minPriceIncrement) : undefined,
      minPriceIncrementAmount: isSet(object.minPriceIncrementAmount)
        ? Quotation.fromJSON(object.minPriceIncrementAmount)
        : undefined,
    };
  },

  toJSON(message: GetFuturesMarginResponse): unknown {
    const obj: any = {};
    if (message.initialMarginOnBuy !== undefined) {
      obj.initialMarginOnBuy = MoneyValue.toJSON(message.initialMarginOnBuy);
    }
    if (message.initialMarginOnSell !== undefined) {
      obj.initialMarginOnSell = MoneyValue.toJSON(message.initialMarginOnSell);
    }
    if (message.minPriceIncrement !== undefined) {
      obj.minPriceIncrement = Quotation.toJSON(message.minPriceIncrement);
    }
    if (message.minPriceIncrementAmount !== undefined) {
      obj.minPriceIncrementAmount = Quotation.toJSON(message.minPriceIncrementAmount);
    }
    return obj;
  },
};

function createBaseInstrumentResponse(): InstrumentResponse {
  return { instrument: undefined };
}

export const InstrumentResponse = {
  encode(message: InstrumentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instrument !== undefined) {
      Instrument.encode(message.instrument, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InstrumentResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstrumentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instrument = Instrument.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InstrumentResponse {
    return { instrument: isSet(object.instrument) ? Instrument.fromJSON(object.instrument) : undefined };
  },

  toJSON(message: InstrumentResponse): unknown {
    const obj: any = {};
    if (message.instrument !== undefined) {
      obj.instrument = Instrument.toJSON(message.instrument);
    }
    return obj;
  },
};

function createBaseInstrument(): Instrument {
  return {
    figi: "",
    ticker: "",
    classCode: "",
    isin: "",
    lot: 0,
    currency: "",
    klong: undefined,
    kshort: undefined,
    dlong: undefined,
    dshort: undefined,
    dlongMin: undefined,
    dshortMin: undefined,
    shortEnabledFlag: false,
    name: "",
    exchange: "",
    countryOfRisk: "",
    countryOfRiskName: "",
    instrumentType: "",
    tradingStatus: 0,
    otcFlag: false,
    buyAvailableFlag: false,
    sellAvailableFlag: false,
    minPriceIncrement: undefined,
    apiTradeAvailableFlag: false,
    uid: "",
    realExchange: 0,
    positionUid: "",
    forIisFlag: false,
    forQualInvestorFlag: false,
    weekendFlag: false,
    blockedTcaFlag: false,
    instrumentKind: 0,
    first1minCandleDate: undefined,
    first1dayCandleDate: undefined,
  };
}

export const Instrument = {
  encode(message: Instrument, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.ticker !== "") {
      writer.uint32(18).string(message.ticker);
    }
    if (message.classCode !== "") {
      writer.uint32(26).string(message.classCode);
    }
    if (message.isin !== "") {
      writer.uint32(34).string(message.isin);
    }
    if (message.lot !== 0) {
      writer.uint32(40).int32(message.lot);
    }
    if (message.currency !== "") {
      writer.uint32(50).string(message.currency);
    }
    if (message.klong !== undefined) {
      Quotation.encode(message.klong, writer.uint32(58).fork()).ldelim();
    }
    if (message.kshort !== undefined) {
      Quotation.encode(message.kshort, writer.uint32(66).fork()).ldelim();
    }
    if (message.dlong !== undefined) {
      Quotation.encode(message.dlong, writer.uint32(74).fork()).ldelim();
    }
    if (message.dshort !== undefined) {
      Quotation.encode(message.dshort, writer.uint32(82).fork()).ldelim();
    }
    if (message.dlongMin !== undefined) {
      Quotation.encode(message.dlongMin, writer.uint32(90).fork()).ldelim();
    }
    if (message.dshortMin !== undefined) {
      Quotation.encode(message.dshortMin, writer.uint32(98).fork()).ldelim();
    }
    if (message.shortEnabledFlag === true) {
      writer.uint32(104).bool(message.shortEnabledFlag);
    }
    if (message.name !== "") {
      writer.uint32(114).string(message.name);
    }
    if (message.exchange !== "") {
      writer.uint32(122).string(message.exchange);
    }
    if (message.countryOfRisk !== "") {
      writer.uint32(130).string(message.countryOfRisk);
    }
    if (message.countryOfRiskName !== "") {
      writer.uint32(138).string(message.countryOfRiskName);
    }
    if (message.instrumentType !== "") {
      writer.uint32(146).string(message.instrumentType);
    }
    if (message.tradingStatus !== 0) {
      writer.uint32(152).int32(message.tradingStatus);
    }
    if (message.otcFlag === true) {
      writer.uint32(160).bool(message.otcFlag);
    }
    if (message.buyAvailableFlag === true) {
      writer.uint32(168).bool(message.buyAvailableFlag);
    }
    if (message.sellAvailableFlag === true) {
      writer.uint32(176).bool(message.sellAvailableFlag);
    }
    if (message.minPriceIncrement !== undefined) {
      Quotation.encode(message.minPriceIncrement, writer.uint32(186).fork()).ldelim();
    }
    if (message.apiTradeAvailableFlag === true) {
      writer.uint32(192).bool(message.apiTradeAvailableFlag);
    }
    if (message.uid !== "") {
      writer.uint32(202).string(message.uid);
    }
    if (message.realExchange !== 0) {
      writer.uint32(208).int32(message.realExchange);
    }
    if (message.positionUid !== "") {
      writer.uint32(218).string(message.positionUid);
    }
    if (message.forIisFlag === true) {
      writer.uint32(288).bool(message.forIisFlag);
    }
    if (message.forQualInvestorFlag === true) {
      writer.uint32(296).bool(message.forQualInvestorFlag);
    }
    if (message.weekendFlag === true) {
      writer.uint32(304).bool(message.weekendFlag);
    }
    if (message.blockedTcaFlag === true) {
      writer.uint32(312).bool(message.blockedTcaFlag);
    }
    if (message.instrumentKind !== 0) {
      writer.uint32(320).int32(message.instrumentKind);
    }
    if (message.first1minCandleDate !== undefined) {
      Timestamp.encode(toTimestamp(message.first1minCandleDate), writer.uint32(450).fork()).ldelim();
    }
    if (message.first1dayCandleDate !== undefined) {
      Timestamp.encode(toTimestamp(message.first1dayCandleDate), writer.uint32(458).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Instrument {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstrument();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.figi = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.ticker = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.classCode = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.isin = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.lot = reader.int32();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.currency = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.klong = Quotation.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.kshort = Quotation.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.dlong = Quotation.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.dshort = Quotation.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.dlongMin = Quotation.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.dshortMin = Quotation.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.shortEnabledFlag = reader.bool();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.name = reader.string();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.exchange = reader.string();
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.countryOfRisk = reader.string();
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.countryOfRiskName = reader.string();
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.instrumentType = reader.string();
          continue;
        case 19:
          if (tag !== 152) {
            break;
          }

          message.tradingStatus = reader.int32() as any;
          continue;
        case 20:
          if (tag !== 160) {
            break;
          }

          message.otcFlag = reader.bool();
          continue;
        case 21:
          if (tag !== 168) {
            break;
          }

          message.buyAvailableFlag = reader.bool();
          continue;
        case 22:
          if (tag !== 176) {
            break;
          }

          message.sellAvailableFlag = reader.bool();
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.minPriceIncrement = Quotation.decode(reader, reader.uint32());
          continue;
        case 24:
          if (tag !== 192) {
            break;
          }

          message.apiTradeAvailableFlag = reader.bool();
          continue;
        case 25:
          if (tag !== 202) {
            break;
          }

          message.uid = reader.string();
          continue;
        case 26:
          if (tag !== 208) {
            break;
          }

          message.realExchange = reader.int32() as any;
          continue;
        case 27:
          if (tag !== 218) {
            break;
          }

          message.positionUid = reader.string();
          continue;
        case 36:
          if (tag !== 288) {
            break;
          }

          message.forIisFlag = reader.bool();
          continue;
        case 37:
          if (tag !== 296) {
            break;
          }

          message.forQualInvestorFlag = reader.bool();
          continue;
        case 38:
          if (tag !== 304) {
            break;
          }

          message.weekendFlag = reader.bool();
          continue;
        case 39:
          if (tag !== 312) {
            break;
          }

          message.blockedTcaFlag = reader.bool();
          continue;
        case 40:
          if (tag !== 320) {
            break;
          }

          message.instrumentKind = reader.int32() as any;
          continue;
        case 56:
          if (tag !== 450) {
            break;
          }

          message.first1minCandleDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 57:
          if (tag !== 458) {
            break;
          }

          message.first1dayCandleDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Instrument {
    return {
      figi: isSet(object.figi) ? globalThis.String(object.figi) : "",
      ticker: isSet(object.ticker) ? globalThis.String(object.ticker) : "",
      classCode: isSet(object.classCode) ? globalThis.String(object.classCode) : "",
      isin: isSet(object.isin) ? globalThis.String(object.isin) : "",
      lot: isSet(object.lot) ? globalThis.Number(object.lot) : 0,
      currency: isSet(object.currency) ? globalThis.String(object.currency) : "",
      klong: isSet(object.klong) ? Quotation.fromJSON(object.klong) : undefined,
      kshort: isSet(object.kshort) ? Quotation.fromJSON(object.kshort) : undefined,
      dlong: isSet(object.dlong) ? Quotation.fromJSON(object.dlong) : undefined,
      dshort: isSet(object.dshort) ? Quotation.fromJSON(object.dshort) : undefined,
      dlongMin: isSet(object.dlongMin) ? Quotation.fromJSON(object.dlongMin) : undefined,
      dshortMin: isSet(object.dshortMin) ? Quotation.fromJSON(object.dshortMin) : undefined,
      shortEnabledFlag: isSet(object.shortEnabledFlag) ? globalThis.Boolean(object.shortEnabledFlag) : false,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      exchange: isSet(object.exchange) ? globalThis.String(object.exchange) : "",
      countryOfRisk: isSet(object.countryOfRisk) ? globalThis.String(object.countryOfRisk) : "",
      countryOfRiskName: isSet(object.countryOfRiskName) ? globalThis.String(object.countryOfRiskName) : "",
      instrumentType: isSet(object.instrumentType) ? globalThis.String(object.instrumentType) : "",
      tradingStatus: isSet(object.tradingStatus) ? securityTradingStatusFromJSON(object.tradingStatus) : 0,
      otcFlag: isSet(object.otcFlag) ? globalThis.Boolean(object.otcFlag) : false,
      buyAvailableFlag: isSet(object.buyAvailableFlag) ? globalThis.Boolean(object.buyAvailableFlag) : false,
      sellAvailableFlag: isSet(object.sellAvailableFlag) ? globalThis.Boolean(object.sellAvailableFlag) : false,
      minPriceIncrement: isSet(object.minPriceIncrement) ? Quotation.fromJSON(object.minPriceIncrement) : undefined,
      apiTradeAvailableFlag: isSet(object.apiTradeAvailableFlag)
        ? globalThis.Boolean(object.apiTradeAvailableFlag)
        : false,
      uid: isSet(object.uid) ? globalThis.String(object.uid) : "",
      realExchange: isSet(object.realExchange) ? realExchangeFromJSON(object.realExchange) : 0,
      positionUid: isSet(object.positionUid) ? globalThis.String(object.positionUid) : "",
      forIisFlag: isSet(object.forIisFlag) ? globalThis.Boolean(object.forIisFlag) : false,
      forQualInvestorFlag: isSet(object.forQualInvestorFlag) ? globalThis.Boolean(object.forQualInvestorFlag) : false,
      weekendFlag: isSet(object.weekendFlag) ? globalThis.Boolean(object.weekendFlag) : false,
      blockedTcaFlag: isSet(object.blockedTcaFlag) ? globalThis.Boolean(object.blockedTcaFlag) : false,
      instrumentKind: isSet(object.instrumentKind) ? instrumentTypeFromJSON(object.instrumentKind) : 0,
      first1minCandleDate: isSet(object.first1minCandleDate)
        ? fromJsonTimestamp(object.first1minCandleDate)
        : undefined,
      first1dayCandleDate: isSet(object.first1dayCandleDate)
        ? fromJsonTimestamp(object.first1dayCandleDate)
        : undefined,
    };
  },

  toJSON(message: Instrument): unknown {
    const obj: any = {};
    if (message.figi !== "") {
      obj.figi = message.figi;
    }
    if (message.ticker !== "") {
      obj.ticker = message.ticker;
    }
    if (message.classCode !== "") {
      obj.classCode = message.classCode;
    }
    if (message.isin !== "") {
      obj.isin = message.isin;
    }
    if (message.lot !== 0) {
      obj.lot = Math.round(message.lot);
    }
    if (message.currency !== "") {
      obj.currency = message.currency;
    }
    if (message.klong !== undefined) {
      obj.klong = Quotation.toJSON(message.klong);
    }
    if (message.kshort !== undefined) {
      obj.kshort = Quotation.toJSON(message.kshort);
    }
    if (message.dlong !== undefined) {
      obj.dlong = Quotation.toJSON(message.dlong);
    }
    if (message.dshort !== undefined) {
      obj.dshort = Quotation.toJSON(message.dshort);
    }
    if (message.dlongMin !== undefined) {
      obj.dlongMin = Quotation.toJSON(message.dlongMin);
    }
    if (message.dshortMin !== undefined) {
      obj.dshortMin = Quotation.toJSON(message.dshortMin);
    }
    if (message.shortEnabledFlag === true) {
      obj.shortEnabledFlag = message.shortEnabledFlag;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.exchange !== "") {
      obj.exchange = message.exchange;
    }
    if (message.countryOfRisk !== "") {
      obj.countryOfRisk = message.countryOfRisk;
    }
    if (message.countryOfRiskName !== "") {
      obj.countryOfRiskName = message.countryOfRiskName;
    }
    if (message.instrumentType !== "") {
      obj.instrumentType = message.instrumentType;
    }
    if (message.tradingStatus !== 0) {
      obj.tradingStatus = securityTradingStatusToJSON(message.tradingStatus);
    }
    if (message.otcFlag === true) {
      obj.otcFlag = message.otcFlag;
    }
    if (message.buyAvailableFlag === true) {
      obj.buyAvailableFlag = message.buyAvailableFlag;
    }
    if (message.sellAvailableFlag === true) {
      obj.sellAvailableFlag = message.sellAvailableFlag;
    }
    if (message.minPriceIncrement !== undefined) {
      obj.minPriceIncrement = Quotation.toJSON(message.minPriceIncrement);
    }
    if (message.apiTradeAvailableFlag === true) {
      obj.apiTradeAvailableFlag = message.apiTradeAvailableFlag;
    }
    if (message.uid !== "") {
      obj.uid = message.uid;
    }
    if (message.realExchange !== 0) {
      obj.realExchange = realExchangeToJSON(message.realExchange);
    }
    if (message.positionUid !== "") {
      obj.positionUid = message.positionUid;
    }
    if (message.forIisFlag === true) {
      obj.forIisFlag = message.forIisFlag;
    }
    if (message.forQualInvestorFlag === true) {
      obj.forQualInvestorFlag = message.forQualInvestorFlag;
    }
    if (message.weekendFlag === true) {
      obj.weekendFlag = message.weekendFlag;
    }
    if (message.blockedTcaFlag === true) {
      obj.blockedTcaFlag = message.blockedTcaFlag;
    }
    if (message.instrumentKind !== 0) {
      obj.instrumentKind = instrumentTypeToJSON(message.instrumentKind);
    }
    if (message.first1minCandleDate !== undefined) {
      obj.first1minCandleDate = message.first1minCandleDate.toISOString();
    }
    if (message.first1dayCandleDate !== undefined) {
      obj.first1dayCandleDate = message.first1dayCandleDate.toISOString();
    }
    return obj;
  },
};

function createBaseGetDividendsRequest(): GetDividendsRequest {
  return { figi: "", from: undefined, to: undefined };
}

export const GetDividendsRequest = {
  encode(message: GetDividendsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.from !== undefined) {
      Timestamp.encode(toTimestamp(message.from), writer.uint32(18).fork()).ldelim();
    }
    if (message.to !== undefined) {
      Timestamp.encode(toTimestamp(message.to), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetDividendsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetDividendsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.figi = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.from = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.to = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetDividendsRequest {
    return {
      figi: isSet(object.figi) ? globalThis.String(object.figi) : "",
      from: isSet(object.from) ? fromJsonTimestamp(object.from) : undefined,
      to: isSet(object.to) ? fromJsonTimestamp(object.to) : undefined,
    };
  },

  toJSON(message: GetDividendsRequest): unknown {
    const obj: any = {};
    if (message.figi !== "") {
      obj.figi = message.figi;
    }
    if (message.from !== undefined) {
      obj.from = message.from.toISOString();
    }
    if (message.to !== undefined) {
      obj.to = message.to.toISOString();
    }
    return obj;
  },
};

function createBaseGetDividendsResponse(): GetDividendsResponse {
  return { dividends: [] };
}

export const GetDividendsResponse = {
  encode(message: GetDividendsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.dividends) {
      Dividend.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetDividendsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetDividendsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.dividends.push(Dividend.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetDividendsResponse {
    return {
      dividends: globalThis.Array.isArray(object?.dividends)
        ? object.dividends.map((e: any) => Dividend.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetDividendsResponse): unknown {
    const obj: any = {};
    if (message.dividends?.length) {
      obj.dividends = message.dividends.map((e) => Dividend.toJSON(e));
    }
    return obj;
  },
};

function createBaseDividend(): Dividend {
  return {
    dividendNet: undefined,
    paymentDate: undefined,
    declaredDate: undefined,
    lastBuyDate: undefined,
    dividendType: "",
    recordDate: undefined,
    regularity: "",
    closePrice: undefined,
    yieldValue: undefined,
    createdAt: undefined,
  };
}

export const Dividend = {
  encode(message: Dividend, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dividendNet !== undefined) {
      MoneyValue.encode(message.dividendNet, writer.uint32(10).fork()).ldelim();
    }
    if (message.paymentDate !== undefined) {
      Timestamp.encode(toTimestamp(message.paymentDate), writer.uint32(18).fork()).ldelim();
    }
    if (message.declaredDate !== undefined) {
      Timestamp.encode(toTimestamp(message.declaredDate), writer.uint32(26).fork()).ldelim();
    }
    if (message.lastBuyDate !== undefined) {
      Timestamp.encode(toTimestamp(message.lastBuyDate), writer.uint32(34).fork()).ldelim();
    }
    if (message.dividendType !== "") {
      writer.uint32(42).string(message.dividendType);
    }
    if (message.recordDate !== undefined) {
      Timestamp.encode(toTimestamp(message.recordDate), writer.uint32(50).fork()).ldelim();
    }
    if (message.regularity !== "") {
      writer.uint32(58).string(message.regularity);
    }
    if (message.closePrice !== undefined) {
      MoneyValue.encode(message.closePrice, writer.uint32(66).fork()).ldelim();
    }
    if (message.yieldValue !== undefined) {
      Quotation.encode(message.yieldValue, writer.uint32(74).fork()).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Dividend {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDividend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.dividendNet = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.paymentDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.declaredDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.lastBuyDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.dividendType = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.recordDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.regularity = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.closePrice = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.yieldValue = Quotation.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Dividend {
    return {
      dividendNet: isSet(object.dividendNet) ? MoneyValue.fromJSON(object.dividendNet) : undefined,
      paymentDate: isSet(object.paymentDate) ? fromJsonTimestamp(object.paymentDate) : undefined,
      declaredDate: isSet(object.declaredDate) ? fromJsonTimestamp(object.declaredDate) : undefined,
      lastBuyDate: isSet(object.lastBuyDate) ? fromJsonTimestamp(object.lastBuyDate) : undefined,
      dividendType: isSet(object.dividendType) ? globalThis.String(object.dividendType) : "",
      recordDate: isSet(object.recordDate) ? fromJsonTimestamp(object.recordDate) : undefined,
      regularity: isSet(object.regularity) ? globalThis.String(object.regularity) : "",
      closePrice: isSet(object.closePrice) ? MoneyValue.fromJSON(object.closePrice) : undefined,
      yieldValue: isSet(object.yieldValue) ? Quotation.fromJSON(object.yieldValue) : undefined,
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
    };
  },

  toJSON(message: Dividend): unknown {
    const obj: any = {};
    if (message.dividendNet !== undefined) {
      obj.dividendNet = MoneyValue.toJSON(message.dividendNet);
    }
    if (message.paymentDate !== undefined) {
      obj.paymentDate = message.paymentDate.toISOString();
    }
    if (message.declaredDate !== undefined) {
      obj.declaredDate = message.declaredDate.toISOString();
    }
    if (message.lastBuyDate !== undefined) {
      obj.lastBuyDate = message.lastBuyDate.toISOString();
    }
    if (message.dividendType !== "") {
      obj.dividendType = message.dividendType;
    }
    if (message.recordDate !== undefined) {
      obj.recordDate = message.recordDate.toISOString();
    }
    if (message.regularity !== "") {
      obj.regularity = message.regularity;
    }
    if (message.closePrice !== undefined) {
      obj.closePrice = MoneyValue.toJSON(message.closePrice);
    }
    if (message.yieldValue !== undefined) {
      obj.yieldValue = Quotation.toJSON(message.yieldValue);
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    return obj;
  },
};

function createBaseAssetRequest(): AssetRequest {
  return { id: "" };
}

export const AssetRequest = {
  encode(message: AssetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AssetRequest {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: AssetRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },
};

function createBaseAssetResponse(): AssetResponse {
  return { asset: undefined };
}

export const AssetResponse = {
  encode(message: AssetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.asset !== undefined) {
      AssetFull.encode(message.asset, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.asset = AssetFull.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AssetResponse {
    return { asset: isSet(object.asset) ? AssetFull.fromJSON(object.asset) : undefined };
  },

  toJSON(message: AssetResponse): unknown {
    const obj: any = {};
    if (message.asset !== undefined) {
      obj.asset = AssetFull.toJSON(message.asset);
    }
    return obj;
  },
};

function createBaseAssetsRequest(): AssetsRequest {
  return { instrumentType: 0 };
}

export const AssetsRequest = {
  encode(message: AssetsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instrumentType !== 0) {
      writer.uint32(8).int32(message.instrumentType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.instrumentType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AssetsRequest {
    return { instrumentType: isSet(object.instrumentType) ? instrumentTypeFromJSON(object.instrumentType) : 0 };
  },

  toJSON(message: AssetsRequest): unknown {
    const obj: any = {};
    if (message.instrumentType !== 0) {
      obj.instrumentType = instrumentTypeToJSON(message.instrumentType);
    }
    return obj;
  },
};

function createBaseAssetsResponse(): AssetsResponse {
  return { assets: [] };
}

export const AssetsResponse = {
  encode(message: AssetsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.assets) {
      Asset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.assets.push(Asset.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AssetsResponse {
    return { assets: globalThis.Array.isArray(object?.assets) ? object.assets.map((e: any) => Asset.fromJSON(e)) : [] };
  },

  toJSON(message: AssetsResponse): unknown {
    const obj: any = {};
    if (message.assets?.length) {
      obj.assets = message.assets.map((e) => Asset.toJSON(e));
    }
    return obj;
  },
};

function createBaseAssetFull(): AssetFull {
  return {
    uid: "",
    type: 0,
    name: "",
    nameBrief: "",
    description: "",
    deletedAt: undefined,
    requiredTests: [],
    currency: undefined,
    security: undefined,
    gosRegCode: "",
    cfi: "",
    codeNsd: "",
    status: "",
    brand: undefined,
    updatedAt: undefined,
    brCode: "",
    brCodeName: "",
    instruments: [],
  };
}

export const AssetFull = {
  encode(message: AssetFull, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uid !== "") {
      writer.uint32(10).string(message.uid);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.nameBrief !== "") {
      writer.uint32(34).string(message.nameBrief);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.deletedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.deletedAt), writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.requiredTests) {
      writer.uint32(58).string(v!);
    }
    if (message.currency !== undefined) {
      AssetCurrency.encode(message.currency, writer.uint32(66).fork()).ldelim();
    }
    if (message.security !== undefined) {
      AssetSecurity.encode(message.security, writer.uint32(74).fork()).ldelim();
    }
    if (message.gosRegCode !== "") {
      writer.uint32(82).string(message.gosRegCode);
    }
    if (message.cfi !== "") {
      writer.uint32(90).string(message.cfi);
    }
    if (message.codeNsd !== "") {
      writer.uint32(98).string(message.codeNsd);
    }
    if (message.status !== "") {
      writer.uint32(106).string(message.status);
    }
    if (message.brand !== undefined) {
      Brand.encode(message.brand, writer.uint32(114).fork()).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(122).fork()).ldelim();
    }
    if (message.brCode !== "") {
      writer.uint32(130).string(message.brCode);
    }
    if (message.brCodeName !== "") {
      writer.uint32(138).string(message.brCodeName);
    }
    for (const v of message.instruments) {
      AssetInstrument.encode(v!, writer.uint32(146).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetFull {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetFull();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.uid = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.nameBrief = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.description = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.deletedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.requiredTests.push(reader.string());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.currency = AssetCurrency.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.security = AssetSecurity.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.gosRegCode = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.cfi = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.codeNsd = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.status = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.brand = Brand.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.brCode = reader.string();
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.brCodeName = reader.string();
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.instruments.push(AssetInstrument.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AssetFull {
    return {
      uid: isSet(object.uid) ? globalThis.String(object.uid) : "",
      type: isSet(object.type) ? assetTypeFromJSON(object.type) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      nameBrief: isSet(object.nameBrief) ? globalThis.String(object.nameBrief) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      deletedAt: isSet(object.deletedAt) ? fromJsonTimestamp(object.deletedAt) : undefined,
      requiredTests: globalThis.Array.isArray(object?.requiredTests)
        ? object.requiredTests.map((e: any) => globalThis.String(e))
        : [],
      currency: isSet(object.currency) ? AssetCurrency.fromJSON(object.currency) : undefined,
      security: isSet(object.security) ? AssetSecurity.fromJSON(object.security) : undefined,
      gosRegCode: isSet(object.gosRegCode) ? globalThis.String(object.gosRegCode) : "",
      cfi: isSet(object.cfi) ? globalThis.String(object.cfi) : "",
      codeNsd: isSet(object.codeNsd) ? globalThis.String(object.codeNsd) : "",
      status: isSet(object.status) ? globalThis.String(object.status) : "",
      brand: isSet(object.brand) ? Brand.fromJSON(object.brand) : undefined,
      updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
      brCode: isSet(object.brCode) ? globalThis.String(object.brCode) : "",
      brCodeName: isSet(object.brCodeName) ? globalThis.String(object.brCodeName) : "",
      instruments: globalThis.Array.isArray(object?.instruments)
        ? object.instruments.map((e: any) => AssetInstrument.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AssetFull): unknown {
    const obj: any = {};
    if (message.uid !== "") {
      obj.uid = message.uid;
    }
    if (message.type !== 0) {
      obj.type = assetTypeToJSON(message.type);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.nameBrief !== "") {
      obj.nameBrief = message.nameBrief;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.deletedAt !== undefined) {
      obj.deletedAt = message.deletedAt.toISOString();
    }
    if (message.requiredTests?.length) {
      obj.requiredTests = message.requiredTests;
    }
    if (message.currency !== undefined) {
      obj.currency = AssetCurrency.toJSON(message.currency);
    }
    if (message.security !== undefined) {
      obj.security = AssetSecurity.toJSON(message.security);
    }
    if (message.gosRegCode !== "") {
      obj.gosRegCode = message.gosRegCode;
    }
    if (message.cfi !== "") {
      obj.cfi = message.cfi;
    }
    if (message.codeNsd !== "") {
      obj.codeNsd = message.codeNsd;
    }
    if (message.status !== "") {
      obj.status = message.status;
    }
    if (message.brand !== undefined) {
      obj.brand = Brand.toJSON(message.brand);
    }
    if (message.updatedAt !== undefined) {
      obj.updatedAt = message.updatedAt.toISOString();
    }
    if (message.brCode !== "") {
      obj.brCode = message.brCode;
    }
    if (message.brCodeName !== "") {
      obj.brCodeName = message.brCodeName;
    }
    if (message.instruments?.length) {
      obj.instruments = message.instruments.map((e) => AssetInstrument.toJSON(e));
    }
    return obj;
  },
};

function createBaseAsset(): Asset {
  return { uid: "", type: 0, name: "", instruments: [] };
}

export const Asset = {
  encode(message: Asset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uid !== "") {
      writer.uint32(10).string(message.uid);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    for (const v of message.instruments) {
      AssetInstrument.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Asset {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.uid = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.instruments.push(AssetInstrument.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Asset {
    return {
      uid: isSet(object.uid) ? globalThis.String(object.uid) : "",
      type: isSet(object.type) ? assetTypeFromJSON(object.type) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      instruments: globalThis.Array.isArray(object?.instruments)
        ? object.instruments.map((e: any) => AssetInstrument.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Asset): unknown {
    const obj: any = {};
    if (message.uid !== "") {
      obj.uid = message.uid;
    }
    if (message.type !== 0) {
      obj.type = assetTypeToJSON(message.type);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.instruments?.length) {
      obj.instruments = message.instruments.map((e) => AssetInstrument.toJSON(e));
    }
    return obj;
  },
};

function createBaseAssetCurrency(): AssetCurrency {
  return { baseCurrency: "" };
}

export const AssetCurrency = {
  encode(message: AssetCurrency, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseCurrency !== "") {
      writer.uint32(10).string(message.baseCurrency);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetCurrency {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetCurrency();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.baseCurrency = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AssetCurrency {
    return { baseCurrency: isSet(object.baseCurrency) ? globalThis.String(object.baseCurrency) : "" };
  },

  toJSON(message: AssetCurrency): unknown {
    const obj: any = {};
    if (message.baseCurrency !== "") {
      obj.baseCurrency = message.baseCurrency;
    }
    return obj;
  },
};

function createBaseAssetSecurity(): AssetSecurity {
  return {
    isin: "",
    type: "",
    instrumentKind: 0,
    share: undefined,
    bond: undefined,
    sp: undefined,
    etf: undefined,
    clearingCertificate: undefined,
  };
}

export const AssetSecurity = {
  encode(message: AssetSecurity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isin !== "") {
      writer.uint32(10).string(message.isin);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    if (message.instrumentKind !== 0) {
      writer.uint32(80).int32(message.instrumentKind);
    }
    if (message.share !== undefined) {
      AssetShare.encode(message.share, writer.uint32(26).fork()).ldelim();
    }
    if (message.bond !== undefined) {
      AssetBond.encode(message.bond, writer.uint32(34).fork()).ldelim();
    }
    if (message.sp !== undefined) {
      AssetStructuredProduct.encode(message.sp, writer.uint32(42).fork()).ldelim();
    }
    if (message.etf !== undefined) {
      AssetEtf.encode(message.etf, writer.uint32(50).fork()).ldelim();
    }
    if (message.clearingCertificate !== undefined) {
      AssetClearingCertificate.encode(message.clearingCertificate, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetSecurity {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetSecurity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.isin = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.type = reader.string();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.instrumentKind = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.share = AssetShare.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.bond = AssetBond.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.sp = AssetStructuredProduct.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.etf = AssetEtf.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.clearingCertificate = AssetClearingCertificate.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AssetSecurity {
    return {
      isin: isSet(object.isin) ? globalThis.String(object.isin) : "",
      type: isSet(object.type) ? globalThis.String(object.type) : "",
      instrumentKind: isSet(object.instrumentKind) ? instrumentTypeFromJSON(object.instrumentKind) : 0,
      share: isSet(object.share) ? AssetShare.fromJSON(object.share) : undefined,
      bond: isSet(object.bond) ? AssetBond.fromJSON(object.bond) : undefined,
      sp: isSet(object.sp) ? AssetStructuredProduct.fromJSON(object.sp) : undefined,
      etf: isSet(object.etf) ? AssetEtf.fromJSON(object.etf) : undefined,
      clearingCertificate: isSet(object.clearingCertificate)
        ? AssetClearingCertificate.fromJSON(object.clearingCertificate)
        : undefined,
    };
  },

  toJSON(message: AssetSecurity): unknown {
    const obj: any = {};
    if (message.isin !== "") {
      obj.isin = message.isin;
    }
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.instrumentKind !== 0) {
      obj.instrumentKind = instrumentTypeToJSON(message.instrumentKind);
    }
    if (message.share !== undefined) {
      obj.share = AssetShare.toJSON(message.share);
    }
    if (message.bond !== undefined) {
      obj.bond = AssetBond.toJSON(message.bond);
    }
    if (message.sp !== undefined) {
      obj.sp = AssetStructuredProduct.toJSON(message.sp);
    }
    if (message.etf !== undefined) {
      obj.etf = AssetEtf.toJSON(message.etf);
    }
    if (message.clearingCertificate !== undefined) {
      obj.clearingCertificate = AssetClearingCertificate.toJSON(message.clearingCertificate);
    }
    return obj;
  },
};

function createBaseAssetShare(): AssetShare {
  return {
    type: 0,
    issueSize: undefined,
    nominal: undefined,
    nominalCurrency: "",
    primaryIndex: "",
    dividendRate: undefined,
    preferredShareType: "",
    ipoDate: undefined,
    registryDate: undefined,
    divYieldFlag: false,
    issueKind: "",
    placementDate: undefined,
    represIsin: "",
    issueSizePlan: undefined,
    totalFloat: undefined,
  };
}

export const AssetShare = {
  encode(message: AssetShare, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.issueSize !== undefined) {
      Quotation.encode(message.issueSize, writer.uint32(18).fork()).ldelim();
    }
    if (message.nominal !== undefined) {
      Quotation.encode(message.nominal, writer.uint32(26).fork()).ldelim();
    }
    if (message.nominalCurrency !== "") {
      writer.uint32(34).string(message.nominalCurrency);
    }
    if (message.primaryIndex !== "") {
      writer.uint32(42).string(message.primaryIndex);
    }
    if (message.dividendRate !== undefined) {
      Quotation.encode(message.dividendRate, writer.uint32(50).fork()).ldelim();
    }
    if (message.preferredShareType !== "") {
      writer.uint32(58).string(message.preferredShareType);
    }
    if (message.ipoDate !== undefined) {
      Timestamp.encode(toTimestamp(message.ipoDate), writer.uint32(66).fork()).ldelim();
    }
    if (message.registryDate !== undefined) {
      Timestamp.encode(toTimestamp(message.registryDate), writer.uint32(74).fork()).ldelim();
    }
    if (message.divYieldFlag === true) {
      writer.uint32(80).bool(message.divYieldFlag);
    }
    if (message.issueKind !== "") {
      writer.uint32(90).string(message.issueKind);
    }
    if (message.placementDate !== undefined) {
      Timestamp.encode(toTimestamp(message.placementDate), writer.uint32(98).fork()).ldelim();
    }
    if (message.represIsin !== "") {
      writer.uint32(106).string(message.represIsin);
    }
    if (message.issueSizePlan !== undefined) {
      Quotation.encode(message.issueSizePlan, writer.uint32(114).fork()).ldelim();
    }
    if (message.totalFloat !== undefined) {
      Quotation.encode(message.totalFloat, writer.uint32(122).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetShare {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetShare();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.issueSize = Quotation.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.nominal = Quotation.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.nominalCurrency = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.primaryIndex = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.dividendRate = Quotation.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.preferredShareType = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.ipoDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.registryDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.divYieldFlag = reader.bool();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.issueKind = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.placementDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.represIsin = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.issueSizePlan = Quotation.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.totalFloat = Quotation.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AssetShare {
    return {
      type: isSet(object.type) ? shareTypeFromJSON(object.type) : 0,
      issueSize: isSet(object.issueSize) ? Quotation.fromJSON(object.issueSize) : undefined,
      nominal: isSet(object.nominal) ? Quotation.fromJSON(object.nominal) : undefined,
      nominalCurrency: isSet(object.nominalCurrency) ? globalThis.String(object.nominalCurrency) : "",
      primaryIndex: isSet(object.primaryIndex) ? globalThis.String(object.primaryIndex) : "",
      dividendRate: isSet(object.dividendRate) ? Quotation.fromJSON(object.dividendRate) : undefined,
      preferredShareType: isSet(object.preferredShareType) ? globalThis.String(object.preferredShareType) : "",
      ipoDate: isSet(object.ipoDate) ? fromJsonTimestamp(object.ipoDate) : undefined,
      registryDate: isSet(object.registryDate) ? fromJsonTimestamp(object.registryDate) : undefined,
      divYieldFlag: isSet(object.divYieldFlag) ? globalThis.Boolean(object.divYieldFlag) : false,
      issueKind: isSet(object.issueKind) ? globalThis.String(object.issueKind) : "",
      placementDate: isSet(object.placementDate) ? fromJsonTimestamp(object.placementDate) : undefined,
      represIsin: isSet(object.represIsin) ? globalThis.String(object.represIsin) : "",
      issueSizePlan: isSet(object.issueSizePlan) ? Quotation.fromJSON(object.issueSizePlan) : undefined,
      totalFloat: isSet(object.totalFloat) ? Quotation.fromJSON(object.totalFloat) : undefined,
    };
  },

  toJSON(message: AssetShare): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = shareTypeToJSON(message.type);
    }
    if (message.issueSize !== undefined) {
      obj.issueSize = Quotation.toJSON(message.issueSize);
    }
    if (message.nominal !== undefined) {
      obj.nominal = Quotation.toJSON(message.nominal);
    }
    if (message.nominalCurrency !== "") {
      obj.nominalCurrency = message.nominalCurrency;
    }
    if (message.primaryIndex !== "") {
      obj.primaryIndex = message.primaryIndex;
    }
    if (message.dividendRate !== undefined) {
      obj.dividendRate = Quotation.toJSON(message.dividendRate);
    }
    if (message.preferredShareType !== "") {
      obj.preferredShareType = message.preferredShareType;
    }
    if (message.ipoDate !== undefined) {
      obj.ipoDate = message.ipoDate.toISOString();
    }
    if (message.registryDate !== undefined) {
      obj.registryDate = message.registryDate.toISOString();
    }
    if (message.divYieldFlag === true) {
      obj.divYieldFlag = message.divYieldFlag;
    }
    if (message.issueKind !== "") {
      obj.issueKind = message.issueKind;
    }
    if (message.placementDate !== undefined) {
      obj.placementDate = message.placementDate.toISOString();
    }
    if (message.represIsin !== "") {
      obj.represIsin = message.represIsin;
    }
    if (message.issueSizePlan !== undefined) {
      obj.issueSizePlan = Quotation.toJSON(message.issueSizePlan);
    }
    if (message.totalFloat !== undefined) {
      obj.totalFloat = Quotation.toJSON(message.totalFloat);
    }
    return obj;
  },
};

function createBaseAssetBond(): AssetBond {
  return {
    currentNominal: undefined,
    borrowName: "",
    issueSize: undefined,
    nominal: undefined,
    nominalCurrency: "",
    issueKind: "",
    interestKind: "",
    couponQuantityPerYear: 0,
    indexedNominalFlag: false,
    subordinatedFlag: false,
    collateralFlag: false,
    taxFreeFlag: false,
    amortizationFlag: false,
    floatingCouponFlag: false,
    perpetualFlag: false,
    maturityDate: undefined,
    returnCondition: "",
    stateRegDate: undefined,
    placementDate: undefined,
    placementPrice: undefined,
    issueSizePlan: undefined,
  };
}

export const AssetBond = {
  encode(message: AssetBond, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.currentNominal !== undefined) {
      Quotation.encode(message.currentNominal, writer.uint32(10).fork()).ldelim();
    }
    if (message.borrowName !== "") {
      writer.uint32(18).string(message.borrowName);
    }
    if (message.issueSize !== undefined) {
      Quotation.encode(message.issueSize, writer.uint32(26).fork()).ldelim();
    }
    if (message.nominal !== undefined) {
      Quotation.encode(message.nominal, writer.uint32(34).fork()).ldelim();
    }
    if (message.nominalCurrency !== "") {
      writer.uint32(42).string(message.nominalCurrency);
    }
    if (message.issueKind !== "") {
      writer.uint32(50).string(message.issueKind);
    }
    if (message.interestKind !== "") {
      writer.uint32(58).string(message.interestKind);
    }
    if (message.couponQuantityPerYear !== 0) {
      writer.uint32(64).int32(message.couponQuantityPerYear);
    }
    if (message.indexedNominalFlag === true) {
      writer.uint32(72).bool(message.indexedNominalFlag);
    }
    if (message.subordinatedFlag === true) {
      writer.uint32(80).bool(message.subordinatedFlag);
    }
    if (message.collateralFlag === true) {
      writer.uint32(88).bool(message.collateralFlag);
    }
    if (message.taxFreeFlag === true) {
      writer.uint32(96).bool(message.taxFreeFlag);
    }
    if (message.amortizationFlag === true) {
      writer.uint32(104).bool(message.amortizationFlag);
    }
    if (message.floatingCouponFlag === true) {
      writer.uint32(112).bool(message.floatingCouponFlag);
    }
    if (message.perpetualFlag === true) {
      writer.uint32(120).bool(message.perpetualFlag);
    }
    if (message.maturityDate !== undefined) {
      Timestamp.encode(toTimestamp(message.maturityDate), writer.uint32(130).fork()).ldelim();
    }
    if (message.returnCondition !== "") {
      writer.uint32(138).string(message.returnCondition);
    }
    if (message.stateRegDate !== undefined) {
      Timestamp.encode(toTimestamp(message.stateRegDate), writer.uint32(146).fork()).ldelim();
    }
    if (message.placementDate !== undefined) {
      Timestamp.encode(toTimestamp(message.placementDate), writer.uint32(154).fork()).ldelim();
    }
    if (message.placementPrice !== undefined) {
      Quotation.encode(message.placementPrice, writer.uint32(162).fork()).ldelim();
    }
    if (message.issueSizePlan !== undefined) {
      Quotation.encode(message.issueSizePlan, writer.uint32(170).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetBond {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetBond();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.currentNominal = Quotation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.borrowName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.issueSize = Quotation.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.nominal = Quotation.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.nominalCurrency = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.issueKind = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.interestKind = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.couponQuantityPerYear = reader.int32();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.indexedNominalFlag = reader.bool();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.subordinatedFlag = reader.bool();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.collateralFlag = reader.bool();
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.taxFreeFlag = reader.bool();
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.amortizationFlag = reader.bool();
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.floatingCouponFlag = reader.bool();
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.perpetualFlag = reader.bool();
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.maturityDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.returnCondition = reader.string();
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.stateRegDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.placementDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.placementPrice = Quotation.decode(reader, reader.uint32());
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.issueSizePlan = Quotation.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AssetBond {
    return {
      currentNominal: isSet(object.currentNominal) ? Quotation.fromJSON(object.currentNominal) : undefined,
      borrowName: isSet(object.borrowName) ? globalThis.String(object.borrowName) : "",
      issueSize: isSet(object.issueSize) ? Quotation.fromJSON(object.issueSize) : undefined,
      nominal: isSet(object.nominal) ? Quotation.fromJSON(object.nominal) : undefined,
      nominalCurrency: isSet(object.nominalCurrency) ? globalThis.String(object.nominalCurrency) : "",
      issueKind: isSet(object.issueKind) ? globalThis.String(object.issueKind) : "",
      interestKind: isSet(object.interestKind) ? globalThis.String(object.interestKind) : "",
      couponQuantityPerYear: isSet(object.couponQuantityPerYear) ? globalThis.Number(object.couponQuantityPerYear) : 0,
      indexedNominalFlag: isSet(object.indexedNominalFlag) ? globalThis.Boolean(object.indexedNominalFlag) : false,
      subordinatedFlag: isSet(object.subordinatedFlag) ? globalThis.Boolean(object.subordinatedFlag) : false,
      collateralFlag: isSet(object.collateralFlag) ? globalThis.Boolean(object.collateralFlag) : false,
      taxFreeFlag: isSet(object.taxFreeFlag) ? globalThis.Boolean(object.taxFreeFlag) : false,
      amortizationFlag: isSet(object.amortizationFlag) ? globalThis.Boolean(object.amortizationFlag) : false,
      floatingCouponFlag: isSet(object.floatingCouponFlag) ? globalThis.Boolean(object.floatingCouponFlag) : false,
      perpetualFlag: isSet(object.perpetualFlag) ? globalThis.Boolean(object.perpetualFlag) : false,
      maturityDate: isSet(object.maturityDate) ? fromJsonTimestamp(object.maturityDate) : undefined,
      returnCondition: isSet(object.returnCondition) ? globalThis.String(object.returnCondition) : "",
      stateRegDate: isSet(object.stateRegDate) ? fromJsonTimestamp(object.stateRegDate) : undefined,
      placementDate: isSet(object.placementDate) ? fromJsonTimestamp(object.placementDate) : undefined,
      placementPrice: isSet(object.placementPrice) ? Quotation.fromJSON(object.placementPrice) : undefined,
      issueSizePlan: isSet(object.issueSizePlan) ? Quotation.fromJSON(object.issueSizePlan) : undefined,
    };
  },

  toJSON(message: AssetBond): unknown {
    const obj: any = {};
    if (message.currentNominal !== undefined) {
      obj.currentNominal = Quotation.toJSON(message.currentNominal);
    }
    if (message.borrowName !== "") {
      obj.borrowName = message.borrowName;
    }
    if (message.issueSize !== undefined) {
      obj.issueSize = Quotation.toJSON(message.issueSize);
    }
    if (message.nominal !== undefined) {
      obj.nominal = Quotation.toJSON(message.nominal);
    }
    if (message.nominalCurrency !== "") {
      obj.nominalCurrency = message.nominalCurrency;
    }
    if (message.issueKind !== "") {
      obj.issueKind = message.issueKind;
    }
    if (message.interestKind !== "") {
      obj.interestKind = message.interestKind;
    }
    if (message.couponQuantityPerYear !== 0) {
      obj.couponQuantityPerYear = Math.round(message.couponQuantityPerYear);
    }
    if (message.indexedNominalFlag === true) {
      obj.indexedNominalFlag = message.indexedNominalFlag;
    }
    if (message.subordinatedFlag === true) {
      obj.subordinatedFlag = message.subordinatedFlag;
    }
    if (message.collateralFlag === true) {
      obj.collateralFlag = message.collateralFlag;
    }
    if (message.taxFreeFlag === true) {
      obj.taxFreeFlag = message.taxFreeFlag;
    }
    if (message.amortizationFlag === true) {
      obj.amortizationFlag = message.amortizationFlag;
    }
    if (message.floatingCouponFlag === true) {
      obj.floatingCouponFlag = message.floatingCouponFlag;
    }
    if (message.perpetualFlag === true) {
      obj.perpetualFlag = message.perpetualFlag;
    }
    if (message.maturityDate !== undefined) {
      obj.maturityDate = message.maturityDate.toISOString();
    }
    if (message.returnCondition !== "") {
      obj.returnCondition = message.returnCondition;
    }
    if (message.stateRegDate !== undefined) {
      obj.stateRegDate = message.stateRegDate.toISOString();
    }
    if (message.placementDate !== undefined) {
      obj.placementDate = message.placementDate.toISOString();
    }
    if (message.placementPrice !== undefined) {
      obj.placementPrice = Quotation.toJSON(message.placementPrice);
    }
    if (message.issueSizePlan !== undefined) {
      obj.issueSizePlan = Quotation.toJSON(message.issueSizePlan);
    }
    return obj;
  },
};

function createBaseAssetStructuredProduct(): AssetStructuredProduct {
  return {
    borrowName: "",
    nominal: undefined,
    nominalCurrency: "",
    type: 0,
    logicPortfolio: "",
    assetType: 0,
    basicAsset: "",
    safetyBarrier: undefined,
    maturityDate: undefined,
    issueSizePlan: undefined,
    issueSize: undefined,
    placementDate: undefined,
    issueKind: "",
  };
}

export const AssetStructuredProduct = {
  encode(message: AssetStructuredProduct, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.borrowName !== "") {
      writer.uint32(10).string(message.borrowName);
    }
    if (message.nominal !== undefined) {
      Quotation.encode(message.nominal, writer.uint32(18).fork()).ldelim();
    }
    if (message.nominalCurrency !== "") {
      writer.uint32(26).string(message.nominalCurrency);
    }
    if (message.type !== 0) {
      writer.uint32(32).int32(message.type);
    }
    if (message.logicPortfolio !== "") {
      writer.uint32(42).string(message.logicPortfolio);
    }
    if (message.assetType !== 0) {
      writer.uint32(48).int32(message.assetType);
    }
    if (message.basicAsset !== "") {
      writer.uint32(58).string(message.basicAsset);
    }
    if (message.safetyBarrier !== undefined) {
      Quotation.encode(message.safetyBarrier, writer.uint32(66).fork()).ldelim();
    }
    if (message.maturityDate !== undefined) {
      Timestamp.encode(toTimestamp(message.maturityDate), writer.uint32(74).fork()).ldelim();
    }
    if (message.issueSizePlan !== undefined) {
      Quotation.encode(message.issueSizePlan, writer.uint32(82).fork()).ldelim();
    }
    if (message.issueSize !== undefined) {
      Quotation.encode(message.issueSize, writer.uint32(90).fork()).ldelim();
    }
    if (message.placementDate !== undefined) {
      Timestamp.encode(toTimestamp(message.placementDate), writer.uint32(98).fork()).ldelim();
    }
    if (message.issueKind !== "") {
      writer.uint32(106).string(message.issueKind);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetStructuredProduct {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetStructuredProduct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.borrowName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nominal = Quotation.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.nominalCurrency = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.logicPortfolio = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.assetType = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.basicAsset = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.safetyBarrier = Quotation.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.maturityDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.issueSizePlan = Quotation.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.issueSize = Quotation.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.placementDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.issueKind = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AssetStructuredProduct {
    return {
      borrowName: isSet(object.borrowName) ? globalThis.String(object.borrowName) : "",
      nominal: isSet(object.nominal) ? Quotation.fromJSON(object.nominal) : undefined,
      nominalCurrency: isSet(object.nominalCurrency) ? globalThis.String(object.nominalCurrency) : "",
      type: isSet(object.type) ? structuredProductTypeFromJSON(object.type) : 0,
      logicPortfolio: isSet(object.logicPortfolio) ? globalThis.String(object.logicPortfolio) : "",
      assetType: isSet(object.assetType) ? assetTypeFromJSON(object.assetType) : 0,
      basicAsset: isSet(object.basicAsset) ? globalThis.String(object.basicAsset) : "",
      safetyBarrier: isSet(object.safetyBarrier) ? Quotation.fromJSON(object.safetyBarrier) : undefined,
      maturityDate: isSet(object.maturityDate) ? fromJsonTimestamp(object.maturityDate) : undefined,
      issueSizePlan: isSet(object.issueSizePlan) ? Quotation.fromJSON(object.issueSizePlan) : undefined,
      issueSize: isSet(object.issueSize) ? Quotation.fromJSON(object.issueSize) : undefined,
      placementDate: isSet(object.placementDate) ? fromJsonTimestamp(object.placementDate) : undefined,
      issueKind: isSet(object.issueKind) ? globalThis.String(object.issueKind) : "",
    };
  },

  toJSON(message: AssetStructuredProduct): unknown {
    const obj: any = {};
    if (message.borrowName !== "") {
      obj.borrowName = message.borrowName;
    }
    if (message.nominal !== undefined) {
      obj.nominal = Quotation.toJSON(message.nominal);
    }
    if (message.nominalCurrency !== "") {
      obj.nominalCurrency = message.nominalCurrency;
    }
    if (message.type !== 0) {
      obj.type = structuredProductTypeToJSON(message.type);
    }
    if (message.logicPortfolio !== "") {
      obj.logicPortfolio = message.logicPortfolio;
    }
    if (message.assetType !== 0) {
      obj.assetType = assetTypeToJSON(message.assetType);
    }
    if (message.basicAsset !== "") {
      obj.basicAsset = message.basicAsset;
    }
    if (message.safetyBarrier !== undefined) {
      obj.safetyBarrier = Quotation.toJSON(message.safetyBarrier);
    }
    if (message.maturityDate !== undefined) {
      obj.maturityDate = message.maturityDate.toISOString();
    }
    if (message.issueSizePlan !== undefined) {
      obj.issueSizePlan = Quotation.toJSON(message.issueSizePlan);
    }
    if (message.issueSize !== undefined) {
      obj.issueSize = Quotation.toJSON(message.issueSize);
    }
    if (message.placementDate !== undefined) {
      obj.placementDate = message.placementDate.toISOString();
    }
    if (message.issueKind !== "") {
      obj.issueKind = message.issueKind;
    }
    return obj;
  },
};

function createBaseAssetEtf(): AssetEtf {
  return {
    totalExpense: undefined,
    hurdleRate: undefined,
    performanceFee: undefined,
    fixedCommission: undefined,
    paymentType: "",
    watermarkFlag: false,
    buyPremium: undefined,
    sellDiscount: undefined,
    rebalancingFlag: false,
    rebalancingFreq: "",
    managementType: "",
    primaryIndex: "",
    focusType: "",
    leveragedFlag: false,
    numShare: undefined,
    ucitsFlag: false,
    releasedDate: undefined,
    description: "",
    primaryIndexDescription: "",
    primaryIndexCompany: "",
    indexRecoveryPeriod: undefined,
    inavCode: "",
    divYieldFlag: false,
    expenseCommission: undefined,
    primaryIndexTrackingError: undefined,
    rebalancingPlan: "",
    taxRate: "",
    rebalancingDates: [],
    issueKind: "",
    nominal: undefined,
    nominalCurrency: "",
  };
}

export const AssetEtf = {
  encode(message: AssetEtf, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.totalExpense !== undefined) {
      Quotation.encode(message.totalExpense, writer.uint32(10).fork()).ldelim();
    }
    if (message.hurdleRate !== undefined) {
      Quotation.encode(message.hurdleRate, writer.uint32(18).fork()).ldelim();
    }
    if (message.performanceFee !== undefined) {
      Quotation.encode(message.performanceFee, writer.uint32(26).fork()).ldelim();
    }
    if (message.fixedCommission !== undefined) {
      Quotation.encode(message.fixedCommission, writer.uint32(34).fork()).ldelim();
    }
    if (message.paymentType !== "") {
      writer.uint32(42).string(message.paymentType);
    }
    if (message.watermarkFlag === true) {
      writer.uint32(48).bool(message.watermarkFlag);
    }
    if (message.buyPremium !== undefined) {
      Quotation.encode(message.buyPremium, writer.uint32(58).fork()).ldelim();
    }
    if (message.sellDiscount !== undefined) {
      Quotation.encode(message.sellDiscount, writer.uint32(66).fork()).ldelim();
    }
    if (message.rebalancingFlag === true) {
      writer.uint32(72).bool(message.rebalancingFlag);
    }
    if (message.rebalancingFreq !== "") {
      writer.uint32(82).string(message.rebalancingFreq);
    }
    if (message.managementType !== "") {
      writer.uint32(90).string(message.managementType);
    }
    if (message.primaryIndex !== "") {
      writer.uint32(98).string(message.primaryIndex);
    }
    if (message.focusType !== "") {
      writer.uint32(106).string(message.focusType);
    }
    if (message.leveragedFlag === true) {
      writer.uint32(112).bool(message.leveragedFlag);
    }
    if (message.numShare !== undefined) {
      Quotation.encode(message.numShare, writer.uint32(122).fork()).ldelim();
    }
    if (message.ucitsFlag === true) {
      writer.uint32(128).bool(message.ucitsFlag);
    }
    if (message.releasedDate !== undefined) {
      Timestamp.encode(toTimestamp(message.releasedDate), writer.uint32(138).fork()).ldelim();
    }
    if (message.description !== "") {
      writer.uint32(146).string(message.description);
    }
    if (message.primaryIndexDescription !== "") {
      writer.uint32(154).string(message.primaryIndexDescription);
    }
    if (message.primaryIndexCompany !== "") {
      writer.uint32(162).string(message.primaryIndexCompany);
    }
    if (message.indexRecoveryPeriod !== undefined) {
      Quotation.encode(message.indexRecoveryPeriod, writer.uint32(170).fork()).ldelim();
    }
    if (message.inavCode !== "") {
      writer.uint32(178).string(message.inavCode);
    }
    if (message.divYieldFlag === true) {
      writer.uint32(184).bool(message.divYieldFlag);
    }
    if (message.expenseCommission !== undefined) {
      Quotation.encode(message.expenseCommission, writer.uint32(194).fork()).ldelim();
    }
    if (message.primaryIndexTrackingError !== undefined) {
      Quotation.encode(message.primaryIndexTrackingError, writer.uint32(202).fork()).ldelim();
    }
    if (message.rebalancingPlan !== "") {
      writer.uint32(210).string(message.rebalancingPlan);
    }
    if (message.taxRate !== "") {
      writer.uint32(218).string(message.taxRate);
    }
    for (const v of message.rebalancingDates) {
      Timestamp.encode(toTimestamp(v!), writer.uint32(226).fork()).ldelim();
    }
    if (message.issueKind !== "") {
      writer.uint32(234).string(message.issueKind);
    }
    if (message.nominal !== undefined) {
      Quotation.encode(message.nominal, writer.uint32(242).fork()).ldelim();
    }
    if (message.nominalCurrency !== "") {
      writer.uint32(250).string(message.nominalCurrency);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetEtf {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetEtf();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.totalExpense = Quotation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.hurdleRate = Quotation.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.performanceFee = Quotation.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.fixedCommission = Quotation.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.paymentType = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.watermarkFlag = reader.bool();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.buyPremium = Quotation.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.sellDiscount = Quotation.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.rebalancingFlag = reader.bool();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.rebalancingFreq = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.managementType = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.primaryIndex = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.focusType = reader.string();
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.leveragedFlag = reader.bool();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.numShare = Quotation.decode(reader, reader.uint32());
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.ucitsFlag = reader.bool();
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.releasedDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.description = reader.string();
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.primaryIndexDescription = reader.string();
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.primaryIndexCompany = reader.string();
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.indexRecoveryPeriod = Quotation.decode(reader, reader.uint32());
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.inavCode = reader.string();
          continue;
        case 23:
          if (tag !== 184) {
            break;
          }

          message.divYieldFlag = reader.bool();
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.expenseCommission = Quotation.decode(reader, reader.uint32());
          continue;
        case 25:
          if (tag !== 202) {
            break;
          }

          message.primaryIndexTrackingError = Quotation.decode(reader, reader.uint32());
          continue;
        case 26:
          if (tag !== 210) {
            break;
          }

          message.rebalancingPlan = reader.string();
          continue;
        case 27:
          if (tag !== 218) {
            break;
          }

          message.taxRate = reader.string();
          continue;
        case 28:
          if (tag !== 226) {
            break;
          }

          message.rebalancingDates.push(fromTimestamp(Timestamp.decode(reader, reader.uint32())));
          continue;
        case 29:
          if (tag !== 234) {
            break;
          }

          message.issueKind = reader.string();
          continue;
        case 30:
          if (tag !== 242) {
            break;
          }

          message.nominal = Quotation.decode(reader, reader.uint32());
          continue;
        case 31:
          if (tag !== 250) {
            break;
          }

          message.nominalCurrency = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AssetEtf {
    return {
      totalExpense: isSet(object.totalExpense) ? Quotation.fromJSON(object.totalExpense) : undefined,
      hurdleRate: isSet(object.hurdleRate) ? Quotation.fromJSON(object.hurdleRate) : undefined,
      performanceFee: isSet(object.performanceFee) ? Quotation.fromJSON(object.performanceFee) : undefined,
      fixedCommission: isSet(object.fixedCommission) ? Quotation.fromJSON(object.fixedCommission) : undefined,
      paymentType: isSet(object.paymentType) ? globalThis.String(object.paymentType) : "",
      watermarkFlag: isSet(object.watermarkFlag) ? globalThis.Boolean(object.watermarkFlag) : false,
      buyPremium: isSet(object.buyPremium) ? Quotation.fromJSON(object.buyPremium) : undefined,
      sellDiscount: isSet(object.sellDiscount) ? Quotation.fromJSON(object.sellDiscount) : undefined,
      rebalancingFlag: isSet(object.rebalancingFlag) ? globalThis.Boolean(object.rebalancingFlag) : false,
      rebalancingFreq: isSet(object.rebalancingFreq) ? globalThis.String(object.rebalancingFreq) : "",
      managementType: isSet(object.managementType) ? globalThis.String(object.managementType) : "",
      primaryIndex: isSet(object.primaryIndex) ? globalThis.String(object.primaryIndex) : "",
      focusType: isSet(object.focusType) ? globalThis.String(object.focusType) : "",
      leveragedFlag: isSet(object.leveragedFlag) ? globalThis.Boolean(object.leveragedFlag) : false,
      numShare: isSet(object.numShare) ? Quotation.fromJSON(object.numShare) : undefined,
      ucitsFlag: isSet(object.ucitsFlag) ? globalThis.Boolean(object.ucitsFlag) : false,
      releasedDate: isSet(object.releasedDate) ? fromJsonTimestamp(object.releasedDate) : undefined,
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      primaryIndexDescription: isSet(object.primaryIndexDescription)
        ? globalThis.String(object.primaryIndexDescription)
        : "",
      primaryIndexCompany: isSet(object.primaryIndexCompany) ? globalThis.String(object.primaryIndexCompany) : "",
      indexRecoveryPeriod: isSet(object.indexRecoveryPeriod)
        ? Quotation.fromJSON(object.indexRecoveryPeriod)
        : undefined,
      inavCode: isSet(object.inavCode) ? globalThis.String(object.inavCode) : "",
      divYieldFlag: isSet(object.divYieldFlag) ? globalThis.Boolean(object.divYieldFlag) : false,
      expenseCommission: isSet(object.expenseCommission) ? Quotation.fromJSON(object.expenseCommission) : undefined,
      primaryIndexTrackingError: isSet(object.primaryIndexTrackingError)
        ? Quotation.fromJSON(object.primaryIndexTrackingError)
        : undefined,
      rebalancingPlan: isSet(object.rebalancingPlan) ? globalThis.String(object.rebalancingPlan) : "",
      taxRate: isSet(object.taxRate) ? globalThis.String(object.taxRate) : "",
      rebalancingDates: globalThis.Array.isArray(object?.rebalancingDates)
        ? object.rebalancingDates.map((e: any) => fromJsonTimestamp(e))
        : [],
      issueKind: isSet(object.issueKind) ? globalThis.String(object.issueKind) : "",
      nominal: isSet(object.nominal) ? Quotation.fromJSON(object.nominal) : undefined,
      nominalCurrency: isSet(object.nominalCurrency) ? globalThis.String(object.nominalCurrency) : "",
    };
  },

  toJSON(message: AssetEtf): unknown {
    const obj: any = {};
    if (message.totalExpense !== undefined) {
      obj.totalExpense = Quotation.toJSON(message.totalExpense);
    }
    if (message.hurdleRate !== undefined) {
      obj.hurdleRate = Quotation.toJSON(message.hurdleRate);
    }
    if (message.performanceFee !== undefined) {
      obj.performanceFee = Quotation.toJSON(message.performanceFee);
    }
    if (message.fixedCommission !== undefined) {
      obj.fixedCommission = Quotation.toJSON(message.fixedCommission);
    }
    if (message.paymentType !== "") {
      obj.paymentType = message.paymentType;
    }
    if (message.watermarkFlag === true) {
      obj.watermarkFlag = message.watermarkFlag;
    }
    if (message.buyPremium !== undefined) {
      obj.buyPremium = Quotation.toJSON(message.buyPremium);
    }
    if (message.sellDiscount !== undefined) {
      obj.sellDiscount = Quotation.toJSON(message.sellDiscount);
    }
    if (message.rebalancingFlag === true) {
      obj.rebalancingFlag = message.rebalancingFlag;
    }
    if (message.rebalancingFreq !== "") {
      obj.rebalancingFreq = message.rebalancingFreq;
    }
    if (message.managementType !== "") {
      obj.managementType = message.managementType;
    }
    if (message.primaryIndex !== "") {
      obj.primaryIndex = message.primaryIndex;
    }
    if (message.focusType !== "") {
      obj.focusType = message.focusType;
    }
    if (message.leveragedFlag === true) {
      obj.leveragedFlag = message.leveragedFlag;
    }
    if (message.numShare !== undefined) {
      obj.numShare = Quotation.toJSON(message.numShare);
    }
    if (message.ucitsFlag === true) {
      obj.ucitsFlag = message.ucitsFlag;
    }
    if (message.releasedDate !== undefined) {
      obj.releasedDate = message.releasedDate.toISOString();
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.primaryIndexDescription !== "") {
      obj.primaryIndexDescription = message.primaryIndexDescription;
    }
    if (message.primaryIndexCompany !== "") {
      obj.primaryIndexCompany = message.primaryIndexCompany;
    }
    if (message.indexRecoveryPeriod !== undefined) {
      obj.indexRecoveryPeriod = Quotation.toJSON(message.indexRecoveryPeriod);
    }
    if (message.inavCode !== "") {
      obj.inavCode = message.inavCode;
    }
    if (message.divYieldFlag === true) {
      obj.divYieldFlag = message.divYieldFlag;
    }
    if (message.expenseCommission !== undefined) {
      obj.expenseCommission = Quotation.toJSON(message.expenseCommission);
    }
    if (message.primaryIndexTrackingError !== undefined) {
      obj.primaryIndexTrackingError = Quotation.toJSON(message.primaryIndexTrackingError);
    }
    if (message.rebalancingPlan !== "") {
      obj.rebalancingPlan = message.rebalancingPlan;
    }
    if (message.taxRate !== "") {
      obj.taxRate = message.taxRate;
    }
    if (message.rebalancingDates?.length) {
      obj.rebalancingDates = message.rebalancingDates.map((e) => e.toISOString());
    }
    if (message.issueKind !== "") {
      obj.issueKind = message.issueKind;
    }
    if (message.nominal !== undefined) {
      obj.nominal = Quotation.toJSON(message.nominal);
    }
    if (message.nominalCurrency !== "") {
      obj.nominalCurrency = message.nominalCurrency;
    }
    return obj;
  },
};

function createBaseAssetClearingCertificate(): AssetClearingCertificate {
  return { nominal: undefined, nominalCurrency: "" };
}

export const AssetClearingCertificate = {
  encode(message: AssetClearingCertificate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nominal !== undefined) {
      Quotation.encode(message.nominal, writer.uint32(10).fork()).ldelim();
    }
    if (message.nominalCurrency !== "") {
      writer.uint32(18).string(message.nominalCurrency);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetClearingCertificate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetClearingCertificate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.nominal = Quotation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nominalCurrency = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AssetClearingCertificate {
    return {
      nominal: isSet(object.nominal) ? Quotation.fromJSON(object.nominal) : undefined,
      nominalCurrency: isSet(object.nominalCurrency) ? globalThis.String(object.nominalCurrency) : "",
    };
  },

  toJSON(message: AssetClearingCertificate): unknown {
    const obj: any = {};
    if (message.nominal !== undefined) {
      obj.nominal = Quotation.toJSON(message.nominal);
    }
    if (message.nominalCurrency !== "") {
      obj.nominalCurrency = message.nominalCurrency;
    }
    return obj;
  },
};

function createBaseBrand(): Brand {
  return {
    uid: "",
    name: "",
    description: "",
    info: "",
    company: "",
    sector: "",
    countryOfRisk: "",
    countryOfRiskName: "",
  };
}

export const Brand = {
  encode(message: Brand, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uid !== "") {
      writer.uint32(10).string(message.uid);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    if (message.company !== "") {
      writer.uint32(42).string(message.company);
    }
    if (message.sector !== "") {
      writer.uint32(50).string(message.sector);
    }
    if (message.countryOfRisk !== "") {
      writer.uint32(58).string(message.countryOfRisk);
    }
    if (message.countryOfRiskName !== "") {
      writer.uint32(66).string(message.countryOfRiskName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Brand {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBrand();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.uid = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.info = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.company = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.sector = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.countryOfRisk = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.countryOfRiskName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Brand {
    return {
      uid: isSet(object.uid) ? globalThis.String(object.uid) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      info: isSet(object.info) ? globalThis.String(object.info) : "",
      company: isSet(object.company) ? globalThis.String(object.company) : "",
      sector: isSet(object.sector) ? globalThis.String(object.sector) : "",
      countryOfRisk: isSet(object.countryOfRisk) ? globalThis.String(object.countryOfRisk) : "",
      countryOfRiskName: isSet(object.countryOfRiskName) ? globalThis.String(object.countryOfRiskName) : "",
    };
  },

  toJSON(message: Brand): unknown {
    const obj: any = {};
    if (message.uid !== "") {
      obj.uid = message.uid;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.info !== "") {
      obj.info = message.info;
    }
    if (message.company !== "") {
      obj.company = message.company;
    }
    if (message.sector !== "") {
      obj.sector = message.sector;
    }
    if (message.countryOfRisk !== "") {
      obj.countryOfRisk = message.countryOfRisk;
    }
    if (message.countryOfRiskName !== "") {
      obj.countryOfRiskName = message.countryOfRiskName;
    }
    return obj;
  },
};

function createBaseAssetInstrument(): AssetInstrument {
  return {
    uid: "",
    figi: "",
    instrumentType: "",
    ticker: "",
    classCode: "",
    links: [],
    instrumentKind: 0,
    positionUid: "",
  };
}

export const AssetInstrument = {
  encode(message: AssetInstrument, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uid !== "") {
      writer.uint32(10).string(message.uid);
    }
    if (message.figi !== "") {
      writer.uint32(18).string(message.figi);
    }
    if (message.instrumentType !== "") {
      writer.uint32(26).string(message.instrumentType);
    }
    if (message.ticker !== "") {
      writer.uint32(34).string(message.ticker);
    }
    if (message.classCode !== "") {
      writer.uint32(42).string(message.classCode);
    }
    for (const v of message.links) {
      InstrumentLink.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.instrumentKind !== 0) {
      writer.uint32(80).int32(message.instrumentKind);
    }
    if (message.positionUid !== "") {
      writer.uint32(90).string(message.positionUid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetInstrument {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetInstrument();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.uid = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.figi = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.instrumentType = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.ticker = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.classCode = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.links.push(InstrumentLink.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.instrumentKind = reader.int32() as any;
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.positionUid = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AssetInstrument {
    return {
      uid: isSet(object.uid) ? globalThis.String(object.uid) : "",
      figi: isSet(object.figi) ? globalThis.String(object.figi) : "",
      instrumentType: isSet(object.instrumentType) ? globalThis.String(object.instrumentType) : "",
      ticker: isSet(object.ticker) ? globalThis.String(object.ticker) : "",
      classCode: isSet(object.classCode) ? globalThis.String(object.classCode) : "",
      links: globalThis.Array.isArray(object?.links) ? object.links.map((e: any) => InstrumentLink.fromJSON(e)) : [],
      instrumentKind: isSet(object.instrumentKind) ? instrumentTypeFromJSON(object.instrumentKind) : 0,
      positionUid: isSet(object.positionUid) ? globalThis.String(object.positionUid) : "",
    };
  },

  toJSON(message: AssetInstrument): unknown {
    const obj: any = {};
    if (message.uid !== "") {
      obj.uid = message.uid;
    }
    if (message.figi !== "") {
      obj.figi = message.figi;
    }
    if (message.instrumentType !== "") {
      obj.instrumentType = message.instrumentType;
    }
    if (message.ticker !== "") {
      obj.ticker = message.ticker;
    }
    if (message.classCode !== "") {
      obj.classCode = message.classCode;
    }
    if (message.links?.length) {
      obj.links = message.links.map((e) => InstrumentLink.toJSON(e));
    }
    if (message.instrumentKind !== 0) {
      obj.instrumentKind = instrumentTypeToJSON(message.instrumentKind);
    }
    if (message.positionUid !== "") {
      obj.positionUid = message.positionUid;
    }
    return obj;
  },
};

function createBaseInstrumentLink(): InstrumentLink {
  return { type: "", instrumentUid: "" };
}

export const InstrumentLink = {
  encode(message: InstrumentLink, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.instrumentUid !== "") {
      writer.uint32(18).string(message.instrumentUid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InstrumentLink {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstrumentLink();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.type = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.instrumentUid = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InstrumentLink {
    return {
      type: isSet(object.type) ? globalThis.String(object.type) : "",
      instrumentUid: isSet(object.instrumentUid) ? globalThis.String(object.instrumentUid) : "",
    };
  },

  toJSON(message: InstrumentLink): unknown {
    const obj: any = {};
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.instrumentUid !== "") {
      obj.instrumentUid = message.instrumentUid;
    }
    return obj;
  },
};

function createBaseGetFavoritesRequest(): GetFavoritesRequest {
  return {};
}

export const GetFavoritesRequest = {
  encode(_: GetFavoritesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetFavoritesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetFavoritesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): GetFavoritesRequest {
    return {};
  },

  toJSON(_: GetFavoritesRequest): unknown {
    const obj: any = {};
    return obj;
  },
};

function createBaseGetFavoritesResponse(): GetFavoritesResponse {
  return { favoriteInstruments: [] };
}

export const GetFavoritesResponse = {
  encode(message: GetFavoritesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.favoriteInstruments) {
      FavoriteInstrument.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetFavoritesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetFavoritesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.favoriteInstruments.push(FavoriteInstrument.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetFavoritesResponse {
    return {
      favoriteInstruments: globalThis.Array.isArray(object?.favoriteInstruments)
        ? object.favoriteInstruments.map((e: any) => FavoriteInstrument.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetFavoritesResponse): unknown {
    const obj: any = {};
    if (message.favoriteInstruments?.length) {
      obj.favoriteInstruments = message.favoriteInstruments.map((e) => FavoriteInstrument.toJSON(e));
    }
    return obj;
  },
};

function createBaseFavoriteInstrument(): FavoriteInstrument {
  return {
    figi: "",
    ticker: "",
    classCode: "",
    isin: "",
    instrumentType: "",
    otcFlag: false,
    apiTradeAvailableFlag: false,
    instrumentKind: 0,
  };
}

export const FavoriteInstrument = {
  encode(message: FavoriteInstrument, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.ticker !== "") {
      writer.uint32(18).string(message.ticker);
    }
    if (message.classCode !== "") {
      writer.uint32(26).string(message.classCode);
    }
    if (message.isin !== "") {
      writer.uint32(34).string(message.isin);
    }
    if (message.instrumentType !== "") {
      writer.uint32(90).string(message.instrumentType);
    }
    if (message.otcFlag === true) {
      writer.uint32(128).bool(message.otcFlag);
    }
    if (message.apiTradeAvailableFlag === true) {
      writer.uint32(136).bool(message.apiTradeAvailableFlag);
    }
    if (message.instrumentKind !== 0) {
      writer.uint32(144).int32(message.instrumentKind);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FavoriteInstrument {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFavoriteInstrument();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.figi = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.ticker = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.classCode = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.isin = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.instrumentType = reader.string();
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.otcFlag = reader.bool();
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }

          message.apiTradeAvailableFlag = reader.bool();
          continue;
        case 18:
          if (tag !== 144) {
            break;
          }

          message.instrumentKind = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FavoriteInstrument {
    return {
      figi: isSet(object.figi) ? globalThis.String(object.figi) : "",
      ticker: isSet(object.ticker) ? globalThis.String(object.ticker) : "",
      classCode: isSet(object.classCode) ? globalThis.String(object.classCode) : "",
      isin: isSet(object.isin) ? globalThis.String(object.isin) : "",
      instrumentType: isSet(object.instrumentType) ? globalThis.String(object.instrumentType) : "",
      otcFlag: isSet(object.otcFlag) ? globalThis.Boolean(object.otcFlag) : false,
      apiTradeAvailableFlag: isSet(object.apiTradeAvailableFlag)
        ? globalThis.Boolean(object.apiTradeAvailableFlag)
        : false,
      instrumentKind: isSet(object.instrumentKind) ? instrumentTypeFromJSON(object.instrumentKind) : 0,
    };
  },

  toJSON(message: FavoriteInstrument): unknown {
    const obj: any = {};
    if (message.figi !== "") {
      obj.figi = message.figi;
    }
    if (message.ticker !== "") {
      obj.ticker = message.ticker;
    }
    if (message.classCode !== "") {
      obj.classCode = message.classCode;
    }
    if (message.isin !== "") {
      obj.isin = message.isin;
    }
    if (message.instrumentType !== "") {
      obj.instrumentType = message.instrumentType;
    }
    if (message.otcFlag === true) {
      obj.otcFlag = message.otcFlag;
    }
    if (message.apiTradeAvailableFlag === true) {
      obj.apiTradeAvailableFlag = message.apiTradeAvailableFlag;
    }
    if (message.instrumentKind !== 0) {
      obj.instrumentKind = instrumentTypeToJSON(message.instrumentKind);
    }
    return obj;
  },
};

function createBaseEditFavoritesRequest(): EditFavoritesRequest {
  return { instruments: [], actionType: 0 };
}

export const EditFavoritesRequest = {
  encode(message: EditFavoritesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.instruments) {
      EditFavoritesRequestInstrument.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.actionType !== 0) {
      writer.uint32(48).int32(message.actionType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EditFavoritesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEditFavoritesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instruments.push(EditFavoritesRequestInstrument.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.actionType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EditFavoritesRequest {
    return {
      instruments: globalThis.Array.isArray(object?.instruments)
        ? object.instruments.map((e: any) => EditFavoritesRequestInstrument.fromJSON(e))
        : [],
      actionType: isSet(object.actionType) ? editFavoritesActionTypeFromJSON(object.actionType) : 0,
    };
  },

  toJSON(message: EditFavoritesRequest): unknown {
    const obj: any = {};
    if (message.instruments?.length) {
      obj.instruments = message.instruments.map((e) => EditFavoritesRequestInstrument.toJSON(e));
    }
    if (message.actionType !== 0) {
      obj.actionType = editFavoritesActionTypeToJSON(message.actionType);
    }
    return obj;
  },
};

function createBaseEditFavoritesRequestInstrument(): EditFavoritesRequestInstrument {
  return { figi: "" };
}

export const EditFavoritesRequestInstrument = {
  encode(message: EditFavoritesRequestInstrument, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EditFavoritesRequestInstrument {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEditFavoritesRequestInstrument();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.figi = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EditFavoritesRequestInstrument {
    return { figi: isSet(object.figi) ? globalThis.String(object.figi) : "" };
  },

  toJSON(message: EditFavoritesRequestInstrument): unknown {
    const obj: any = {};
    if (message.figi !== "") {
      obj.figi = message.figi;
    }
    return obj;
  },
};

function createBaseEditFavoritesResponse(): EditFavoritesResponse {
  return { favoriteInstruments: [] };
}

export const EditFavoritesResponse = {
  encode(message: EditFavoritesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.favoriteInstruments) {
      FavoriteInstrument.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EditFavoritesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEditFavoritesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.favoriteInstruments.push(FavoriteInstrument.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EditFavoritesResponse {
    return {
      favoriteInstruments: globalThis.Array.isArray(object?.favoriteInstruments)
        ? object.favoriteInstruments.map((e: any) => FavoriteInstrument.fromJSON(e))
        : [],
    };
  },

  toJSON(message: EditFavoritesResponse): unknown {
    const obj: any = {};
    if (message.favoriteInstruments?.length) {
      obj.favoriteInstruments = message.favoriteInstruments.map((e) => FavoriteInstrument.toJSON(e));
    }
    return obj;
  },
};

function createBaseGetCountriesRequest(): GetCountriesRequest {
  return {};
}

export const GetCountriesRequest = {
  encode(_: GetCountriesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetCountriesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCountriesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): GetCountriesRequest {
    return {};
  },

  toJSON(_: GetCountriesRequest): unknown {
    const obj: any = {};
    return obj;
  },
};

function createBaseGetCountriesResponse(): GetCountriesResponse {
  return { countries: [] };
}

export const GetCountriesResponse = {
  encode(message: GetCountriesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.countries) {
      CountryResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetCountriesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCountriesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.countries.push(CountryResponse.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetCountriesResponse {
    return {
      countries: globalThis.Array.isArray(object?.countries)
        ? object.countries.map((e: any) => CountryResponse.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetCountriesResponse): unknown {
    const obj: any = {};
    if (message.countries?.length) {
      obj.countries = message.countries.map((e) => CountryResponse.toJSON(e));
    }
    return obj;
  },
};

function createBaseCountryResponse(): CountryResponse {
  return { alfaTwo: "", alfaThree: "", name: "", nameBrief: "" };
}

export const CountryResponse = {
  encode(message: CountryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.alfaTwo !== "") {
      writer.uint32(10).string(message.alfaTwo);
    }
    if (message.alfaThree !== "") {
      writer.uint32(18).string(message.alfaThree);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.nameBrief !== "") {
      writer.uint32(34).string(message.nameBrief);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CountryResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCountryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.alfaTwo = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.alfaThree = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.nameBrief = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CountryResponse {
    return {
      alfaTwo: isSet(object.alfaTwo) ? globalThis.String(object.alfaTwo) : "",
      alfaThree: isSet(object.alfaThree) ? globalThis.String(object.alfaThree) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      nameBrief: isSet(object.nameBrief) ? globalThis.String(object.nameBrief) : "",
    };
  },

  toJSON(message: CountryResponse): unknown {
    const obj: any = {};
    if (message.alfaTwo !== "") {
      obj.alfaTwo = message.alfaTwo;
    }
    if (message.alfaThree !== "") {
      obj.alfaThree = message.alfaThree;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.nameBrief !== "") {
      obj.nameBrief = message.nameBrief;
    }
    return obj;
  },
};

function createBaseFindInstrumentRequest(): FindInstrumentRequest {
  return { query: "", instrumentKind: 0, apiTradeAvailableFlag: false };
}

export const FindInstrumentRequest = {
  encode(message: FindInstrumentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.query !== "") {
      writer.uint32(10).string(message.query);
    }
    if (message.instrumentKind !== 0) {
      writer.uint32(16).int32(message.instrumentKind);
    }
    if (message.apiTradeAvailableFlag === true) {
      writer.uint32(24).bool(message.apiTradeAvailableFlag);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FindInstrumentRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFindInstrumentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.query = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.instrumentKind = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.apiTradeAvailableFlag = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FindInstrumentRequest {
    return {
      query: isSet(object.query) ? globalThis.String(object.query) : "",
      instrumentKind: isSet(object.instrumentKind) ? instrumentTypeFromJSON(object.instrumentKind) : 0,
      apiTradeAvailableFlag: isSet(object.apiTradeAvailableFlag)
        ? globalThis.Boolean(object.apiTradeAvailableFlag)
        : false,
    };
  },

  toJSON(message: FindInstrumentRequest): unknown {
    const obj: any = {};
    if (message.query !== "") {
      obj.query = message.query;
    }
    if (message.instrumentKind !== 0) {
      obj.instrumentKind = instrumentTypeToJSON(message.instrumentKind);
    }
    if (message.apiTradeAvailableFlag === true) {
      obj.apiTradeAvailableFlag = message.apiTradeAvailableFlag;
    }
    return obj;
  },
};

function createBaseFindInstrumentResponse(): FindInstrumentResponse {
  return { instruments: [] };
}

export const FindInstrumentResponse = {
  encode(message: FindInstrumentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.instruments) {
      InstrumentShort.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FindInstrumentResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFindInstrumentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instruments.push(InstrumentShort.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FindInstrumentResponse {
    return {
      instruments: globalThis.Array.isArray(object?.instruments)
        ? object.instruments.map((e: any) => InstrumentShort.fromJSON(e))
        : [],
    };
  },

  toJSON(message: FindInstrumentResponse): unknown {
    const obj: any = {};
    if (message.instruments?.length) {
      obj.instruments = message.instruments.map((e) => InstrumentShort.toJSON(e));
    }
    return obj;
  },
};

function createBaseInstrumentShort(): InstrumentShort {
  return {
    isin: "",
    figi: "",
    ticker: "",
    classCode: "",
    instrumentType: "",
    name: "",
    uid: "",
    positionUid: "",
    instrumentKind: 0,
    apiTradeAvailableFlag: false,
    forIisFlag: false,
    first1minCandleDate: undefined,
    first1dayCandleDate: undefined,
    forQualInvestorFlag: false,
    weekendFlag: false,
    blockedTcaFlag: false,
  };
}

export const InstrumentShort = {
  encode(message: InstrumentShort, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isin !== "") {
      writer.uint32(10).string(message.isin);
    }
    if (message.figi !== "") {
      writer.uint32(18).string(message.figi);
    }
    if (message.ticker !== "") {
      writer.uint32(26).string(message.ticker);
    }
    if (message.classCode !== "") {
      writer.uint32(34).string(message.classCode);
    }
    if (message.instrumentType !== "") {
      writer.uint32(42).string(message.instrumentType);
    }
    if (message.name !== "") {
      writer.uint32(50).string(message.name);
    }
    if (message.uid !== "") {
      writer.uint32(58).string(message.uid);
    }
    if (message.positionUid !== "") {
      writer.uint32(66).string(message.positionUid);
    }
    if (message.instrumentKind !== 0) {
      writer.uint32(80).int32(message.instrumentKind);
    }
    if (message.apiTradeAvailableFlag === true) {
      writer.uint32(88).bool(message.apiTradeAvailableFlag);
    }
    if (message.forIisFlag === true) {
      writer.uint32(96).bool(message.forIisFlag);
    }
    if (message.first1minCandleDate !== undefined) {
      Timestamp.encode(toTimestamp(message.first1minCandleDate), writer.uint32(210).fork()).ldelim();
    }
    if (message.first1dayCandleDate !== undefined) {
      Timestamp.encode(toTimestamp(message.first1dayCandleDate), writer.uint32(218).fork()).ldelim();
    }
    if (message.forQualInvestorFlag === true) {
      writer.uint32(224).bool(message.forQualInvestorFlag);
    }
    if (message.weekendFlag === true) {
      writer.uint32(232).bool(message.weekendFlag);
    }
    if (message.blockedTcaFlag === true) {
      writer.uint32(240).bool(message.blockedTcaFlag);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InstrumentShort {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstrumentShort();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.isin = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.figi = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.ticker = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.classCode = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.instrumentType = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.name = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.uid = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.positionUid = reader.string();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.instrumentKind = reader.int32() as any;
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.apiTradeAvailableFlag = reader.bool();
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.forIisFlag = reader.bool();
          continue;
        case 26:
          if (tag !== 210) {
            break;
          }

          message.first1minCandleDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 27:
          if (tag !== 218) {
            break;
          }

          message.first1dayCandleDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 28:
          if (tag !== 224) {
            break;
          }

          message.forQualInvestorFlag = reader.bool();
          continue;
        case 29:
          if (tag !== 232) {
            break;
          }

          message.weekendFlag = reader.bool();
          continue;
        case 30:
          if (tag !== 240) {
            break;
          }

          message.blockedTcaFlag = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InstrumentShort {
    return {
      isin: isSet(object.isin) ? globalThis.String(object.isin) : "",
      figi: isSet(object.figi) ? globalThis.String(object.figi) : "",
      ticker: isSet(object.ticker) ? globalThis.String(object.ticker) : "",
      classCode: isSet(object.classCode) ? globalThis.String(object.classCode) : "",
      instrumentType: isSet(object.instrumentType) ? globalThis.String(object.instrumentType) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      uid: isSet(object.uid) ? globalThis.String(object.uid) : "",
      positionUid: isSet(object.positionUid) ? globalThis.String(object.positionUid) : "",
      instrumentKind: isSet(object.instrumentKind) ? instrumentTypeFromJSON(object.instrumentKind) : 0,
      apiTradeAvailableFlag: isSet(object.apiTradeAvailableFlag)
        ? globalThis.Boolean(object.apiTradeAvailableFlag)
        : false,
      forIisFlag: isSet(object.forIisFlag) ? globalThis.Boolean(object.forIisFlag) : false,
      first1minCandleDate: isSet(object.first1minCandleDate)
        ? fromJsonTimestamp(object.first1minCandleDate)
        : undefined,
      first1dayCandleDate: isSet(object.first1dayCandleDate)
        ? fromJsonTimestamp(object.first1dayCandleDate)
        : undefined,
      forQualInvestorFlag: isSet(object.forQualInvestorFlag) ? globalThis.Boolean(object.forQualInvestorFlag) : false,
      weekendFlag: isSet(object.weekendFlag) ? globalThis.Boolean(object.weekendFlag) : false,
      blockedTcaFlag: isSet(object.blockedTcaFlag) ? globalThis.Boolean(object.blockedTcaFlag) : false,
    };
  },

  toJSON(message: InstrumentShort): unknown {
    const obj: any = {};
    if (message.isin !== "") {
      obj.isin = message.isin;
    }
    if (message.figi !== "") {
      obj.figi = message.figi;
    }
    if (message.ticker !== "") {
      obj.ticker = message.ticker;
    }
    if (message.classCode !== "") {
      obj.classCode = message.classCode;
    }
    if (message.instrumentType !== "") {
      obj.instrumentType = message.instrumentType;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.uid !== "") {
      obj.uid = message.uid;
    }
    if (message.positionUid !== "") {
      obj.positionUid = message.positionUid;
    }
    if (message.instrumentKind !== 0) {
      obj.instrumentKind = instrumentTypeToJSON(message.instrumentKind);
    }
    if (message.apiTradeAvailableFlag === true) {
      obj.apiTradeAvailableFlag = message.apiTradeAvailableFlag;
    }
    if (message.forIisFlag === true) {
      obj.forIisFlag = message.forIisFlag;
    }
    if (message.first1minCandleDate !== undefined) {
      obj.first1minCandleDate = message.first1minCandleDate.toISOString();
    }
    if (message.first1dayCandleDate !== undefined) {
      obj.first1dayCandleDate = message.first1dayCandleDate.toISOString();
    }
    if (message.forQualInvestorFlag === true) {
      obj.forQualInvestorFlag = message.forQualInvestorFlag;
    }
    if (message.weekendFlag === true) {
      obj.weekendFlag = message.weekendFlag;
    }
    if (message.blockedTcaFlag === true) {
      obj.blockedTcaFlag = message.blockedTcaFlag;
    }
    return obj;
  },
};

function createBaseGetBrandsRequest(): GetBrandsRequest {
  return {};
}

export const GetBrandsRequest = {
  encode(_: GetBrandsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBrandsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBrandsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): GetBrandsRequest {
    return {};
  },

  toJSON(_: GetBrandsRequest): unknown {
    const obj: any = {};
    return obj;
  },
};

function createBaseGetBrandRequest(): GetBrandRequest {
  return { id: "" };
}

export const GetBrandRequest = {
  encode(message: GetBrandRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBrandRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBrandRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetBrandRequest {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: GetBrandRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },
};

function createBaseGetBrandsResponse(): GetBrandsResponse {
  return { brands: [] };
}

export const GetBrandsResponse = {
  encode(message: GetBrandsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.brands) {
      Brand.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBrandsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBrandsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.brands.push(Brand.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetBrandsResponse {
    return { brands: globalThis.Array.isArray(object?.brands) ? object.brands.map((e: any) => Brand.fromJSON(e)) : [] };
  },

  toJSON(message: GetBrandsResponse): unknown {
    const obj: any = {};
    if (message.brands?.length) {
      obj.brands = message.brands.map((e) => Brand.toJSON(e));
    }
    return obj;
  },
};

/**
 * Сервис предназначен для получения:</br>**1**. информации об инструментах;</br>**2**.
 * расписания торговых сессий;</br>**3**. календаря выплат купонов по облигациям;</br>**4**.
 * размера гарантийного обеспечения по фьючерсам;</br>**5**. дивидендов по ценной бумаге.
 */
export type InstrumentsServiceDefinition = typeof InstrumentsServiceDefinition;
export const InstrumentsServiceDefinition = {
  name: "InstrumentsService",
  fullName: "tinkoff.public.invest.api.contract.v1.InstrumentsService",
  methods: {
    /** Метод получения расписания торгов торговых площадок. */
    tradingSchedules: {
      name: "TradingSchedules",
      requestType: TradingSchedulesRequest,
      requestStream: false,
      responseType: TradingSchedulesResponse,
      responseStream: false,
      options: {},
    },
    /** Метод получения облигации по её идентификатору. */
    bondBy: {
      name: "BondBy",
      requestType: InstrumentRequest,
      requestStream: false,
      responseType: BondResponse,
      responseStream: false,
      options: {},
    },
    /** Метод получения списка облигаций. */
    bonds: {
      name: "Bonds",
      requestType: InstrumentsRequest,
      requestStream: false,
      responseType: BondsResponse,
      responseStream: false,
      options: {},
    },
    /** Метод получения графика выплат купонов по облигации. */
    getBondCoupons: {
      name: "GetBondCoupons",
      requestType: GetBondCouponsRequest,
      requestStream: false,
      responseType: GetBondCouponsResponse,
      responseStream: false,
      options: {},
    },
    /** Метод получения валюты по её идентификатору. */
    currencyBy: {
      name: "CurrencyBy",
      requestType: InstrumentRequest,
      requestStream: false,
      responseType: CurrencyResponse,
      responseStream: false,
      options: {},
    },
    /** Метод получения списка валют. */
    currencies: {
      name: "Currencies",
      requestType: InstrumentsRequest,
      requestStream: false,
      responseType: CurrenciesResponse,
      responseStream: false,
      options: {},
    },
    /** Метод получения инвестиционного фонда по его идентификатору. */
    etfBy: {
      name: "EtfBy",
      requestType: InstrumentRequest,
      requestStream: false,
      responseType: EtfResponse,
      responseStream: false,
      options: {},
    },
    /** Метод получения списка инвестиционных фондов. */
    etfs: {
      name: "Etfs",
      requestType: InstrumentsRequest,
      requestStream: false,
      responseType: EtfsResponse,
      responseStream: false,
      options: {},
    },
    /** Метод получения фьючерса по его идентификатору. */
    futureBy: {
      name: "FutureBy",
      requestType: InstrumentRequest,
      requestStream: false,
      responseType: FutureResponse,
      responseStream: false,
      options: {},
    },
    /** Метод получения списка фьючерсов. */
    futures: {
      name: "Futures",
      requestType: InstrumentsRequest,
      requestStream: false,
      responseType: FuturesResponse,
      responseStream: false,
      options: {},
    },
    /** Метод получения опциона по его идентификатору. */
    optionBy: {
      name: "OptionBy",
      requestType: InstrumentRequest,
      requestStream: false,
      responseType: OptionResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Deprecated Метод получения списка опционов.
     *
     * @deprecated
     */
    options: {
      name: "Options",
      requestType: InstrumentsRequest,
      requestStream: false,
      responseType: OptionsResponse,
      responseStream: false,
      options: {},
    },
    /** Метод получения списка опционов. */
    optionsBy: {
      name: "OptionsBy",
      requestType: FilterOptionsRequest,
      requestStream: false,
      responseType: OptionsResponse,
      responseStream: false,
      options: {},
    },
    /** Метод получения акции по её идентификатору. */
    shareBy: {
      name: "ShareBy",
      requestType: InstrumentRequest,
      requestStream: false,
      responseType: ShareResponse,
      responseStream: false,
      options: {},
    },
    /** Метод получения списка акций. */
    shares: {
      name: "Shares",
      requestType: InstrumentsRequest,
      requestStream: false,
      responseType: SharesResponse,
      responseStream: false,
      options: {},
    },
    /** Метод получения накопленного купонного дохода по облигации. */
    getAccruedInterests: {
      name: "GetAccruedInterests",
      requestType: GetAccruedInterestsRequest,
      requestStream: false,
      responseType: GetAccruedInterestsResponse,
      responseStream: false,
      options: {},
    },
    /** Метод получения размера гарантийного обеспечения по фьючерсам. */
    getFuturesMargin: {
      name: "GetFuturesMargin",
      requestType: GetFuturesMarginRequest,
      requestStream: false,
      responseType: GetFuturesMarginResponse,
      responseStream: false,
      options: {},
    },
    /** Метод получения основной информации об инструменте. */
    getInstrumentBy: {
      name: "GetInstrumentBy",
      requestType: InstrumentRequest,
      requestStream: false,
      responseType: InstrumentResponse,
      responseStream: false,
      options: {},
    },
    /** Метод для получения событий выплаты дивидендов по инструменту. */
    getDividends: {
      name: "GetDividends",
      requestType: GetDividendsRequest,
      requestStream: false,
      responseType: GetDividendsResponse,
      responseStream: false,
      options: {},
    },
    /** Метод получения актива по его идентификатору. */
    getAssetBy: {
      name: "GetAssetBy",
      requestType: AssetRequest,
      requestStream: false,
      responseType: AssetResponse,
      responseStream: false,
      options: {},
    },
    /** Метод получения списка активов. Метод работает для всех инструментов, за исключением срочных - опционов и фьючерсов. */
    getAssets: {
      name: "GetAssets",
      requestType: AssetsRequest,
      requestStream: false,
      responseType: AssetsResponse,
      responseStream: false,
      options: {},
    },
    /** Метод получения списка избранных инструментов. */
    getFavorites: {
      name: "GetFavorites",
      requestType: GetFavoritesRequest,
      requestStream: false,
      responseType: GetFavoritesResponse,
      responseStream: false,
      options: {},
    },
    /** Метод редактирования списка избранных инструментов. */
    editFavorites: {
      name: "EditFavorites",
      requestType: EditFavoritesRequest,
      requestStream: false,
      responseType: EditFavoritesResponse,
      responseStream: false,
      options: {},
    },
    /** Метод получения списка стран. */
    getCountries: {
      name: "GetCountries",
      requestType: GetCountriesRequest,
      requestStream: false,
      responseType: GetCountriesResponse,
      responseStream: false,
      options: {},
    },
    /** Метод поиска инструмента. */
    findInstrument: {
      name: "FindInstrument",
      requestType: FindInstrumentRequest,
      requestStream: false,
      responseType: FindInstrumentResponse,
      responseStream: false,
      options: {},
    },
    /** Метод получения списка брендов. */
    getBrands: {
      name: "GetBrands",
      requestType: GetBrandsRequest,
      requestStream: false,
      responseType: GetBrandsResponse,
      responseStream: false,
      options: {},
    },
    /** Метод получения бренда по его идентификатору. */
    getBrandBy: {
      name: "GetBrandBy",
      requestType: GetBrandRequest,
      requestStream: false,
      responseType: Brand,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface InstrumentsServiceImplementation<CallContextExt = {}> {
  /** Метод получения расписания торгов торговых площадок. */
  tradingSchedules(
    request: TradingSchedulesRequest,
    context: CallContext & CallContextExt,
  ): Promise<TradingSchedulesResponse>;
  /** Метод получения облигации по её идентификатору. */
  bondBy(request: InstrumentRequest, context: CallContext & CallContextExt): Promise<BondResponse>;
  /** Метод получения списка облигаций. */
  bonds(request: InstrumentsRequest, context: CallContext & CallContextExt): Promise<BondsResponse>;
  /** Метод получения графика выплат купонов по облигации. */
  getBondCoupons(
    request: GetBondCouponsRequest,
    context: CallContext & CallContextExt,
  ): Promise<GetBondCouponsResponse>;
  /** Метод получения валюты по её идентификатору. */
  currencyBy(request: InstrumentRequest, context: CallContext & CallContextExt): Promise<CurrencyResponse>;
  /** Метод получения списка валют. */
  currencies(request: InstrumentsRequest, context: CallContext & CallContextExt): Promise<CurrenciesResponse>;
  /** Метод получения инвестиционного фонда по его идентификатору. */
  etfBy(request: InstrumentRequest, context: CallContext & CallContextExt): Promise<EtfResponse>;
  /** Метод получения списка инвестиционных фондов. */
  etfs(request: InstrumentsRequest, context: CallContext & CallContextExt): Promise<EtfsResponse>;
  /** Метод получения фьючерса по его идентификатору. */
  futureBy(request: InstrumentRequest, context: CallContext & CallContextExt): Promise<FutureResponse>;
  /** Метод получения списка фьючерсов. */
  futures(request: InstrumentsRequest, context: CallContext & CallContextExt): Promise<FuturesResponse>;
  /** Метод получения опциона по его идентификатору. */
  optionBy(request: InstrumentRequest, context: CallContext & CallContextExt): Promise<OptionResponse>;
  /**
   * Deprecated Метод получения списка опционов.
   *
   * @deprecated
   */
  options(request: InstrumentsRequest, context: CallContext & CallContextExt): Promise<OptionsResponse>;
  /** Метод получения списка опционов. */
  optionsBy(request: FilterOptionsRequest, context: CallContext & CallContextExt): Promise<OptionsResponse>;
  /** Метод получения акции по её идентификатору. */
  shareBy(request: InstrumentRequest, context: CallContext & CallContextExt): Promise<ShareResponse>;
  /** Метод получения списка акций. */
  shares(request: InstrumentsRequest, context: CallContext & CallContextExt): Promise<SharesResponse>;
  /** Метод получения накопленного купонного дохода по облигации. */
  getAccruedInterests(
    request: GetAccruedInterestsRequest,
    context: CallContext & CallContextExt,
  ): Promise<GetAccruedInterestsResponse>;
  /** Метод получения размера гарантийного обеспечения по фьючерсам. */
  getFuturesMargin(
    request: GetFuturesMarginRequest,
    context: CallContext & CallContextExt,
  ): Promise<GetFuturesMarginResponse>;
  /** Метод получения основной информации об инструменте. */
  getInstrumentBy(request: InstrumentRequest, context: CallContext & CallContextExt): Promise<InstrumentResponse>;
  /** Метод для получения событий выплаты дивидендов по инструменту. */
  getDividends(request: GetDividendsRequest, context: CallContext & CallContextExt): Promise<GetDividendsResponse>;
  /** Метод получения актива по его идентификатору. */
  getAssetBy(request: AssetRequest, context: CallContext & CallContextExt): Promise<AssetResponse>;
  /** Метод получения списка активов. Метод работает для всех инструментов, за исключением срочных - опционов и фьючерсов. */
  getAssets(request: AssetsRequest, context: CallContext & CallContextExt): Promise<AssetsResponse>;
  /** Метод получения списка избранных инструментов. */
  getFavorites(request: GetFavoritesRequest, context: CallContext & CallContextExt): Promise<GetFavoritesResponse>;
  /** Метод редактирования списка избранных инструментов. */
  editFavorites(request: EditFavoritesRequest, context: CallContext & CallContextExt): Promise<EditFavoritesResponse>;
  /** Метод получения списка стран. */
  getCountries(request: GetCountriesRequest, context: CallContext & CallContextExt): Promise<GetCountriesResponse>;
  /** Метод поиска инструмента. */
  findInstrument(
    request: FindInstrumentRequest,
    context: CallContext & CallContextExt,
  ): Promise<FindInstrumentResponse>;
  /** Метод получения списка брендов. */
  getBrands(request: GetBrandsRequest, context: CallContext & CallContextExt): Promise<GetBrandsResponse>;
  /** Метод получения бренда по его идентификатору. */
  getBrandBy(request: GetBrandRequest, context: CallContext & CallContextExt): Promise<Brand>;
}

export interface InstrumentsServiceClient<CallOptionsExt = {}> {
  /** Метод получения расписания торгов торговых площадок. */
  tradingSchedules(
    request: TradingSchedulesRequest,
    options?: CallOptions & CallOptionsExt,
  ): Promise<TradingSchedulesResponse>;
  /** Метод получения облигации по её идентификатору. */
  bondBy(request: InstrumentRequest, options?: CallOptions & CallOptionsExt): Promise<BondResponse>;
  /** Метод получения списка облигаций. */
  bonds(request: InstrumentsRequest, options?: CallOptions & CallOptionsExt): Promise<BondsResponse>;
  /** Метод получения графика выплат купонов по облигации. */
  getBondCoupons(
    request: GetBondCouponsRequest,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetBondCouponsResponse>;
  /** Метод получения валюты по её идентификатору. */
  currencyBy(request: InstrumentRequest, options?: CallOptions & CallOptionsExt): Promise<CurrencyResponse>;
  /** Метод получения списка валют. */
  currencies(request: InstrumentsRequest, options?: CallOptions & CallOptionsExt): Promise<CurrenciesResponse>;
  /** Метод получения инвестиционного фонда по его идентификатору. */
  etfBy(request: InstrumentRequest, options?: CallOptions & CallOptionsExt): Promise<EtfResponse>;
  /** Метод получения списка инвестиционных фондов. */
  etfs(request: InstrumentsRequest, options?: CallOptions & CallOptionsExt): Promise<EtfsResponse>;
  /** Метод получения фьючерса по его идентификатору. */
  futureBy(request: InstrumentRequest, options?: CallOptions & CallOptionsExt): Promise<FutureResponse>;
  /** Метод получения списка фьючерсов. */
  futures(request: InstrumentsRequest, options?: CallOptions & CallOptionsExt): Promise<FuturesResponse>;
  /** Метод получения опциона по его идентификатору. */
  optionBy(request: InstrumentRequest, options?: CallOptions & CallOptionsExt): Promise<OptionResponse>;
  /**
   * Deprecated Метод получения списка опционов.
   *
   * @deprecated
   */
  options(request: InstrumentsRequest, options?: CallOptions & CallOptionsExt): Promise<OptionsResponse>;
  /** Метод получения списка опционов. */
  optionsBy(request: FilterOptionsRequest, options?: CallOptions & CallOptionsExt): Promise<OptionsResponse>;
  /** Метод получения акции по её идентификатору. */
  shareBy(request: InstrumentRequest, options?: CallOptions & CallOptionsExt): Promise<ShareResponse>;
  /** Метод получения списка акций. */
  shares(request: InstrumentsRequest, options?: CallOptions & CallOptionsExt): Promise<SharesResponse>;
  /** Метод получения накопленного купонного дохода по облигации. */
  getAccruedInterests(
    request: GetAccruedInterestsRequest,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetAccruedInterestsResponse>;
  /** Метод получения размера гарантийного обеспечения по фьючерсам. */
  getFuturesMargin(
    request: GetFuturesMarginRequest,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetFuturesMarginResponse>;
  /** Метод получения основной информации об инструменте. */
  getInstrumentBy(request: InstrumentRequest, options?: CallOptions & CallOptionsExt): Promise<InstrumentResponse>;
  /** Метод для получения событий выплаты дивидендов по инструменту. */
  getDividends(request: GetDividendsRequest, options?: CallOptions & CallOptionsExt): Promise<GetDividendsResponse>;
  /** Метод получения актива по его идентификатору. */
  getAssetBy(request: AssetRequest, options?: CallOptions & CallOptionsExt): Promise<AssetResponse>;
  /** Метод получения списка активов. Метод работает для всех инструментов, за исключением срочных - опционов и фьючерсов. */
  getAssets(request: AssetsRequest, options?: CallOptions & CallOptionsExt): Promise<AssetsResponse>;
  /** Метод получения списка избранных инструментов. */
  getFavorites(request: GetFavoritesRequest, options?: CallOptions & CallOptionsExt): Promise<GetFavoritesResponse>;
  /** Метод редактирования списка избранных инструментов. */
  editFavorites(request: EditFavoritesRequest, options?: CallOptions & CallOptionsExt): Promise<EditFavoritesResponse>;
  /** Метод получения списка стран. */
  getCountries(request: GetCountriesRequest, options?: CallOptions & CallOptionsExt): Promise<GetCountriesResponse>;
  /** Метод поиска инструмента. */
  findInstrument(
    request: FindInstrumentRequest,
    options?: CallOptions & CallOptionsExt,
  ): Promise<FindInstrumentResponse>;
  /** Метод получения списка брендов. */
  getBrands(request: GetBrandsRequest, options?: CallOptions & CallOptionsExt): Promise<GetBrandsResponse>;
  /** Метод получения бренда по его идентификатору. */
  getBrandBy(request: GetBrandRequest, options?: CallOptions & CallOptionsExt): Promise<Brand>;
}

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
