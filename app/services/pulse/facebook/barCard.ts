import BadRequestException from "../../../exceptions/bad-request.exception";
import faker from "faker";
import { DateRange } from "../../../schema/common/Arguments";
import { kindIntValuesIn } from "../../../interfaces/common";
import logger from "../../../helpers/logins/login.helper";
import { CardIdBarFbType } from "../../../schema/common/Enums";
import { communityGenderCall } from "./communityGender";
import { sourseValueCall } from "./sourseValue";
import { reactionsSectionsCall } from "./reactionsSection";
import { readTopCall } from "./readTopCall";

//El uso de Faker es temportal hasta conectar a base de datos
export const barCardService = async (
  ctx,
  dateRange: DateRange,
  cardId: CardIdBarFbType
): Promise<kindIntValuesIn[]> => {
  logger.info(`Getting values ​​for: ${cardId}`);
  if (cardId == "affinityBar02" || cardId == "conversationBar01") {
    let data = await ctx.myCache.getItem(`${ctx.id}_readTop`);
    data = await readTopCall(dateRange, ctx);
    logger.info(`Successfully obtained: ${cardId}`);
    return data[cardId];
    /*if (data) {
      logger.info(`Successfully obtained of cache: ${cardId}`);
      return data[cardId];
    } else {
      data = await readTopCall(dateRange, ctx);
      logger.info(`Successfully obtained: ${cardId}`);
      return data[cardId];
    }*/
  } else if (cardId == "affinityBar01") {
    let data = await ctx.myCache.getItem(`${ctx.id}_reactionsSections`);
    data = await reactionsSectionsCall(dateRange, ctx);
    logger.info(`Successfully obtained: ${cardId}`);
    return data[cardId];
    /*if (data) {
      logger.info(`Successfully obtained of cache: ${cardId}`);
      return data[cardId];
    } else {
      data = await reactionsSectionsCall(dateRange, ctx);
      logger.info(`Successfully obtained: ${cardId}`);
      return data[cardId];
    }*/
  } else if (cardId == "affinityBar03") {
    let data = await ctx.myCache.getItem(`${ctx.id}_sourseValue`);
    data = await sourseValueCall(dateRange, ctx);
    logger.info(`Successfully obtained: ${cardId}`);
    return data[cardId];
    /*if (data) {
      logger.info(`Successfully obtained of cache: ${cardId}`);
      return data[cardId];
    } else {
      data = await sourseValueCall(dateRange, ctx);
      logger.info(`Successfully obtained: ${cardId}`);
      return data[cardId];
    }*/
  } else {
    let data = await ctx.myCache.getItem(`${ctx.id}_communityGender`);
    data = await communityGenderCall(dateRange, ctx);
    logger.info(`Successfully obtained: ${cardId}`);
    return data[cardId];
    /*if (data) {
      logger.info(`Successfully obtained of cache: ${cardId}`);
      return data[cardId];
    } else {
      data = await communityGenderCall(dateRange, ctx);
      logger.info(`Successfully obtained: ${cardId}`);
      return data[cardId];
    }*/
  }
};
