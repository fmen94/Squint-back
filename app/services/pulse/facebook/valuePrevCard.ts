import BadRequestException from "../../../exceptions/bad-request.exception";
import { DateRange } from "../../../schema/common/Arguments";
import { valueDiffIn } from "../../../interfaces/common";
import logger from "../../../helpers/logins/login.helper";
import { CardIdValuePrevFbType } from "../../../schema/common/Enums";
import { readTopCall } from "./readTopCall";
import { readDetailsCall } from "./readDetails";

export const valuePrevCardService = async (
  ctx,
  dateRange: DateRange,
  cardId: CardIdValuePrevFbType
): Promise<valueDiffIn> => {
  logger.info(`Getting values ​​for: ${cardId}`);
  /**
   * Prueba
   */
  if (
    cardId == "generalValuePrev02" ||
    cardId == "communityValuePrev01" ||
    cardId == "communityValuePrev04"
  ) {
    let data = await ctx.myCache.getItem(`${ctx.id}_readDetails`);
    if (data) {
      logger.info(`Successfully obtained of cache: ${cardId}`);
      return data[cardId];
    } else {
      data = await readDetailsCall(dateRange.date, ctx);
      logger.info(`Successfully obtained: ${cardId}`);
      return data[cardId];
    }
  } else {
    let data = await ctx.myCache.getItem(`${ctx.id}_readTop`);
    if (data) {
      logger.info(`Successfully obtained of cache: ${cardId}`);
      return data[cardId];
    } else {
      data = await readTopCall(dateRange, ctx);
      logger.info(`Successfully obtained: ${cardId}`);
      return data[cardId];
    }
  }

  /**
   * final de la prueba
   */
};
