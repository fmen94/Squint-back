import { News } from "./../../../schema/pulse/news/index";
import "reflect-metadata";
import { Resolver, FieldResolver, Ctx, Arg } from "type-graphql";
import {
  CardIdStringNwType,
  CardIdPostNwType,
} from "../../../schema/common/Enums";
import {
  DateEndOptions,
  CardIdStringNwOptions,
  CardIdPostNwOptions,
} from "../../../schema/common/Options";
import { DateRange } from "../../../schema/common/Arguments";
import { stringCardService } from "../../../services/pulse/news/stringCard";
import { postCardService } from "../../../services/pulse/news/postCard";
import { postNwIn } from "../../../interfaces/common";
/**
 * Este Resolver Contiene todos los resolutores que se puden usar para Facebook pulse.
 */
@Resolver((of) => News)
export class PulseNewsResolver {
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
    @Arg("cardId", (type) => CardIdStringNwType, CardIdStringNwOptions)
    cardId?: CardIdStringNwType
  ): String {
    return stringCardService(ctx, dateRange, cardId);
  }

  /**
   * Resolver de este tipo de card retorna un arreglo de Post
   * @param ctx
   * @param dateRange
   * @param cardId
   * @returns postNwIn []
   */
  @FieldResolver()
  postCard(
    @Ctx() ctx: any,
    @Arg("dateRange", DateEndOptions) dateRange?: DateRange,
    @Arg("cardId", (type) => CardIdPostNwType, CardIdPostNwOptions)
    cardId?: CardIdPostNwType
  ): postNwIn[] {
    return postCardService(ctx, dateRange, cardId);
  }
}
