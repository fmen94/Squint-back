import BadRequestException from "../../../exceptions/bad-request.exception";
import faker from "faker";
import { DateRange } from "../../../schema/common/Arguments";
import { titleTextIn } from "../../../interfaces/common";
import logger from "../../../helpers/logins/login.helper";
import { CardIdTitleTextFbType } from "../../../schema/common/Enums";

//El uso de Faker es temportal hasta conectar a base de datos
export const titleTextCardService = (
  ctx,
  dateRange: DateRange,
  cardId: CardIdTitleTextFbType
): titleTextIn => {
  logger.info(`Getting values ​​for: ${cardId}`);
  logger.info(`Successfully obtained: ${cardId}`);
  return {
    title: faker.lorem.word(),
    text: faker.lorem.words(10),
  };
};
