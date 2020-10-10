import BadRequestException from "../../../exceptions/bad-request.exception";
import faker from "faker";
import moment = require("moment");
import { DateRange } from "../../../schema/common/Arguments";
import { kindValueIn } from "../../../interfaces/common";
import logger from "../../../helpers/logins/login.helper";
import { CardIdListFbType, OrderType } from "../../../schema/common/Enums";
import { sourseValueCall } from "./sourseValue";
import { reactionsSectionsCall } from "./reactionsSection";
import { readTopCall } from "./readTopCall";
//El uso de Faker es temportal hasta conectar a base de datos
export const listCardService = async (
  ctx,
  dateRange: DateRange,
  cardId: CardIdListFbType,
  order: OrderType
): Promise<kindValueIn[]> => {
  logger.info(`Getting values ​​for: ${cardId}`);
  let response;
  if (cardId === "conversationList02") {
    /*let data = await ctx.myCache.getItem(`${ctx.id}_reactionsSections`);
    let dataSent = await ctx.myCache.getItem(`${ctx.id}_readTop`);
    if (!dataSent) {
      dataSent = await readTopCall(dateRange, ctx);
    }
    if (data) {
      logger.info(`Successfully obtained of cache: ${cardId}`);
      return dataSent[cardId].concat(data[cardId]);
    } else {
      data = await reactionsSectionsCall(dateRange, ctx);
      logger.info(`Successfully obtained: ${cardId}`);
      return dataSent[cardId].concat(data[cardId]);
    }*/
    let data = await reactionsSectionsCall(dateRange, ctx);
    let dataSent = await readTopCall(dateRange, ctx);
    logger.info(`Successfully obtained: ${cardId}`);
    return dataSent[cardId].concat(data[cardId]);
  } else {
    let data = await ctx.myCache.getItem(`${ctx.id}_sourseValue`);
    if (data) {
      logger.info(`Successfully obtained of cache: ${cardId}`);
      response = data[cardId];
    } else {
      data = await sourseValueCall(dateRange, ctx);
      logger.info(`Successfully obtained: ${cardId}`);
      response = data[cardId];
    }
    if (order == "DESC") {
      response = response.sort((a, b) => (a.value > b.value ? -1 : 1));
    } else if (order == "ASC") {
      response = response.sort((a, b) => (a.value < b.value ? -1 : 1));
    }
    return response;
  }
};
