import moment from "moment";
import { fbQuerys } from "../../../../queries/pulse/facebook";
import { communutyDatesTrans } from "../../../transform/pulse/facebook/communityDates.transform";

export const communityDateCall = async (date, ctx) => {
  let startDate = moment(date, "DD-MM-YYYYThh:mm:ss")
    .subtract(1, "day")
    .format("YYYY-MM-DD");
  let endDate = moment(startDate).format("YYYY-MM-DD");
  let query = fbQuerys.communityDates(ctx, startDate, endDate);
  let res = await ctx.conection.query(query);
  let data = communutyDatesTrans(res);
  await ctx.myCache.setItem(`${ctx.id}_communityDate`, data, {
    ttl: parseInt(process.env.cache_ttl),
    isLazy: process.env.cache_isLazy == "true",
  });
  return data;
};
