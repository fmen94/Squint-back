import { Length } from "class-validator";
import moment from "moment";
import { fbQuerys } from "../../../../queries/pulse/facebook";
import { DateRange } from "../../../schema/common/Arguments";
import { postTrans } from "../../../transform/bench/facebook/post.transform";
export const postCall = async (DateRange: DateRange, ctx) => {
  let res = await fbQuerys.postBench(ctx, 1);
  let data = postTrans(res);
  await ctx.myCache.setItem(`${ctx.id}_postBench`, data, {
    ttl: parseInt(process.env.cache_ttl),
    isLazy: process.env.cache_isLazy == "true",
  });
  return data;
};
