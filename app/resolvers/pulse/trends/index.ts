import "reflect-metadata";
import { Resolver, FieldResolver, Ctx, Arg } from "type-graphql";
import { Trends } from "../../../schema/pulse/trends/index";
import {
  OrderType,
  CardIdIntTrType,
  CardIdSmallTrType,
  CardIdCompTrType,
  CardIdListPrevTrType,
  CardIdListTrType,
  CardIdGeoTrType,
} from "../../../schema/common/Enums";
import {
  DateEndOptions,
  CardIdIntOptions,
  OrderOptions,
  CardIdSmallTrOptions,
  CardIdCompTrOptions,
  CardIdListPrevTrOptions,
  CardIdListTrOptions,
  CardIdGeoTrOptions,
} from "../../../schema/common/Options";
import { intCardService } from "../../../services/pulse/trends/intCard";
import { DateRange } from "../../../schema/common/Arguments";
import { smallCardService } from "../../../services/pulse/trends/smallCard";
import { compCardService } from "../../../services/pulse/trends/compCard";
import { listPrevCardService } from "../../../services/pulse/trends/listPrevCard";
import { listCardService } from "../../../services/pulse/trends/listCard";
import {
  kindValueIn,
  nameValueDiffIn,
  smailCardIn,
  geoCardIn,
} from "../../../interfaces/common";
import { geoCardService } from "../../../services/pulse/trends/geoCard";

/**
 * Este Resolver Contiene todos los resolutores que se puden usar para trends pulse.
 */
@Resolver((of) => Trends)
export class PulseTrendsResolver {
  /**
   * Resolver de este tipo de card de solo un valor
   * @param ctx
   * @param dateRange
   * @param cardId
   * @returns Number
   */
  @FieldResolver()
  intCard(
    @Ctx() ctx: any,
    @Arg("dateRange", DateEndOptions) dateRange?: DateRange,
    @Arg("cardId", (type) => CardIdIntTrType, CardIdIntOptions)
    cardId?: CardIdIntTrType
  ): Number {
    return intCardService(ctx, dateRange, cardId);
  }

  /**
   * Resolver de este tipo de card retorna un valor y su diferencia contra el periodo de tiempo enterior ademas de un arreglo de fecha valor
   * @param ctx
   * @param dateRange
   * @param cardId
   * @returns smailCardIn
   */
  @FieldResolver()
  smallCard(
    @Ctx() ctx: any,
    @Arg("dateRange", DateEndOptions) dateRange?: DateRange,
    @Arg("cardId", (type) => CardIdSmallTrType, CardIdSmallTrOptions)
    cardId?: CardIdSmallTrType
  ): smailCardIn {
    return smallCardService(ctx, dateRange, cardId);
  }
  /**
   * Resolver de este tipo de card retorna un arreglo de valor y su diferencia contra el periodo de tiempo enterior y su nombre
   * @param ctx
   * @param dateRange
   * @param cardId
   * @returns nameValueDiffIn []
   */
  @FieldResolver()
  compCard(
    @Ctx() ctx: any,
    @Arg("dateRange", DateEndOptions) dateRange?: DateRange,
    @Arg("cardId", (type) => CardIdCompTrType, CardIdCompTrOptions)
    cardId?: CardIdCompTrType
  ): nameValueDiffIn[] {
    return compCardService(ctx, dateRange, cardId);
  }

  /**
   * Resolver de este tipo de card retorna un arreglo de nombre valor y la deferencia
   * @param ctx
   * @param dateRange
   * @param cardId
   * @returns nameValueDiffIn []
   */
  @FieldResolver()
  listPrevCard(
    @Ctx() ctx: any,
    @Arg("order", (type) => OrderType, OrderOptions) order?: OrderType,
    @Arg("dateRange", DateEndOptions) dateRange?: DateRange,
    @Arg("cardId", (type) => CardIdListPrevTrType, CardIdListPrevTrOptions)
    cardId?: CardIdListPrevTrType
  ): nameValueDiffIn[] {
    return listPrevCardService(ctx, dateRange, cardId, order);
  }
  /**
   * Resolver de este tipo de card retorna un arreglo de nombre valor
   * @param ctx
   * @param dateRange
   * @param cardId
   * @returns kindValueIn []
   */
  @FieldResolver()
  listCard(
    @Ctx() ctx: any,
    @Arg("order", (type) => OrderType, OrderOptions) order?: OrderType,
    @Arg("dateRange", DateEndOptions) dateRange?: DateRange,
    @Arg("cardId", (type) => CardIdListTrType, CardIdListTrOptions)
    cardId?: CardIdListTrType
  ): kindValueIn[] {
    return listCardService(ctx, dateRange, cardId, order);
  }
  @FieldResolver()
  geoCard(
    @Ctx() ctx: any,
    @Arg("dateRange", DateEndOptions) dateRange?: DateRange,
    @Arg("cardId", (type) => CardIdGeoTrType, CardIdGeoTrOptions)
    cardId?: CardIdGeoTrType
  ): geoCardIn[] {
    return geoCardService(ctx, dateRange, cardId);
  }
}
