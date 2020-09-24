import { orderBench } from "../helpers/common/orderResults";
import logger from "../helpers/logins/login.helper";
import { DateRange } from "./../schema/common/Arguments";
import { GeneralBenchCall } from "./bench/facebook/general";
import { keywordsCall } from "./bench/facebook/keywords";
import { postCall } from "./bench/facebook/post";
export const masterService = async (
  network: string,
  chanel: string,
  ctx,
  dateRange: DateRange | number,
  cardId: string,
  params: Array<string> = []
) => {
  logger.info(`Getting values ${network} ${chanel} ​​for: ${cardId}`);
  let data: Object = await ctx.myCache.getItem(
    `${ctx.id}${serviceControler[chanel][network][cardId].cacheName}`
  );
  if (data) {
    logger.info(
      `Successfully obtained of cache  ${network} ${chanel}: ${cardId}`
    );
    return serviceControler[chanel][network][cardId].returnType(data, params);
  } else {
    data = await serviceControler[chanel][network][cardId].sp(dateRange, ctx);
    logger.info(`Successfully obtained  ${network} ${chanel} ​​: ${cardId}`);
    return serviceControler[chanel][network][cardId].returnType(data, params);
  }
};

const serviceControler = {
  bench: {
    facebook: {
      generalTable01: {
        sp: GeneralBenchCall,
        cacheName: "_generalBench",
        returnType: (data, type) => data.generalTable01,
      },
      activityPrevsValues01: {
        sp: GeneralBenchCall,
        cacheName: "_generalBench",
        returnType: (data, type) => data.activityPrevsValues01[type[0]],
      },
      activityCopm01: {
        sp: GeneralBenchCall,
        cacheName: "_generalBench",
        returnType: (data, type) => data.activityCopm01[type[0]],
      },
      performanceTable01: {
        sp: GeneralBenchCall,
        cacheName: "_generalBench",
        returnType: (data, type) => data.performanceTable01,
      },
      performancesPrevsValues01: {
        sp: GeneralBenchCall,
        cacheName: "_generalBench",
        returnType: (data, type) => data.performancesPrevsValues01[type[0]],
      },
      affinityBubbles01: {
        sp: GeneralBenchCall,
        cacheName: "_generalBench",
        returnType: (data, type) => data.affinityBubbles01,
      },
      contentTable01: {
        sp: GeneralBenchCall,
        cacheName: "_generalBench",
        returnType: (data, type) => data.contentTable01,
      },
      contentTable02: {
        sp: postCall,
        cacheName: "_postBench",
        returnType: (data, type) => data.contentTable02,
      },
      contentList01: {
        sp: keywordsCall,
        cacheName: "_keywordBench",
        returnType: (data, type) =>
          orderBench(type[0], data.contentList01, "value"),
      },
      responseTable01: {
        sp: GeneralBenchCall,
        cacheName: "_generalBench",
        returnType: (data, type) => data.responseTable01,
      },
      responseList01: {
        sp: keywordsCall,
        cacheName: "_keywordBench",
        returnType: (data, type) =>
          orderBench(type[0], data.responseList01, "value"),
      },
    },
  },
};
