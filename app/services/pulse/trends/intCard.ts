import BadRequestException from "../../../exceptions/bad-request.exception";
import faker from "faker";
import { DateRange } from "../../../schema/common/Arguments";
import logger from "../../../helpers/logins/login.helper";
import { CardIdIntTrType } from "../../../schema/common/Enums";

//El uso de Faker es temportal hasta conectar a base de datos
export const intCardService = (
  ctx,
  dateRange: DateRange,
  cardId: CardIdIntTrType
): number => {
  logger.info(`Getting values ​​for: ${cardId}`);
  logger.info(`Successfully obtained: ${cardId}`);
  return faker.random.number();
};
