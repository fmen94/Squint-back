import BadRequestException from "../../../exceptions/bad-request.exception";
import faker from "faker";
import { DateRange } from "../../../schema/common/Arguments";
import { valueDiffIn } from "../../../interfaces/common";
import logger from "../../../helpers/logins/login.helper";
import { CardIdValuePrevFbType } from "../../../schema/common/Enums";
import { ExpirationStrategy, MemoryStorage } from "node-ts-cache";
import { valuePrevTrans } from "../../../transform/pulse/facebook/valuePrev.transform";
import moment from "moment";

const myCache = new ExpirationStrategy(new MemoryStorage());
//El uso de Faker es temportal hasta conectar a base de datos
export const valuePrevCardService = async (
  ctx,
  dateRange: DateRange,
  cardId: CardIdValuePrevFbType
): Promise<valueDiffIn> => {
  logger.info(`Getting values ​​for: ${cardId}`);
  /**
   * Prueba
   */
  let data = await myCache.getItem(`${ctx.id}_general`);
  if (data) {
    logger.info(`Successfully obtained of cache: ${cardId}`);
    return data[cardId];
  } else {
    let startDate = moment(dateRange.date, "DD-MM-YYYYThh:mm:ss")
      .subtract(1, "days")
      .format("YYYY-MM-DD");
    let endDate = moment(startDate).format("YYYY-MM-DD");
    let res = await ctx.conection.query(
      `
    BEGIN;
    call read_top_section('cursor_czf365gntfl','${ctx.id}','${startDate}','${endDate}');
    FETCH ALL FROM cursor_czf365gntfl;
    CLOSE cursor_czf365gntfl;
    `
    );
    data = valuePrevTrans(res);
    await myCache.setItem(`${ctx.id}_general`, data, {
      ttl: parseInt(process.env.cache_ttl),
      isLazy: process.env.cache_isLazy == "true",
    });
  }
  /**
   * final de la prueba
   */
  logger.info(`Successfully obtained: ${cardId}`);
  return data[cardId];
};
