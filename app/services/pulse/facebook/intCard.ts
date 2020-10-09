import BadRequestException from "../../../exceptions/bad-request.exception";
import faker from "faker";
import { DateRange } from "../../../schema/common/Arguments";
import logger from "../../../helpers/logins/login.helper";
import { CardIdIntFbType } from "../../../schema/common/Enums";
import { readTopCall } from "./readTopCall";

//El uso de Faker es temportal hasta conectar a base de datos
export const intCardService = async (
  ctx,
  dateRange: DateRange,
  cardId: CardIdIntFbType
): Promise<Number> => {
  let data = await ctx.myCache.getItem(`${ctx.id}_readTop`);
  if (data) {
    logger.info(`Successfully obtained of cache: ${cardId}`);
    return data[cardId];
  } else {
    data = await readTopCall(dateRange, ctx);
    logger.info(`Successfully obtained: ${cardId}`);
    return data[cardId];
  }
  //if (cardId == "generalInt01") {
  // throw new InternalException("errorCode_dbError", [
  //   "Database connection problems ",
  // ]);
  //  return 1.2;
  //} else if (cardId == "generalInt02") {
  // throw new InternalException("errorCode_apiError", [
  //   "Error when transforming the data",
  // ]);
  //  return 7.5;
  //}
};
