import moment from "moment";
import { fbQuerys } from "../../../../queries/pulse/facebook";
import { DateRange } from "../../../schema/common/Arguments";
import { keywordsTrans } from "../../../transform/bench/youtube/keywods.transform";
export const keywordsYtCall = async (dateRange: DateRange, ctx) => {
  let date = moment(dateRange.date, "X").format("YYYY-MM-DD");
  let res = await fbQuerys.keywordsBenchYt(ctx, date, dateRange.period);
  let data = keywordsTrans(res);
  await ctx.myCache.setItem(`${ctx.id}_keywordBenchYt`, data, {
    ttl: parseInt(process.env.cache_ttl),
    isLazy: process.env.cache_isLazy == "true",
  });
  return data;
};
