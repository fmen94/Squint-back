import BadRequestException from "../../../exceptions/bad-request.exception";
import faker from "faker";
import { xlabels } from "../../../helpers/xlabels";
import { DateRange } from "../../../schema/common/Arguments";
import { nameValueDiffIn } from "../../../interfaces/common";
import logger from "../../../helpers/logins/login.helper";
import { CardIdCompFbType } from "../../../schema/common/Enums";
import { communityDateCall } from "./communityDates";

//El uso de Faker es temportal hasta conectar a base de datos
export const compCardService = async (
  ctx,
  dateRange: DateRange,
  cardId: CardIdCompFbType
): Promise<nameValueDiffIn[]> => {
  logger.info(`Getting values ​​for: ${cardId}`);
  let data = await ctx.myCache.getItem(`${ctx.id}_communityDate`);
  if (data) {
    logger.info(`Successfully obtained of cache: ${cardId}`);
    return data[cardId];
  } else {
    data = await communityDateCall(dateRange.date, ctx);
    logger.info(`Successfully obtained: ${cardId}`);
    return data[cardId];
  }
};
