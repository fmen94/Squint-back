import moment from "moment";
import { valuePrevTrans } from "../../../transform/pulse/facebook/valuePrev.transform";
import { fbQuerys } from "../../../../queries/pulse/facebook";

export const generalCall = async (date, ctx) => {
  let startDate = moment(date, "DD-MM-YYYYThh:mm:ss")
    .subtract(1, "day")
    .format("YYYY-MM-DD");
  let endDate = moment(startDate).format("YYYY-MM-DD");
  let query = fbQuerys.general(ctx, startDate, endDate);
  let res = await ctx.conection.query(query);
  let data = valuePrevTrans(res);
  await ctx.myCache.setItem(`${ctx.id}_general`, data, {
    ttl: parseInt(process.env.cache_ttl),
    isLazy: process.env.cache_isLazy == "true",
  });
  return data;
};
