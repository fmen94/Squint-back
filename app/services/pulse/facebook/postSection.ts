import moment from "moment";
import { fbQuerys } from "../../../../queries/pulse/facebook";
import { postSectionTrans } from "../../../transform/pulse/facebook/postSection.transform";

export const postSectionCall = async (limit, ctx) => {
  let query = fbQuerys.postSection(ctx, limit);
  let res = await ctx.conection.query(query);
  let data = postSectionTrans(res);
  await ctx.myCache.setItem(`${ctx.id}_postSection`, data, {
    ttl: parseInt(process.env.cache_ttl),
    isLazy: process.env.cache_isLazy == "true",
  });
  return data;
};
