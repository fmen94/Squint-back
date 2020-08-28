import BadRequestException from "../../../exceptions/bad-request.exception";
import faker from "faker";
import moment = require("moment");
import { DateRange } from "../../../schema/common/Arguments";
import { postYtIn } from "../../../interfaces/common";
import logger from "../../../helpers/logins/login.helper";
import { CardIdPostFbType } from "../../../schema/common/Enums";

//El uso de Faker es temportal hasta conectar a base de datos
export const postCardService = (
  ctx,
  dateRange: DateRange,
  cardId: CardIdPostFbType
): postYtIn[] => {
  logger.info(`Getting values ​​for: ${cardId}`);
  let response: postYtIn[] = [];
  for (let index = 0; index < 2; index++) {
    response.push({
      performance: "Good",
      pageName: "Adidas",
      pageImage: faker.image.imageUrl(),
      date: moment().format("DD-MM-YYYYThh:mm:ss"),
      type: "video",
      title: faker.random.words(5),
      text: faker.random.words(10),
      mediaUrl: faker.image.imageUrl(),
      postUrl: faker.internet.url(),
      favorites: faker.random.number(),
      like: faker.random.number(),
      comments: faker.random.number(),
      shares: faker.random.number(),
      unlikes: faker.random.number(),
    });
  }
  logger.info(`Successfully obtained: ${cardId}`);
  return response;
};
