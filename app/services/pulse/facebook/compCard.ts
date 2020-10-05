import BadRequestException from "../../../exceptions/bad-request.exception";

import { xlabels } from "../../../helpers/xlabels";
import { DateRange } from "../../../schema/common/Arguments";
import { nameValueDiffIn } from "../../../interfaces/common";
import logger from "../../../helpers/logins/login.helper";
import { CardIdCompFbType, dataCompType } from "../../../schema/common/Enums";
import { readTopCall } from "./readTopCall";

export const compCardService = async (
  ctx,
  dateRange: DateRange,
  cardId: CardIdCompFbType,
  type: dataCompType
): Promise<nameValueDiffIn[]> => {
  logger.info(`Getting values ​​for: ${cardId}`);
  let data = await ctx.myCache.getItem(`${ctx.id}_readTop`);
  if (data) {
    logger.info(`Successfully obtained of cache: ${cardId}`);
    return data["comparation"][type];
  } else {
    data = await readTopCall(dateRange, ctx);
    logger.info(`Successfully obtained: ${cardId}`);
    return data["comparation"][type];
  }
};
