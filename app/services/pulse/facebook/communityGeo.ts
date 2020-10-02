import moment from "moment";
import { fbQuerys } from "../../../../queries/pulse/facebook";
import { DateRange } from "../../../schema/common/Arguments";
import { communutyGeoTrans } from "../../../transform/pulse/facebook/communityGeo.transform";

export const communityGeoCall = async (dateRange: DateRange, ctx) => {
  let res = await fbQuerys.communityGeo(ctx, dateRange.date, dateRange.period);
  //let res = await fbQuerys.communityGeo(ctx, startDate, endDate);
  let data = communutyGeoTrans(res);
  await ctx.myCache.setItem(`${ctx.id}_communityGeo`, data, {
    ttl: parseInt(process.env.cache_ttl),
    isLazy: process.env.cache_isLazy == "true",
  });
  return data;
};
