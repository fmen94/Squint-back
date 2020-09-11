import BadRequestException from "../../../exceptions/bad-request.exception";
import faker from "faker";
import moment = require("moment");
import { DateRange } from "../../../schema/common/Arguments";
import { postFbIn } from "../../../interfaces/common";
import logger from "../../../helpers/logins/login.helper";
import { CardIdPostFbType } from "../../../schema/common/Enums";
import { postSectionCall } from "./postSection";

// postSectionCall
export const postCardService = async (
  ctx,
  dateRange: DateRange,
  cardId: CardIdPostFbType
): Promise<postFbIn[]> => {
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
