import moment from "moment";
import { fbQuerys } from "../../../../queries/pulse/facebook";
import { DateRange } from "../../../schema/common/Arguments";
import { bestMomentsTrans } from "../../../transform/pulse/facebook/bestMoments.transform";

export const bestMomentsCall = async (dateRange: DateRange, ctx) => {
  let startDate = moment(dateRange.date, "X")
    .subtract(1, "day")
    .format("YYYY-MM-DD");
  let endDate = moment(startDate).format("YYYY-MM-DD");
  let res = await fbQuerys.bestMomnets(ctx, startDate, endDate);
  let data = bestMomentsTrans(res);
  await ctx.myCache.setItem(`${ctx.id}_bestMoments`, data, {
    ttl: parseInt(process.env.cache_ttl),
    isLazy: process.env.cache_isLazy == "true",
  });
  return data;
};
