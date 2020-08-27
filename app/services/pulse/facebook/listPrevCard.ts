import BadRequestException from "../../../exceptions/bad-request.exception";
import faker from "faker";
import moment = require("moment");
import { DateRange } from "../../../schema/common/Arguments";
import { nameValueDiffIn } from "../../../interfaces/common";
import logger from "../../../helpers/logins/login.helper";
import { CardIdListPrevFbType, OrderType } from "../../../schema/common/Enums";

//El uso de Faker es temportal hasta conectar a base de datos
export const listPrevCardService = (
  ctx,
  dateRange: DateRange,
  cardId: CardIdListPrevFbType,
  order: OrderType
): nameValueDiffIn[] => {
  logger.info(`Getting values ​​for: ${cardId}`);
  let response: nameValueDiffIn[] = [];
  for (let index = 0; index < 12; index++) {
    response.push({
      name: faker.address.country(),
      value: faker.random.number(),
      diff: faker.random.number(),
    });
  }
  logger.info(`Successfully obtained: ${cardId}`);
  if (order == "DESC") {
    response = response.sort((a, b) => (a.value > b.value ? -1 : 1));
  } else if (order == "ASC") {
    response = response.sort((a, b) => (a.value < b.value ? -1 : 1));
  }
  return response;
};
