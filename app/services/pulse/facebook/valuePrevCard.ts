import BadRequestException from "../../../exceptions/bad-request.exception";
import faker from "faker";
import { DateRange } from "../../../schema/common/Arguments";
import { valueDiffIn } from "../../../interfaces/common";
import logger from "../../../helpers/logins/login.helper";
import { CardIdValuePrevFbType } from "../../../schema/common/Enums";

//El uso de Faker es temportal hasta conectar a base de datos
export const valuePrevCardService = (
  ctx,
  dateRange: DateRange,
  cardId: CardIdValuePrevFbType
): valueDiffIn => {
  logger.info(`Getting values ​​for: ${cardId}`);
  logger.info(`Successfully obtained: ${cardId}`);
  return {
    value: faker.random.number(),
    diff: faker.random.number(),
  };
};
