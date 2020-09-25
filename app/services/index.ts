import { orderBench } from "../helpers/common/orderResults";
import logger from "../helpers/logins/login.helper";
import { DateRange } from "./../schema/common/Arguments";
import { GeneralBenchCall } from "./bench/facebook/general";
import { keywordsCall } from "./bench/facebook/keywords";
import { postCall } from "./bench/facebook/post";
import { readBestMomentsIGCall } from "./pulse/instagram/readBestMomentsIg";
import { readInteractiosIgCall } from "./pulse/instagram/readInteractionsIg";
import { readPostIgCall } from "./pulse/instagram/readPostIg";
import { readTopIgCall } from "./pulse/instagram/readTopIg";
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
  pulse: {
    instagram: {
      generalInt01: {
        sp: readTopIgCall,
        cacheName: "_readTopIg",
        returnType: (data, type) => data.generalInt01,
      },
      generalInt02: {
        sp: readPostIgCall,
        cacheName: "_readPostIg",
        returnType: (data, type) => data.generalInt02,
      },
      generalString01: {
        sp: readInteractiosIgCall,
        cacheName: "_readInteractiosIg",
        returnType: (data, type) => data.generalString01,
      },
      generalValuePrev01: {
        sp: readBestMomentsIGCall,
        cacheName: "_readBestMomentsIG",
        returnType: (data, type) => data.generalValuePrev01,
      },
      /*
      generalValuePrev02
      generalValuePrev03
      generalValuePrev04
      communitySmall01
      communitySmall02
      communityValuePrev01
      communityValuePrev02
      communityComp01
      communityBar01
      communityDonutDetail01
      communityListPrev01
      communityGeo01
      communityTop01
      activitySmall01
      activitySmall02
      activitySmall03
      activitySmall04
      activityComp01
      activitySmall05
      activitySmall06
      activitySmall07
      activitySmall08
      activityTable01
      affinitySmall01
      affinitySmall02
      affinitySmall03
      affinitySmall04
      affinityComp01
      affinitySmall05
      affinitySmall06
      affinitySmall07
      affinitySmall08
      affinityDonutDetail01
      affinityList01
      affinityBubbles01
      affinityComp03
      affinityComp04
      affinityBar03
      contentList01
      contentPost01
      contentTable01
      conversationList01
      conversationSmall01
      conversationSmall02
      conversationSmall03
      conversationSmall04
      conversationBar01
      conversationList02
      conversationTitleText03
      conversationTitleText04
      conversationTitleText05
      conversationString01
      */
    },
  },
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
