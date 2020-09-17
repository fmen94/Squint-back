import BadRequestException from "../../../exceptions/bad-request.exception";
import faker from "faker";
import moment = require("moment");
import { DateRange } from "../../../schema/common/Arguments";
import { kindNameValueIn } from "../../../interfaces/common";
import logger from "../../../helpers/logins/login.helper";
import { CardIdTableFbType } from "../../../schema/common/Enums";
import { postSectionCall } from "./postSection";

//El uso de Faker es temportal hasta conectar a base de datos
export const tableCardService = async (
  ctx,
  dateRange: DateRange,
  cardId: CardIdTableFbType
): Promise<kindNameValueIn[][][]> => {
  logger.info(`Getting values ​​for: ${cardId}`);
  let data = await ctx.myCache.getItem(`${ctx.id}_postSection`);
  if (data) {
    logger.info(`Successfully obtained of cache: ${cardId}`);
    return data[cardId];
  } else {
    data = await postSectionCall(1, ctx);
    logger.info(`Successfully obtained: ${cardId}`);
    return data[cardId];
  }
};
