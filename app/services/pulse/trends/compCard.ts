import BadRequestException from "../../../exceptions/bad-request.exception";
import faker from "faker";
import { xlabels } from "../../../helpers/xlabels";
import { DateRange } from "../../../schema/common/Arguments";
import { nameValueDiffIn } from "../../../interfaces/common";
import logger from "../../../helpers/logins/login.helper";
import { CardIdCompTrType } from "../../../schema/common/Enums";

//El uso de Faker es temportal hasta conectar a base de datos
export const compCardService = (
  ctx,
  dateRange: DateRange,
  cardId: CardIdCompTrType
): nameValueDiffIn[] => {
  logger.info(`Getting values ​​for: ${cardId}`);
  let response: nameValueDiffIn[] = [];
  let levels = xlabels(dateRange);
  for (let index = 0; index < levels.length; index++) {
    response.push({
      name: levels[index],
      value: faker.random.number(),
      diff: faker.random.number(),
    });
  }
  logger.info(`Successfully obtained: ${cardId}`);
  return response;
};
