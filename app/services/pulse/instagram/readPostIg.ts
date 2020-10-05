import moment from "moment";
import { fbQuerys } from "../../../../queries/pulse/facebook";
import { DateRange } from "../../../schema/common/Arguments";
import { postIgTrans } from "../../../transform/pulse/instagram/readPostIG.transform";
export const readPostIgCall = async (dateRange: DateRange, ctx) => {
  let res = await fbQuerys.readPostIG(ctx);
  let data = postIgTrans(res);
  await ctx.myCache.setItem(`${ctx.id}_readPostIg`, data, {
    ttl: parseInt(process.env.cache_ttl),
    isLazy: process.env.cache_isLazy == "true",
  });
  return data;
};
