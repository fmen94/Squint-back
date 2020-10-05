import moment from "moment";
import { readTopTrans } from "../../../transform/pulse/facebook/readTop.transform";
import { fbQuerys } from "../../../../queries/pulse/facebook";
import { DateRange } from "../../../schema/common/Arguments";

export const readTopCall = async (dateRange: DateRange, ctx) => {
  let res = await fbQuerys.readTop(ctx, dateRange.date, dateRange.period);
  let data = readTopTrans(res);
  await ctx.myCache.setItem(`${ctx.id}_readTop`, data, {
    ttl: parseInt(process.env.cache_ttl),
    isLazy: process.env.cache_isLazy == "true",
  });
  return data;
};
