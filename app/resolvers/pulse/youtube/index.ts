import "reflect-metadata";
import { Resolver, FieldResolver, Ctx, Arg } from "type-graphql";
import { Youtube } from "../../../schema/pulse/youtube/index";
import {
  CardIdIntFbType,
  CardIdStringFbType,
  CardIdValuePrevFbType,
  CardIdListFbType,
  CardIdListPrevFbType,
  CardIdDonutFbType,
  CardIdBarFbType,
  CardIdCompFbType,
  CardIdSmallFbType,
  CardIdTableFbType,
  CardIdBubblesFbType,
  CardIdPostFbType,
  CardIdTitleTextFbType,
  CardIdGeoFbType,
  OrderType,
  desktopYtType,
  dataCompType,
} from "../../../schema/common/Enums";
import {
  DateEndOptions,
  CardIdIntOptions,
  CardIdStringOptions,
  CardIdValuePrevOptions,
  CardIdDonutOptions,
  CardIdBarOptions,
  CardIdCompOptions,
  CardIdSmallOptions,
  CardIdListPrevOptions,
  CardIdListOptions,
  CardIdTableOptions,
  CardIdBubblesOptions,
  CardIdPostOptions,
  CardIdtitleTextOptions,
  CardIdGeoOptions,
  OrderOptions,
  desktopOptions,
  DataCompOptions,
} from "../../../schema/common/Options";
import { intCardService } from "../../../services/pulse/facebook/intCard";
import { DateRange } from "../../../schema/common/Arguments";
import { stringCardService } from "../../../services/pulse/facebook/stringCard";
import { valuePrevCardService } from "../../../services/pulse/facebook/valuePrevCard";
import { smallCardService } from "../../../services/pulse/facebook/smallCard";
import { compCardService } from "../../../services/pulse/facebook/compCard";
import { barCardService } from "../../../services/pulse/facebook/barCard";
import { donutDetailCardService } from "../../../services/pulse/facebook/donutDetailCard";
import { listPrevCardService } from "../../../services/pulse/facebook/listPrevCard";
import { listCardService } from "../../../services/pulse/facebook/listCard";
import { bubblesService } from "../../../services/pulse/facebook/bubbleCards";
import { tableCardService } from "../../../services/pulse/facebook/tableCard";
import { postCardService } from "../../../services/pulse/youtube/postCard";
import { titleTextCardService } from "../../../services/pulse/facebook/titleTextCard";
import { kindIntValues } from "../../../schema/common/Common";
import {
  donutDetailIn,
  kindDateValueIn,
  kindIntValuesIn,
  kindNameValueIn,
  kindValueIn,
  nameValueDiffIn,
  postFbIn,
  smailCardIn,
  titleTextIn,
  valueDiffIn,
  geoCardIn,
  desktopIn,
  postYtIn,
} from "../../../interfaces/common";
import { geoCardService } from "../../../services/pulse/facebook/geoCard";
import { desktopService } from "../../../services/pulse/youtube/desktopCard";
import { masterService } from "../../../services";

const network = "youtube";
const chanel = "pulse";
/**
 * Este Resolver Contiene todos los resolutores que se puden usar para Facebook pulse.
 */
