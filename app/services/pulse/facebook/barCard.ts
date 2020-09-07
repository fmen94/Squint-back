import BadRequestException from "../../../exceptions/bad-request.exception";
import faker from "faker";
import { DateRange } from "../../../schema/common/Arguments";
import { kindIntValuesIn } from "../../../interfaces/common";
import logger from "../../../helpers/logins/login.helper";
import { CardIdBarFbType } from "../../../schema/common/Enums";
import { communityGenderCall } from "./communityGender";

//El uso de Faker es temportal hasta conectar a base de datos
export const barCardService = async (
  ctx,
  dateRange: DateRange,
  cardId: CardIdBarFbType
): Promise<kindIntValuesIn[]> => {
  logger.info(`Getting values ​​for: ${cardId}`);
  let data = await ctx.myCache.getItem(`${ctx.id}_communityGender`);
  if (data) {
    logger.info(`Successfully obtained of cache: ${cardId}`);
    return data[cardId];
  } else {
    data = await communityGenderCall(dateRange.date, ctx);
    logger.info(`Successfully obtained: ${cardId}`);
    return data[cardId];
  }
};
