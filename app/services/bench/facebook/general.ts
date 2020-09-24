import moment from "moment";
import { fbQuerys } from "../../../../queries/pulse/facebook";
import { generalTrans } from "../../../transform/bench/facebook/general.transform";
import { DateRange } from "../../../schema/common/Arguments";
export const GeneralBenchCall = async (dateRange: DateRange, ctx) => {
  let date = moment(dateRange.date, "DD-MM-YYYYThh:mm:ss").format("YYYY-MM-DD");
  let res = await fbQuerys.geenralBench(ctx, date, dateRange.period);
  let data = generalTrans(res);
  await ctx.myCache.setItem(`${ctx.id}_generalBench`, data, {
    ttl: parseInt(process.env.cache_ttl),
    isLazy: process.env.cache_isLazy == "true",
  });
  return data;
};