@Resolver((of) => Youtube)
export class PulseYoutubeResolver {
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
    @Arg("cardId", (type) => CardIdIntFbType, CardIdIntOptions)
    cardId?: CardIdIntFbType
  ): Promise<Number> {
    return masterService(network, chanel, ctx, dateRange, cardId);
  }
  /**
   * Resolver de este tipo de card de solo un valor en texto
   * @param ctx
   * @param dateRange
   * @param cardId
   * @returns String
   */
  @FieldResolver()
  stringCard(
    @Ctx() ctx: any,
    @Arg("dateRange", DateEndOptions) dateRange?: DateRange,
    @Arg("cardId", (type) => CardIdStringFbType, CardIdStringOptions)
    cardId?: CardIdStringFbType
  ): Promise<String> {
    return masterService(network, chanel, ctx, dateRange, cardId);
  }
  /**
   * Resolver de este tipo de card retorna un valor y su diferencia contra el periodo de tiempo enterior
   * @param ctx
   * @param dateRange
   * @param cardId
   * @returns valueDiffIn
   */
  @FieldResolver()
  valuePrevCard(
    @Ctx() ctx: any,
    @Arg("dateRange", DateEndOptions) dateRange?: DateRange,
    @Arg("cardId", (type) => CardIdValuePrevFbType, CardIdValuePrevOptions)
    cardId?: CardIdValuePrevFbType
  ): Promise<valueDiffIn> {
    return masterService(network, chanel, ctx, dateRange, cardId);
  }
  /**
   * Resolver de este tipo de card retorna un valor y su diferencia contra el periodo de tiempo enterior ademas de un arreglo de fecha valor
   * @param ctx
   * @param dateRange
   * @param cardId
   * @returns Promise<smailCardIn>
   */
  @FieldResolver()
  smallCard(
    @Ctx() ctx: any,
    @Arg("dateRange", DateEndOptions) dateRange?: DateRange,
    @Arg("cardId", (type) => CardIdSmallFbType, CardIdSmallOptions)
    cardId?: CardIdSmallFbType
  ): Promise<smailCardIn> {
    return masterService(network, chanel, ctx, dateRange, cardId);
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
    @Arg("cardId", (type) => CardIdCompFbType, CardIdCompOptions)
    cardId?: CardIdCompFbType,
    @Arg("dataType", (type) => dataCompType, DataCompOptions)
    dataType?: dataCompType
  ): Promise<nameValueDiffIn[]> {
    return masterService(network, chanel, ctx, dateRange, cardId, [dataType]);
  }
  /**
   * Resolver de este tipo de card retorna un arreglo de kind y un valuesArray que es un arreglo de numeros
   * @param ctx
   * @param dateRange
   * @param cardId
   * @returns kindIntValuesIn []
   */
  @FieldResolver()
  barCard(
    @Ctx() ctx: any,
    @Arg("dateRange", DateEndOptions) dateRange?: DateRange,
    @Arg("cardId", (type) => CardIdBarFbType, CardIdBarOptions)
    cardId?: CardIdBarFbType
  ): Promise<kindIntValuesIn[]> {
    return masterService(network, chanel, ctx, dateRange, cardId);
  }
  /**
   * Resolver de este tipo de card retorna un titulo , subtitulo, texto y un arreglo  de Kind values
   * @param ctx
   * @param dateRange
   * @param cardId
   * @returns donutDetailIn
   */
  @FieldResolver()
  donutDetailCard(
    @Ctx() ctx: any,
    @Arg("dateRange", DateEndOptions) dateRange?: DateRange,
    @Arg("cardId", (type) => CardIdDonutFbType, CardIdDonutOptions)
    cardId?: CardIdDonutFbType
  ): Promise<donutDetailIn> {
    return masterService(network, chanel, ctx, dateRange, cardId);
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
    @Arg("cardId", (type) => CardIdListPrevFbType, CardIdListPrevOptions)
    cardId?: CardIdListPrevFbType
  ): Promise<nameValueDiffIn[]> {
    return masterService(network, chanel, ctx, dateRange, cardId, [order]);
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
    @Arg("cardId", (type) => CardIdListFbType, CardIdListOptions)
    cardId?: CardIdListFbType
  ): Promise<kindValueIn[]> {
    return masterService(network, chanel, ctx, dateRange, cardId, [order]);
  }
  /**
   * Resolver de este tipo de card retorna un arreglo en 3 dimenciones de nombre valor y kind
   * @param ctx
   * @param dateRange
   * @param cardId
   * @returns kindNameValueIn [][][]
   */
  @FieldResolver()
  tableCard(
    @Ctx() ctx: any,
    @Arg("dateRange", DateEndOptions) dateRange?: DateRange,
    @Arg("cardId", (type) => CardIdTableFbType, CardIdTableOptions)
    cardId?: CardIdTableFbType
  ): Promise<kindNameValueIn[][][]> {
    return masterService(network, chanel, ctx, dateRange, cardId);
  }
  /**
   * Resolver de este tipo de card retorna un arreglo en 3 dimenciones de nombre valor y kind
   * @param ctx
   * @param dateRange
   * @param cardId
   * @returns kindDateValueIn []
   */
  @FieldResolver()
  bubblesCard(
    @Ctx() ctx: any,
    @Arg("dateRange", DateEndOptions) dateRange?: DateRange,
    @Arg("cardId", (type) => CardIdBubblesFbType, CardIdBubblesOptions)
    cardId?: CardIdBubblesFbType
  ): Promise<kindDateValueIn[]> {
    return masterService(network, chanel, ctx, dateRange, cardId);
  }
  /**
   * Resolver de este tipo de card retorna un arreglo de Post
   * @param ctx
   * @param dateRange
   * @param cardId
   * @returns postFbIn []
   */
  @FieldResolver()
  postCard(
    @Ctx() ctx: any,
    @Arg("dateRange", DateEndOptions) dateRange?: DateRange,
    @Arg("cardId", (type) => CardIdPostFbType, CardIdPostOptions)
    cardId?: CardIdPostFbType
  ): Promise<postYtIn[]> {
    return masterService(network, chanel, ctx, dateRange, cardId);
  }
  /**
   * Resolver de este tipo de card retorna un title text
   * @param ctx
   * @param dateRange
   * @param cardId
   * @returns titleTextIn
   */
  @FieldResolver()
  titleTextCard(
    @Ctx() ctx: any,
    @Arg("dateRange", DateEndOptions) dateRange?: DateRange,
    @Arg("cardId", (type) => CardIdTitleTextFbType, CardIdtitleTextOptions)
    cardId?: CardIdTitleTextFbType
  ): Promise<titleTextIn> {
    return masterService(network, chanel, ctx, dateRange, cardId);
  }
  @FieldResolver()
  geoCard(
    @Ctx() ctx: any,
    @Arg("dateRange", DateEndOptions) dateRange?: DateRange,
    @Arg("cardId", (type) => CardIdGeoFbType, CardIdGeoOptions)
    cardId?: CardIdGeoFbType
  ): Promise<geoCardIn[]> {
    return masterService(network, chanel, ctx, dateRange, cardId);
  }
  @FieldResolver()
  desktopCard(
    @Ctx() ctx: any,
    @Arg("dateRange", DateEndOptions) dateRange?: DateRange,
    @Arg("cardId", (type) => desktopYtType, desktopOptions)
    cardId?: desktopYtType
  ): Promise<desktopIn[]> {
    return masterService(network, chanel, ctx, dateRange, cardId);
  }
}
