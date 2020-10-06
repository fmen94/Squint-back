import BadRequestException from "../../../exceptions/bad-request.exception";
import faker from "faker";
import { DateRange } from "../../../schema/common/Arguments";
import { titleTextIn } from "../../../interfaces/common";
import logger from "../../../helpers/logins/login.helper";
import { CardIdTitleTextFbType } from "../../../schema/common/Enums";
import { bestMomentsCall } from "./bestMoments";

//El uso de Faker es temportal hasta conectar a base de datos
export const titleTextCardService = async (
  ctx,
  dateRange: DateRange,
  cardId: CardIdTitleTextFbType
): Promise<titleTextIn> => {
  logger.info(`Getting values ​​for: ${cardId}`);
  let data = await ctx.myCache.getItem(`${ctx.id}_bestMoments`);
  if (data) {
    logger.info(`Successfully obtained of cache: ${cardId}`);
    return data[cardId];
  } else {
    data = await bestMomentsCall(dateRange, ctx);
    logger.info(`Successfully obtained: ${cardId}`);
    return data[cardId];
  }
};
