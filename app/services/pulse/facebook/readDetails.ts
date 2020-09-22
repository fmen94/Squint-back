import moment from "moment";
import { fbQuerys } from "../../../../queries/pulse/facebook";
import { readDetailsTrans } from "../../../transform/pulse/facebook/readDetails.transform";

export const readDetailsCall = async (date, ctx) => {
  let startDate = moment(date, "DD-MM-YYYYThh:mm:ss")
    .subtract(1, "day")
    .format("YYYY-MM-DD");
  let res = await fbQuerys.readDetails(ctx);
  let data = readDetailsTrans(res);
  await ctx.myCache.setItem(`${ctx.id}_readDetails`, data, {
    ttl: parseInt(process.env.cache_ttl),
    isLazy: process.env.cache_isLazy == "true",
  });
  return data;
};
