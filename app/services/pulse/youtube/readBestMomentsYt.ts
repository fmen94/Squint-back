import moment from "moment";
import { fbQuerys } from "../../../../queries/pulse/facebook";
import { DateRange } from "../../../schema/common/Arguments";
import { bestMomentsIgTrans } from "../../../transform/pulse/instagram/readBestMoments.transform";
import { bestMomentsYtTrans } from "../../../transform/pulse/youtube/readBestMoments.transform";
export const readBestMomentsYtCall = async (dateRange: DateRange, ctx) => {
  let startDate = moment(dateRange.date, "x")
    .subtract(1, "day")
    .format("YYYY-MM-DD");
  let endDate = moment(startDate).format("YYYY-MM-DD");
  let res = await fbQuerys.bestMomentsYt(ctx, startDate, endDate);
  let data = bestMomentsYtTrans(res);
  await ctx.myCache.setItem(`${ctx.id}_readBestMomentsYt`, data, {
    ttl: parseInt(process.env.cache_ttl),
    isLazy: process.env.cache_isLazy == "true",
  });
  return data;
};
