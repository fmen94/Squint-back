import BadRequestException from "../../../exceptions/bad-request.exception";
import faker from "faker";
import moment = require("moment");
import { DateRange } from "../../../schema/common/Arguments";
import { nameValueDiffIn } from "../../../interfaces/common";
import logger from "../../../helpers/logins/login.helper";
import { CardIdListPrevFbType, OrderType } from "../../../schema/common/Enums";
import { communityGeoCall } from "./communityGeo";

//El uso de Faker es temportal hasta conectar a base de datos
export const listPrevCardService = async (
  ctx,
  dateRange: DateRange,
  cardId: CardIdListPrevFbType,
  order: OrderType
): Promise<nameValueDiffIn[]> => {
  logger.info(`Getting values ​​for: ${cardId}`);
  let response;
  let data = await ctx.myCache.getItem(`${ctx.id}_communityGeo`);
  if (data) {
    logger.info(`Successfully obtained of cache: ${cardId}`);
    console.log(data[cardId]);

    response = data[cardId];
  } else {
    console.log("entra aqui ");

    data = await communityGeoCall(dateRange, ctx)
      .then((e) => {
        console.log("esta es la respusta", e);
      })
      .catch((e) => {
        console.log("Error", e);
      });
    logger.info(`Successfully obtained: ${cardId}`);
    response = data[cardId];
  }
  if (order == "DESC") {
    response = response.sort((a, b) => (a.value > b.value ? -1 : 1));
  } else if (order == "ASC") {
    response = response.sort((a, b) => (a.value < b.value ? -1 : 1));
  }
  return response;
};
