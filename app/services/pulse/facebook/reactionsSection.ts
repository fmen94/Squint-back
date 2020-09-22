import moment from "moment";
import { fbQuerys } from "../../../../queries/pulse/facebook";
import { reactionSectionTrans } from "../../../transform/pulse/facebook/reactionsSections.transform";

export const reactionsSectionsCall = async (date, ctx) => {
  let startDate = moment(date, "DD-MM-YYYYThh:mm:ss")
    .subtract(1, "day")
    .format("YYYY-MM-DD");
  let endDate = moment(startDate).format("YYYY-MM-DD");
  let res = await fbQuerys.resctionsSection(ctx, startDate, endDate);
  console.log(res);

  let data = reactionSectionTrans(res);
  await ctx.myCache.setItem(`${ctx.id}_reactionsSections`, data, {
    ttl: parseInt(process.env.cache_ttl),
    isLazy: process.env.cache_isLazy == "true",
  });
  return data;
};
