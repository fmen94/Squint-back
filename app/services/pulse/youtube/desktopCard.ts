import faker from "faker";
import { DateRange } from "../../../schema/common/Arguments";
import { desktopIn } from "../../../interfaces/common";
import logger from "../../../helpers/logins/login.helper";
import { desktopYtType } from "../../../schema/common/Enums";
import moment from "moment";

//El uso de Faker es temportal hasta conectar a base de datos
export const desktopService = (
  ctx,
  dateRange: DateRange,
  cardId: desktopYtType
): desktopIn[] => {
  logger.info(`Getting values ​​for: ${cardId}`);
  let response: desktopIn[] = [];
  for (let index = 0; index < 2; index++) {
    response.push({
      percent: faker.random.number(50),
      label: faker.random.word(),
      value: faker.random.number(),
      diff: faker.random.number(),
    });
  }
  logger.info(`Successfully obtained: ${cardId}`);
  return response;
};
