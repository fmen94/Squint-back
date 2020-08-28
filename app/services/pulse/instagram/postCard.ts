import BadRequestException from "../../../exceptions/bad-request.exception";
import faker from "faker";
import moment = require("moment");
import { DateRange } from "../../../schema/common/Arguments";
import { postIGIn } from "../../../interfaces/common";
import logger from "../../../helpers/logins/login.helper";
import { CardIdPostFbType } from "../../../schema/common/Enums";

//El uso de Faker es temportal hasta conectar a base de datos
export const postCardService = (
  ctx,
  dateRange: DateRange,
  cardId: CardIdPostFbType
): postIGIn[] => {
  logger.info(`Getting values ​​for: ${cardId}`);
  let response: postIGIn[] = [];
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
      engagementRate: faker.random.number(),
      interactions: faker.random.number(),
      views: faker.random.number(),
      clicks: faker.random.number(),
      shares: faker.random.number(),
      saved: faker.random.number(),
    });
  }
  logger.info(`Successfully obtained: ${cardId}`);
  return response;
};
