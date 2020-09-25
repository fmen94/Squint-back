import moment from "moment";
import { fbQuerys } from "../../../../queries/pulse/facebook";
import { DateRange } from "../../../schema/common/Arguments";
import { interationsIGTrans } from "../../../transform/pulse/instagram/readInteractions.transform";
export const readInteractiosIgCall = async (dateRange: DateRange, ctx) => {
  let startDate = moment(dateRange.date, "DD-MM-YYYYThh:mm:ss")
    .subtract(1, "day")
    .format("YYYY-MM-DD");
  let endDate = moment(startDate).format("YYYY-MM-DD");
  let res = await fbQuerys.readInteractionsIG(ctx, startDate, endDate);
  let data = interationsIGTrans(res);
  await ctx.myCache.setItem(`${ctx.id}_readInteractiosIg`, data, {
    ttl: parseInt(process.env.cache_ttl),
    isLazy: process.env.cache_isLazy == "true",
  });
  return data;
};
