import moment from "moment";
import { fbQuerys } from "../../../../queries/pulse/facebook";
import { DateRange } from "../../../schema/common/Arguments";
import { bestMomentsIgTrans } from "../../../transform/pulse/instagram/readBestMoments.transform";
export const readBestMomentsIGCall = async (dateRange: DateRange, ctx) => {
  let startDate = moment(dateRange.date, "X")
    .subtract(1, "day")
    .format("YYYY-MM-DD");
  let endDate = moment(startDate).format("YYYY-MM-DD");
  let res = await fbQuerys.readBestMomentsIG(ctx, startDate, endDate);
  let data = bestMomentsIgTrans(res);
  await ctx.myCache.setItem(`${ctx.id}_readBestMomentsIG`, data, {
    ttl: parseInt(process.env.cache_ttl),
    isLazy: process.env.cache_isLazy == "true",
  });
  return data;
};
