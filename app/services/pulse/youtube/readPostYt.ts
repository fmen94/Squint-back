import moment from "moment";
import { fbQuerys } from "../../../../queries/pulse/facebook";
import { DateRange } from "../../../schema/common/Arguments";
import { postYtTrans } from "../../../transform/pulse/youtube/readPostIG.transform";
export const readPostYtCall = async (dateRange: DateRange, ctx) => {
  let date = moment(dateRange.date, "DD-MM-YYYYThh:mm:ss").format("YYYY-MM-DD");
  let res = await fbQuerys.postYt(ctx);
  let data = postYtTrans(res);
  await ctx.myCache.setItem(`${ctx.id}_readPostYt`, data, {
    ttl: parseInt(process.env.cache_ttl),
    isLazy: process.env.cache_isLazy == "true",
  });
  return data;
};
