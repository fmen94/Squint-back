import { Length } from "class-validator";
import moment from "moment";
import { fbQuerys } from "../../../../queries/pulse/facebook";
import { DateRange } from "../../../schema/common/Arguments";
import { postTrans } from "../../../transform/bench/youtube/post.transform";
export const postYtCall = async (DateRange: DateRange, ctx) => {
  let res = await fbQuerys.postBenchYt(ctx, 1);
  let data = postTrans(res);
  await ctx.myCache.setItem(`${ctx.id}_postBenchYt`, data, {
    ttl: parseInt(process.env.cache_ttl),
    isLazy: process.env.cache_isLazy == "true",
  });
  return data;
};
