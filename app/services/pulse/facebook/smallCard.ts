import BadRequestException from "../../../exceptions/bad-request.exception";
import faker from "faker";
import moment = require("moment");
import { DateRange } from "../../../schema/common/Arguments";
import { smailCardIn } from "../../../interfaces/common";
import logger from "../../../helpers/logins/login.helper";
import { CardIdSmallFbType } from "../../../schema/common/Enums";
import { readTopCall } from "./readTopCall";

//El uso de Faker es temportal hasta conectar a base de datos
export const smallCardService = async (
  ctx,
  dateRange: DateRange,
  cardId: CardIdSmallFbType
): Promise<smailCardIn> => {
  logger.info(`Getting values ​​for: ${cardId}`);
  let data = await ctx.myCache.getItem(`${ctx.id}_readTop`);
  if (data) {
    logger.info(`Successfully obtained of cache: ${cardId}`);
    return data[cardId];
  } else {
    data = await readTopCall(dateRange, ctx);
    logger.info(`Successfully obtained: ${cardId}`);
    return data[cardId];
  }
};
