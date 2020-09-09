import BadRequestException from "../../../exceptions/bad-request.exception";
import faker from "faker";
import { DateRange } from "../../../schema/common/Arguments";
import { CardIdStringFbType } from "../../../schema/common/Enums";
import logger from "../../../helpers/logins/login.helper";
import { readTopCall } from "./readTopCall";

//El uso de Faker es temportal hasta conectar a base de datos
export const stringCardService = async (
  ctx,
  dateRange: DateRange,
  cardId: CardIdStringFbType
): Promise<String> => {
  logger.info(`Getting values ​​for: ${cardId}`);
  let data = await ctx.myCache.getItem(`${ctx.id}_general`);
  if (data) {
    logger.info(`Successfully obtained of cache: ${cardId}`);
    return data[cardId];
  } else {
    data = await readTopCall(dateRange, ctx);
    logger.info(`Successfully obtained: ${cardId}`);
    return "Good";
  }
};
