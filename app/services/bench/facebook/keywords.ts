import moment from "moment";
import { fbQuerys } from "../../../../queries/pulse/facebook";
import { DateRange } from "../../../schema/common/Arguments";
import { keywordsTrans } from "../../../transform/bench/facebook/keywods.transform";
export const keywordsCall = async (dateRange: DateRange, ctx) => {
  let date = moment(dateRange.date, "DD-MM-YYYYThh:mm:ss").format("YYYY-MM-DD");
  let res = await fbQuerys.keywordsBench(ctx, date, dateRange.period);
  let data = keywordsTrans(res);
  await ctx.myCache.setItem(`${ctx.id}_keywordBench`, data, {
    ttl: parseInt(process.env.cache_ttl),
    isLazy: process.env.cache_isLazy == "true",
  });
  return data;
};
