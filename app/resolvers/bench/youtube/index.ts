import { idListIn } from "../../../interfaces/common/index";
import "reflect-metadata";
import { Resolver, FieldResolver, Ctx, Arg } from "type-graphql";
import {
  CardIdTableBenchFbType,
  CardIdPrebsValuesBenchFbType,
  CardIdCompBenchFbType,
  CardIdBubblesBenchFbType,
  CardIdlistBenchFbType,
  OrderType,
  DataCompBenchYtType,
  DataPrebsValuesBenchYtType,
} from "../../../schema/common/Enums";
import {
  DateEndOptions,
  Options,
  SetDataOptions,
} from "../../../schema/common/Options";
import { DateRange, DataOptions } from "../../../schema/common/Arguments";
import {
  kindDateValueIn,
  kindNameValueIn,
  nameValueDiffIn,
} from "../../../interfaces/common";
import { masterService } from "../../../services/index";
import { YoutubeBench } from "../../../schema/bench/youtube";

/**
 * Este Resolver Contiene todos los resolutores que se puden usar para Facebook pulse.
 */
const network = "youtube";
const chanel = "bench";
@Resolver((of) => YoutubeBench)
export class BenchYoutubeResolver {
  /**
   *
   * @param ctx
   * @param dateRange
   * @param cardId
   * @returns kindNameValueIn [][][]
   */
  @FieldResolver()
  tableCard(
    @Ctx() ctx: any,
    @Arg("dateRange", DateEndOptions) dateRange?: DateRange,
    @Arg("cardId", (type) => CardIdTableBenchFbType, Options("generalTable01"))
    cardId?: CardIdTableBenchFbType
  ): Promise<kindNameValueIn[][][]> {
    return masterService(network, chanel, ctx, dateRange, cardId);
  }
  /**
   *
   * @param ctx
   * @param dateRange
   * @param cardId
   * @param type
   * @returns kindNameValueIn []
   */
  @FieldResolver()
  prebsValuesCard(
    @Ctx() ctx: any,
    @Arg("dateRange", DateEndOptions) dateRange?: DateRange,
    @Arg(
      "cardId",
      (type) => CardIdPrebsValuesBenchFbType,
      Options("activityPrevsValues01")
    )
    cardId?: CardIdPrebsValuesBenchFbType,
    @Arg(
      "dataType",
      (type) => DataPrebsValuesBenchYtType,
      Options("suscribers")
    )
    dataType?: DataPrebsValuesBenchYtType
  ): Promise<kindNameValueIn[]> {
    return masterService(network, chanel, ctx, dateRange, cardId, [dataType]);
  }
  /**
   *
   * @param ctx
   * @param dateRange
   * @param cardId
   * @param type
   * @returns nameValueDiff []
   */
  @FieldResolver()
  compCard(
    @Ctx() ctx: any,
    @Arg("dateRange", DateEndOptions) dateRange?: DateRange,
    @Arg("cardId", (type) => CardIdCompBenchFbType, Options("activityCopm01"))
    cardId?: CardIdCompBenchFbType,
    @Arg("dataType", (type) => DataCompBenchYtType, Options("suscribers"))
    dataType?: DataCompBenchYtType
  ): Promise<nameValueDiffIn[]> {
    return masterService(network, chanel, ctx, dateRange, cardId, [dataType]);
  }
  /**
   *
   * @param ctx
   * @param dateRange
   * @param cardId
   * @returns kindDateValueIn []
   */
  @FieldResolver()
  bubblesCard(
    @Ctx() ctx: any,
    @Arg("dateRange", DateEndOptions) dateRange?: DateRange,
    @Arg(
      "cardId",
      (type) => CardIdBubblesBenchFbType,
      Options("affinityBubbles01")
    )
    cardId?: CardIdBubblesBenchFbType
  ): Promise<kindDateValueIn[]> {
    return masterService(network, chanel, ctx, dateRange, cardId);
  }
  /**
   *
   * @param ctx
   * @param dateRange
   * @param cardId
   * @param order
   * @returns idListIn []
   */
  @FieldResolver()
  listCard(
    @Ctx() ctx: any,
    @Arg("order", (type) => OrderType, Options("ASC")) order?: OrderType,
    @Arg("dateRange", DateEndOptions) dateRange?: DateRange,
    //@Arg("dataOptions", SetDataOptions) dataOptions?: DataOptions,
    @Arg("cardId", (type) => CardIdlistBenchFbType, Options("contentList01"))
    cardId?: CardIdlistBenchFbType
  ): Promise<idListIn[]> {
    return masterService(network, chanel, ctx, dateRange, cardId, [order]);
  }
}
