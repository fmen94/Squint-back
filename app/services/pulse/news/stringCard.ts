import BadRequestException from "../../../exceptions/bad-request.exception";
import faker from "faker";
import { DateRange } from "../../../schema/common/Arguments";
import { CardIdStringNwType } from "../../../schema/common/Enums";
import logger from "../../../helpers/logins/login.helper";

//El uso de Faker es temportal hasta conectar a base de datos
export const stringCardService = (
  ctx,
  dateRange: DateRange,
  cardId: CardIdStringNwType
): String => {
  logger.info(`Getting values ​​for: ${cardId}`);
  const regex = /{{status}}/g;
  let status = "feliz";
  // let query = config[cardId].replace(regex, status);
  logger.debug(dateRange);

  logger.info(`Successfully obtained: ${cardId}`);
  return faker.lorem.word();
};
