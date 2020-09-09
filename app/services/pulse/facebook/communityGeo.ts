import moment from "moment";
import { fbQuerys } from "../../../../queries/pulse/facebook";
import { communutyGeoTrans } from "../../../transform/pulse/facebook/communityGeo.transform";

export const communityGeoCall = async (date, ctx) => {
  let startDate = moment(date, "DD-MM-YYYYThh:mm:ss")
    .subtract(1, "day")
    .format("YYYY-MM-DD");
  let endDate = moment(startDate).format("YYYY-MM-DD");
  let query = fbQuerys.communityGeo(ctx, startDate, endDate);
  let res = await ctx.conection.query(query);
  let data = communutyGeoTrans(res);
  await ctx.myCache.setItem(`${ctx.id}_communityGeo`, data, {
    ttl: parseInt(process.env.cache_ttl),
    isLazy: process.env.cache_isLazy == "true",
  });
  return data;
};
