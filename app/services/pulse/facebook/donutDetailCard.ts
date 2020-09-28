import BadRequestException from "../../../exceptions/bad-request.exception";
import faker from "faker";
import { DateRange } from "../../../schema/common/Arguments";
import { donutDetailIn, kindValueIn } from "../../../interfaces/common";
import logger from "../../../helpers/logins/login.helper";
import { CardIdDonutFbType } from "../../../schema/common/Enums";
import { sourseValueCall } from "./sourseValue";

//El uso de Faker es temportal hasta conectar a base de datos
export const donutDetailCardService = async (
  ctx,
  dateRange: DateRange,
  cardId: CardIdDonutFbType
): Promise<donutDetailIn> => {
  logger.info(`Getting values ​​for: ${cardId}`);
  let data = await ctx.myCache.getItem(`${ctx.id}_sourseValue`);
  if (data) {
    logger.info(`Successfully obtained of cache: ${cardId}`);
    return data[cardId];
  } else {
    data = await sourseValueCall(dateRange, ctx);
    logger.info(`Successfully obtained: ${cardId}`);
    return data[cardId];
  }
};
