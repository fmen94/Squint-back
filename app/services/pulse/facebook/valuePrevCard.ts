import BadRequestException from "../../../exceptions/bad-request.exception";
import { DateRange } from "../../../schema/common/Arguments";
import { valueDiffIn } from "../../../interfaces/common";
import logger from "../../../helpers/logins/login.helper";
import { CardIdValuePrevFbType } from "../../../schema/common/Enums";
import { generalCall } from "./generalCall";
import { communityDateCall } from "./communityDates";

//const myCache = new ExpirationStrategy(new MemoryStorage());
//El uso de Faker es temportal hasta conectar a base de datos
export const valuePrevCardService = async (
  ctx,
  dateRange: DateRange,
  cardId: CardIdValuePrevFbType
): Promise<valueDiffIn> => {
  logger.info(`Getting values ​​for: ${cardId}`);
  /**
   * Prueba
   */
  if (cardId.includes("general")) {
    let data = await ctx.myCache.getItem(`${ctx.id}_general`);
    if (data) {
      logger.info(`Successfully obtained of cache: ${cardId}`);
      return data[cardId];
    } else {
      data = await generalCall(dateRange.date, ctx);
      logger.info(`Successfully obtained: ${cardId}`);
      return data[cardId];
    }
  } else if (cardId.includes("community")) {
    let data = await ctx.myCache.getItem(`${ctx.id}_communityDate`);
    if (data) {
      logger.info(`Successfully obtained of cache: ${cardId}`);
      return data[cardId];
    } else {
      data = await communityDateCall(dateRange.date, ctx);
      logger.info(`Successfully obtained: ${cardId}`);
      return data[cardId];
    }
  }

  /**
   * final de la prueba
   */
};
