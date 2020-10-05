import { idListIn } from "./../../../interfaces/common/index";
import "reflect-metadata";
import { Resolver, FieldResolver, Ctx, Arg } from "type-graphql";
import { FacebookBench } from "../../../schema/bench/facebook/index";
import {
  CardIdTableBenchFbType,
  CardIdPrebsValuesBenchFbType,
  DataPrebsValuesBenchFbType,
  CardIdCompBenchFbType,
  DataCompBenchFbType,
  CardIdBubblesBenchFbType,
  CardIdlistBenchFbType,
  OrderType,
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

/**
 * Este Resolver Contiene todos los resolutores que se puden usar para Facebook pulse.
 */
@Resolver((of) => FacebookBench)
export class BenchFacebookResolver {
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
    return masterService("facebook", "bench", ctx, dateRange, cardId);
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
    @Arg("dataType", (type) => DataPrebsValuesBenchFbType, Options("fans"))
    dataType?: DataPrebsValuesBenchFbType
  ): Promise<kindNameValueIn[]> {
    return masterService("facebook", "bench", ctx, dateRange, cardId, [
      dataType,
    ]);
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
    @Arg("dataType", (type) => DataCompBenchFbType, Options("fans"))
    dataType?: DataCompBenchFbType
  ): Promise<nameValueDiffIn[]> {
    return masterService("facebook", "bench", ctx, dateRange, cardId, [
      dataType,
    ]);
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
    return masterService("facebook", "bench", ctx, dateRange, cardId);
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
    return masterService("facebook", "bench", ctx, dateRange, cardId, [order]);
  }
}
