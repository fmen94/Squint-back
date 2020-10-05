import BadRequestException from "../../../exceptions/bad-request.exception";
import faker from "faker";
import { DateRange } from "../../../schema/common/Arguments";
import logger from "../../../helpers/logins/login.helper";
import { CardIdIntFbType } from "../../../schema/common/Enums";
import { readDetailsCall } from "./readDetails";

//El uso de Faker es temportal hasta conectar a base de datos
export const intCardService = (
  ctx,
  dateRange: DateRange,
  cardId: CardIdIntFbType
): /*Promise<*/ Number => {
  logger.info(`Getting values ​​for: ${cardId}`);
  // let data = await ctx.myCache.getItem(`${ctx.id}_readDetails`);
  // if (data) {
  //   logger.info(`Successfully obtained of cache: ${cardId}`);
  //   return data[cardId];
  // } else {
  // data = await readDetailsCall(dateRange, ctx);
  //   logger.info(`Successfully obtained: ${cardId}`);
  //   return 123;
  // }
  if (cardId == "generalInt01") {
    return 1.2;
  } else if (cardId == "generalInt02") {
    return 7.5;
  }
};
