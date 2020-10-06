import moment from "moment";
import { fbQuerys } from "../../../../queries/pulse/facebook";
import { DateRange } from "../../../schema/common/Arguments";
import { sourseValueTrans } from "../../../transform/pulse/facebook/sourseValue.transform";

export const sourseValueCall = async (dateRange: DateRange, ctx) => {
  let res = await fbQuerys.communitySourse(ctx, dateRange.date, dateRange.period);
  //let res = await fbQuerys.communitySourse(ctx, startDate, endDate);
  let data = sourseValueTrans(res);
  await ctx.myCache.setItem(`${ctx.id}_sourseValue`, data, {
    ttl: parseInt(process.env.cache_ttl),
    isLazy: process.env.cache_isLazy == "true",
  });
  return data;
};
