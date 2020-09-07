import BadRequestException from "../../../exceptions/bad-request.exception";
import faker from "faker";
import { DateRange } from "../../../schema/common/Arguments";
import logger from "../../../helpers/logins/login.helper";
import { CardIdIntFbType } from "../../../schema/common/Enums";
import { generalCall } from "./generalCall";

//El uso de Faker es temportal hasta conectar a base de datos
export const intCardService = async (
  ctx,
  dateRange: DateRange,
  cardId: CardIdIntFbType
): Promise<number> => {
  logger.info(`Getting values ​​for: ${cardId}`);
  let data = await ctx.myCache.getItem(`${ctx.id}_general`);
  if (data) {
    logger.info(`Successfully obtained of cache: ${cardId}`);
    return data[cardId];
  } else {
    data = await generalCall(dateRange.date, ctx);
    logger.info(`Successfully obtained: ${cardId}`);
    return data[cardId];
  }
};
