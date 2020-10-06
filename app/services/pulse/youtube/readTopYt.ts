import moment from "moment";
import { fbQuerys } from "../../../../queries/pulse/facebook";
import { DateRange } from "../../../schema/common/Arguments";
import { readTopYtTrans } from "../../../transform/pulse/youtube/readTop.transform";
export const readTopYtCall = async (dateRange: DateRange, ctx) => {
  let date = moment(dateRange.date, "x").format("YYYY-MM-DD");
  let res = await fbQuerys.topSectionYt(ctx, date, dateRange.period);
  let data = readTopYtTrans(res);
  await ctx.myCache.setItem(`${ctx.id}_readTopYt`, data, {
    ttl: parseInt(process.env.cache_ttl),
    isLazy: process.env.cache_isLazy == "true",
  });
  return data;
};
