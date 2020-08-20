import BadRequestException from "../../../exceptions/bad-request.exception";
import faker from "faker";
import { DateRange } from "../../../schema/common/Arguments";
import { donutDetailIn, kindValueIn } from "../../../interfaces/common";
import logger from "../../../helpers/logins/login.helper";
import { CardIdDonutFbType } from "../../../schema/common/Enums";

//El uso de Faker es temportal hasta conectar a base de datos
export const donutDetailCardService = (
  ctx,
  dateRange: DateRange,
  cardId: CardIdDonutFbType
): donutDetailIn => {
  logger.info(`Getting values ​​for: ${cardId}`);
  let response: donutDetailIn = {
    title: faker.lorem.word(),
    subtitle: faker.lorem.word(),
    text: faker.lorem.words(),
    valuesArray: kindValue(),
  };
  logger.info(`Successfully obtained: ${cardId}`);
  return response;
};
const kindValue = (num: Number = 7): kindValueIn[] => {
  let arr: kindValueIn[] = [];
  for (let index = 0; index < num; index++) {
    arr.push({
      kind: faker.lorem.word(),
      value: faker.random.number(),
    });
  }
  return arr;
};
