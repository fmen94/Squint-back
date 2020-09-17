import moment from "moment";
import { fbQuerys } from "../../../../queries/pulse/facebook";
import { communutyGenderTrans } from "../../../transform/pulse/facebook/communityGender.transform";

export const communityGenderCall = async (date, ctx) => {
  let startDate = moment(date, "DD-MM-YYYYThh:mm:ss")
    .subtract(1, "day")
    .format("YYYY-MM-DD");
  let endDate = moment(startDate).format("YYYY-MM-DD");
  let res = await fbQuerys.communityGender(ctx, startDate, endDate);
  let data = communutyGenderTrans(res);
  await ctx.myCache.setItem(`${ctx.id}_communityGender`, data, {
    ttl: parseInt(process.env.cache_ttl),
    isLazy: process.env.cache_isLazy == "true",
  });
  return data;
};
