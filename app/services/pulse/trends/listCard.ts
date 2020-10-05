import BadRequestException from "../../../exceptions/bad-request.exception";
import faker from "faker";
import moment = require("moment");
import { DateRange } from "../../../schema/common/Arguments";
import { kindValueIn } from "../../../interfaces/common";
import logger from "../../../helpers/logins/login.helper";
import { OrderType, CardIdListTrType } from "../../../schema/common/Enums";

//El uso de Faker es temportal hasta conectar a base de datos
export const listCardService = (
  ctx,
  dateRange: DateRange,
  cardId: CardIdListTrType,
  order: OrderType
): kindValueIn[] => {
  logger.info(`Getting values ​​for: ${cardId}`);
  let response: kindValueIn[] = [];
  for (let index = 0; index < 12; index++) {
    response.push({
      kind: faker.lorem.word(),
      value: faker.random.number(),
    });
  }
  if (order == "DESC") {
    response = response.sort((a, b) => (a.value > b.value ? -1 : 1));
  } else if (order == "ASC") {
    response = response.sort((a, b) => (a.value < b.value ? -1 : 1));
  }
  logger.info(`Successfully obtained: ${cardId}`);
  return response;
};
