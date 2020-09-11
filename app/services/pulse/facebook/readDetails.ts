import moment from "moment";
import { fbQuerys } from "../../../../queries/pulse/facebook";
import { readDetailsTrans } from "../../../transform/pulse/facebook/readDetails.transform";

export const readDetailsCall = async (date, ctx) => {
  let startDate = moment(date, "DD-MM-YYYYThh:mm:ss")
    .subtract(1, "day")
    .format("YYYY-MM-DD");
  let endDate = moment(startDate).format("YYYY-MM-DD");
  let query = fbQuerys.readDetails(ctx);
  let res = await ctx.conection.query(query);
  let data = readDetailsTrans(res);
  await ctx.myCache.setItem(`${ctx.id}_readDetails`, data, {
    ttl: parseInt(process.env.cache_ttl),
    isLazy: process.env.cache_isLazy == "true",
  });
  return data;
};