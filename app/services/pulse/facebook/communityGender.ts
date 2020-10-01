import moment from "moment";
import { fbQuerys } from "../../../../queries/pulse/facebook";
import { DateRange } from "../../../schema/common/Arguments";
import { communutyGenderTrans } from "../../../transform/pulse/facebook/communityGender.transform";

export const communityGenderCall = async (dateRange: DateRange, ctx) => {
  let res = await fbQuerys.communityGender(ctx, dateRange.date, dateRange.period);
  //let res = await fbQuerys.communityGender(ctx, startDate, endDate);
  let data = communutyGenderTrans(res);
  await ctx.myCache.setItem(`${ctx.id}_communityGender`, data, {
    ttl: parseInt(process.env.cache_ttl),
    isLazy: process.env.cache_isLazy == "true",
  });
  return data;
};
