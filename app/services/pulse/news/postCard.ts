import BadRequestException from "../../../exceptions/bad-request.exception";
import faker from "faker";
import moment = require("moment");
import { DateRange } from "../../../schema/common/Arguments";
import { postNwIn } from "../../../interfaces/common";
import logger from "../../../helpers/logins/login.helper";
import { CardIdPostNwType } from "../../../schema/common/Enums";

//El uso de Faker es temportal hasta conectar a base de datos
export const postCardService = (
  ctx,
  dateRange: DateRange,
  cardId: CardIdPostNwType
): postNwIn[] => {
  logger.info(`Getting values ​​for: ${cardId}`);
  let response: postNwIn[] = [];
  for (let index = 0; index < 2; index++) {
    response.push({
      sourseName: "CNN",
      sourseImage: faker.image.imageUrl(),
      date: moment().format("DD-MM-YYYYThh:mm:ss"),
      title: faker.random.words(10),
      text: faker.random.words(50),
      imageUrl: faker.image.imageUrl(),
      postUrl: faker.image.imageUrl(),
      autor: faker.random.words(10),
      category: faker.random.word(),
    });
  }
  logger.info(`Successfully obtained: ${cardId}`);
  return response;
};
