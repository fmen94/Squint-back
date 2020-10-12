import moment from "moment";
import { fbQuerys } from "../../../../queries/pulse/facebook";
import { generalTrans } from "../../../transform/bench/instagram/general.transform";
import { DateRange } from "../../../schema/common/Arguments";
export const GeneralBenchIgCall = async (dateRange: DateRange, ctx) => {
  let date = moment(dateRange.date, "X").format("YYYY-MM-DD");
  let res = await fbQuerys.generalBenchIg(ctx, date, dateRange.period);
  let data = generalTrans(res);
  await ctx.myCache.setItem(`${ctx.id}_generalBenchIg`, data, {
    ttl: parseInt(process.env.cache_ttl),
    isLazy: process.env.cache_isLazy == "true",
  });
  return data;
};
