import moment from "moment";
import { fbQuerys } from "../../../../queries/pulse/facebook";
import { sourseValueTrans } from "../../../transform/pulse/facebook/sourseValue.transform";

export const sourseValueCall = async (date, ctx) => {
  let startDate = moment(date, "DD-MM-YYYYThh:mm:ss")
    .subtract(1, "day")
    .format("YYYY-MM-DD");
  let endDate = moment(startDate).format("YYYY-MM-DD");
  let res = await fbQuerys.communitySourse(ctx, startDate, endDate);
  let data = sourseValueTrans(res);
  await ctx.myCache.setItem(`${ctx.id}_sourseValue`, data, {
    ttl: parseInt(process.env.cache_ttl),
    isLazy: process.env.cache_isLazy == "true",
  });
  return data;
};
