import faker from "faker";
import { DateRange } from "../../../schema/common/Arguments";
import { topPeopleIn } from "../../../interfaces/common";
import logger from "../../../helpers/logins/login.helper";
import { topPeopleFbType } from "../../../schema/common/Enums";

//El uso de Faker es temportal hasta conectar a base de datos
export const topPeopleService = (
  ctx,
  dateRange: DateRange,
  cardId: topPeopleFbType
): topPeopleIn[] => {
  logger.info(`Getting values ​​for: ${cardId}`);
  let response: topPeopleIn[] = [];
  for (let index = 0; index < 10; index++) {
    response.push({
      position: index + 1,
      image: faker.image.imageUrl(),
      name: faker.name.firstName(),
      followers: faker.random.number(),
      likes: faker.random.number(),
    });
  }
  logger.info(`Successfully obtained: ${cardId}`);
  return response;
};
