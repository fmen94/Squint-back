import BadRequestException from "../../../exceptions/bad-request.exception";
import faker from "faker";
import { DateRange } from "../../../schema/common/Arguments";
import logger from "../../../helpers/logins/login.helper";
import { CardIdIntFbType } from "../../../schema/common/Enums";

//El uso de Faker es temportal hasta conectar a base de datos
export const intCardService = async (
  ctx,
  dateRange: DateRange,
  cardId: CardIdIntFbType
): Promise<number> => {
  logger.info(`Getting values ​​for: ${cardId}`);
  let res = await ctx.conection.query(`
    BEGIN;
    call  read_vi_fb_post_count_video('cursor_yqo6ltgzdd','702336949790369',10,'2020-09-03');
    FETCH ALL FROM cursor_yqo6ltgzdd;
    CLOSE cursor_yqo6ltgzdd;
    `);
  res = Object.values(res).filter((r: any) => r.command === "FETCH");
  console.log(res[0].rows);

  logger.info(`Successfully obtained: ${cardId}`);
  return 1; //faker.random.number();
};
