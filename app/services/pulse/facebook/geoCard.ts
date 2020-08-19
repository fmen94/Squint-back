import BadRequestException from "../../../exceptions/bad-request.exception";
//import faker from "faker";
import * as faker from "faker";
import moment = require("moment");
import { DateRange } from "../../../schema/common/Arguments";
import { geoCardIn } from "../../../interfaces/common";
import logger from "../../../helpers/logins/login.helper";
import { CardIdGeoFbType } from "../../../schema/common/Enums";

//El uso de Faker es temportal hasta conectar a base de datos
export const geoCardService = (
  ctx,
  dateRange: DateRange,
  cardId: CardIdGeoFbType
): geoCardIn[] => {
  logger.info(`Getting values ​​for: ${cardId}`);
  let response: geoCardIn[] = [];
  for (let index = 0; index < 5; index++) {
    response.push({
      id: faker.random.uuid(),
      iso_a2: faker.address.countryCode(2),
      iso_a3: faker.address.countryCode(3),
      position: index + 1,
      name: faker.address.country(),
      diff: faker.random.number(),
      value: faker.random.number(),
      cities: {
        id: faker.random.uuid(),
        diff: faker.random.number(),
        value: faker.random.number(),
        country: faker.address.country(),
        name: faker.address.city(),
        lat: faker.address.latitude(),
        lng: faker.address.longitude(),
      },
    });
  }
  logger.info(`Successfully obtained: ${cardId}`);
  return response;
};
