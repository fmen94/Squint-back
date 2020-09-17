import moment from "moment";
import { fbQuerys } from "../../../../queries/pulse/facebook";
import { sourseValueTrans } from "../../../transform/pulse/facebook/sourseValue.transform";
import { bestMomentsTrans } from "../../../transform/pulse/facebook/bestMoments.transform";

export const bestMomentsCall = async (date, ctx) => {
  let startDate = moment(date, "DD-MM-YYYYThh:mm:ss")
    .subtract(1, "day")
    .format("YYYY-MM-DD");
  let endDate = moment(startDate).format("YYYY-MM-DD");
  let query = fbQuerys.bestMomnets(ctx, startDate, endDate);
  let res = await ctx.conection.query(query);
  let data = bestMomentsTrans(res);
  await ctx.myCache.setItem(`${ctx.id}_bestMoments`, data, {
    ttl: parseInt(process.env.cache_ttl),
    isLazy: process.env.cache_isLazy == "true",
  });
  return data;
};