import moment from "moment";
import { fbQuerys } from "../../../../queries/pulse/facebook";
import { reactionSectionTrans } from "../../../transform/pulse/facebook/reactionsSections.transform";

export const reactionsSectionsCall = async (dateRange, ctx) => {
  let res = await fbQuerys.resctionsSection(ctx, dateRange.date, dateRange.period);
  
  console.log(res);

  let data = reactionSectionTrans(res);
  await ctx.myCache.setItem(`${ctx.id}_reactionsSections`, data, {
    ttl: parseInt(process.env.cache_ttl),
    isLazy: process.env.cache_isLazy == "true",
  });
  return data;
};
