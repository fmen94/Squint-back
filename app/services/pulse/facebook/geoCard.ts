import BadRequestException from "../../../exceptions/bad-request.exception";
//import faker from "faker";
import * as faker from "faker";
import moment = require("moment");
import { DateRange } from "../../../schema/common/Arguments";
import { geoCardIn } from "../../../interfaces/common";
import logger from "../../../helpers/logins/login.helper";
import { CardIdGeoFbType } from "../../../schema/common/Enums";
import { communityGeoCall } from "./communityGeo";

//El uso de Faker es temportal hasta conectar a base de datos
export const geoCardService = async (
  ctx,
  dateRange: DateRange,
  cardId: CardIdGeoFbType
): Promise<geoCardIn[]> => {
  logger.info(`Getting values ​​for: ${cardId}`);
  let data = await ctx.myCache.getItem(`${ctx.id}_communityGeo`);
  if (data) {
    logger.info(`Successfully obtained of cache: ${cardId}`);
    return data[cardId];
  } else {
    data = await communityGeoCall(dateRange.date, ctx);
    logger.info(`Successfully obtained: ${cardId}`);
    return data[cardId];
  }
};
