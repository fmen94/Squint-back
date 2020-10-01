import moment from "moment";
import { fbQuerys } from "../../../../queries/pulse/facebook";
import { DateRange } from "../../../schema/common/Arguments";
import { readTopIgTrans } from "../../../transform/pulse/instagram/readTop.transform";
export const readTopIgCall = async (dateRange: DateRange, ctx) => {
  let date = moment(dateRange.date, "X").format("YYYY-MM-DD");
  let res = await fbQuerys.readTopIG(ctx, date, dateRange.period);
  let data = readTopIgTrans(res);
  await ctx.myCache.setItem(`${ctx.id}_readTopIg`, data, {
    ttl: parseInt(process.env.cache_ttl),
    isLazy: process.env.cache_isLazy == "true",
  });
  return data;
};
