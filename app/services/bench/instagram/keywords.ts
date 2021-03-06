import moment from "moment";
import { fbQuerys } from "../../../../queries/pulse/facebook";
import { DateRange } from "../../../schema/common/Arguments";
import { keywordsTrans } from "../../../transform/bench/instagram/keywods.transform";
export const keywordsIgCall = async (dateRange: DateRange, ctx) => {
  let date = moment(dateRange.date, "X").format("YYYY-MM-DD");
  let res = await fbQuerys.keywordsBenchIg(ctx, date, dateRange.period);
  let data = keywordsTrans(res);
  await ctx.myCache.setItem(`${ctx.id}_keywordBenchIg`, data, {
    ttl: parseInt(process.env.cache_ttl),
    isLazy: process.env.cache_isLazy == "true",
  });
  return data;
};
