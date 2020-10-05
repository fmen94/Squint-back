import moment from "moment";
import { fbQuerys } from "../../../../queries/pulse/facebook";
import { DateRange } from "../../../schema/common/Arguments";
import { interationsIGTrans } from "../../../transform/pulse/instagram/readInteractions.transform";
import { detailsYtTrans } from "../../../transform/pulse/youtube/details.transform";
export const readDetailsYtCall = async (dateRange: DateRange, ctx) => {
  let res = await fbQuerys.detailsSectionYt(ctx);
  let data = detailsYtTrans(res);
  await ctx.myCache.setItem(`${ctx.id}_detailsYt`, data, {
    ttl: parseInt(process.env.cache_ttl),
    isLazy: process.env.cache_isLazy == "true",
  });
  return data;
};
