import BadRequestException from "../../../exceptions/bad-request.exception";
import faker from "faker";
import moment = require("moment");
import { DateRange } from "../../../schema/common/Arguments";
import { postFbIn } from "../../../interfaces/common";
import logger from "../../../helpers/logins/login.helper";
import { CardIdPostFbType } from "../../../schema/common/Enums";

//El uso de Faker es temportal hasta conectar a base de datos
export const postCardService = (
  ctx,
  dateRange: DateRange,
  cardId: CardIdPostFbType
): postFbIn[] => {
  logger.info(`Getting values ​​for: ${cardId}`);
  let response: postFbIn[] = [];
  for (let index = 0; index < 2; index++) {
    response.push({
      performance: "Good",
      pageName: "Adidas",
      pageImage: faker.image.imageUrl(),
      date: moment().format("DD-MM-YYYYThh:mm:ss"),
      type: "image",
      text: faker.random.words(10),
      mediaUrl: faker.image.imageUrl(),
      postUrl: faker.internet.url(),
      impressions: faker.random.number(),
      reach: faker.random.number(),
      interactions: faker.random.number(),
      like: faker.random.number(),
      love: faker.random.number(),
      care: faker.random.number(),
      haha: faker.random.number(),
      wow: faker.random.number(),
      sad: faker.random.number(),
      angry: faker.random.number(),
      comments: faker.random.number(),
      clicks: faker.random.number(),
      shares: faker.random.number(),
      feedbacks: faker.random.number(),
    });
  }
  logger.info(`Successfully obtained: ${cardId}`);
  return response;
};
