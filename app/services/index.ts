import { orderBench, orderResults } from "../helpers/common/orderResults";
import logger from "../helpers/logins/login.helper";
import { DateRange } from "./../schema/common/Arguments";
import { GeneralBenchCall } from "./bench/facebook/general";
import { keywordsCall } from "./bench/facebook/keywords";
import { postCall } from "./bench/facebook/post";
import { GeneralBenchIgCall } from "./bench/instagram/general";
import { keywordsIgCall } from "./bench/instagram/keywords";
import { postIgCall } from "./bench/instagram/post";
import { GeneralBenchYtCall } from "./bench/youtube/general";
import { keywordsYtCall } from "./bench/youtube/keywords";
import { postYtCall } from "./bench/youtube/post";
import { communityGenderCall } from "./pulse/facebook/communityGender";
import { communityGeoCall } from "./pulse/facebook/communityGeo";
import { sourseValueCall } from "./pulse/facebook/sourseValue";
import { readBestMomentsIGCall } from "./pulse/instagram/readBestMomentsIg";
import { readInteractiosIgCall } from "./pulse/instagram/readInteractionsIg";
import { readPostIgCall } from "./pulse/instagram/readPostIg";
import { readTopIgCall } from "./pulse/instagram/readTopIg";
import { readBestMomentsYtCall } from "./pulse/youtube/readBestMomentsYt";
import { readDetailsYtCall } from "./pulse/youtube/readDetailsYt";
import { readPostYtCall } from "./pulse/youtube/readPostYt";
import { readTopYtCall } from "./pulse/youtube/readTopYt";
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
        sp: readTopIgCall,
        cacheName: "_readTopIg",
        returnType: (data, type) => data.generalInt02,
      },
      generalString01: {
        sp: readTopIgCall,
        cacheName: "_readTopIg",
        returnType: (data, type) => data.generalString01,
      },
      generalValuePrev01: {
        sp: readTopIgCall,
        cacheName: "_readTopIg",
        returnType: (data, type) => data.generalValuePrev01,
      },
      generalValuePrev02: {
        sp: readTopIgCall,
        cacheName: "_readTopIg",
        returnType: (data, type) => data.generalValuePrev02,
      },
      generalValuePrev03: {
        sp: readTopIgCall,
        cacheName: "_readTopIg",
        returnType: (data, type) => data.generalValuePrev03,
      },
      generalValuePrev04: {
        sp: readTopIgCall,
        cacheName: "_readTopIg",
        returnType: (data, type) => data.generalValuePrev04,
      },
      communitySmall01: {
        sp: readTopIgCall,
        cacheName: "_readTopIg",
        returnType: (data, type) => data.communitySmall01,
      },
      communitySmall02: {
        sp: readTopIgCall,
        cacheName: "_readTopIg",
        returnType: (data, type) => data.communitySmall02,
      },
      communityValuePrev01: {
        sp: readTopIgCall,
        cacheName: "_readTopIg",
        returnType: (data, type) => data.communityValuePrev01,
      },
      communityValuePrev02: {
        sp: readTopIgCall,
        cacheName: "_readTopIg",
        returnType: (data, type) => data.communityValuePrev02,
      },
      communityComp01: {
        sp: readTopIgCall,
        cacheName: "_readTopIg",
        returnType: (data, type) => data.comparation[type[0]],
      },
      communityBar01: {
        sp: communityGenderCall,
        cacheName: "_communityGender",
        returnType: (data, type) => data.communityBar01,
      },
      communityDonutDetail01: {
        sp: sourseValueCall,
        cacheName: "_sourseValue",
        returnType: (data, type) => data.communityDonutDetail01,
      },
      communityListPrev01: {
        sp: communityGeoCall,
        cacheName: "_communityGeo",
        returnType: (data, type) => data.communityListPrev01,
      },
      communityGeo01: {
        sp: communityGeoCall,
        cacheName: "_communityGeo",
        returnType: (data, type) => data.communityGeo01,
      },
      communityTop01: {
        sp: readInteractiosIgCall,
        cacheName: "_readInteractiosIg",
        returnType: (data, type) => data.communityTop01,
      },
      activitySmall01: {
        sp: readTopIgCall,
        cacheName: "_readTopIg",
        returnType: (data, type) => data.activitySmall01,
      },
      activitySmall02: {
        sp: readTopIgCall,
        cacheName: "_readTopIg",
        returnType: (data, type) => data.activitySmall02,
      },
      activitySmall03: {
        sp: readTopIgCall,
        cacheName: "_readTopIg",
        returnType: (data, type) => data.activitySmall03,
      },
      activitySmall04: {
        sp: readTopIgCall,
        cacheName: "_readTopIg",
        returnType: (data, type) => data.activitySmall04,
      },
      activityComp01: {
        sp: readTopIgCall,
        cacheName: "_readTopIg",
        returnType: (data, type) => data.comparation[type[0]],
      },
      activitySmall05: {
        sp: readTopIgCall,
        cacheName: "_readTopIg",
        returnType: (data, type) => data.activitySmall05,
      },
      activitySmall06: {
        sp: readTopIgCall,
        cacheName: "_readTopIg",
        returnType: (data, type) => data.activitySmall06,
      },
      activitySmall07: {
        sp: readTopIgCall,
        cacheName: "_readTopIg",
        returnType: (data, type) => data.activitySmall07,
      },
      activitySmall08: {
        sp: readTopIgCall,
        cacheName: "_readTopIg",
        returnType: (data, type) => data.activitySmall08,
      },
      activityTable01: {
        sp: readPostIgCall,
        cacheName: "_readPostIg",
        returnType: (data, type) => data.activityTable01,
      },
      affinitySmall01: {
        sp: readTopIgCall,
        cacheName: "_readTopIg",
        returnType: (data, type) => data.affinitySmall01,
      },
      affinitySmall02: {
        sp: readTopIgCall,
        cacheName: "_readTopIg",
        returnType: (data, type) => data.affinitySmall02,
      },
      affinitySmall03: {
        sp: readTopIgCall,
        cacheName: "_readTopIg",
        returnType: (data, type) => data.affinitySmall03,
      },
      affinitySmall04: {
        sp: readTopIgCall,
        cacheName: "_readTopIg",
        returnType: (data, type) => data.affinitySmall04,
      },
      affinityComp01: {
        sp: readTopIgCall,
        cacheName: "_readTopIg",
        returnType: (data, type) => data.comparation[type[0]],
      },
      affinitySmall05: {
        sp: readTopIgCall,
        cacheName: "_readTopIg",
        returnType: (data, type) => data.affinitySmall05,
      },
      affinitySmall06: {
        sp: readTopIgCall,
        cacheName: "_readTopIg",
        returnType: (data, type) => data.affinitySmall06,
      },
      affinitySmall07: {
        sp: readTopIgCall,
        cacheName: "_readTopIg",
        returnType: (data, type) => data.affinitySmall07,
      },
      affinitySmall08: {
        sp: readTopIgCall,
        cacheName: "_readTopIg",
        returnType: (data, type) => data.affinitySmall08,
      },
      affinityDonutDetail01: {
        sp: readBestMomentsIGCall,
        cacheName: "_readBestMomentsIG",
        returnType: (data, type) => data.affinityDonutDetail01,
      },
      affinityList01: {
        sp: readBestMomentsIGCall,
        cacheName: "_readBestMomentsIG",
        returnType: (data, type) => data.affinityList01,
      },
      affinityBubbles01: {
        sp: readPostIgCall,
        cacheName: "_readPostIg",
        returnType: (data, type) => data.affinityBubbles01,
      },
      affinityComp02: {
        sp: readTopIgCall,
        cacheName: "_readTopIg",
        returnType: (data, type) => data.comparation[type[0]],
      },
      affinityComp03: {
        sp: readTopIgCall,
        cacheName: "_readTopIg",
        returnType: (data, type) => data.comparation[type[0]],
      },
      affinityBar03: {
        sp: readBestMomentsIGCall,
        cacheName: "_readBestMomentsIG",
        returnType: (data, type) => data.affinityBar03,
      },
      contentList01: {
        sp: readBestMomentsIGCall,
        cacheName: "_readBestMomentsIG",
        returnType: (data, type) => data.contentList01,
      },
      contentPost01: {
        sp: readPostIgCall,
        cacheName: "_readPostIg",
        returnType: (data, type) => data.contentPost01,
      },
      contentTable01: {
        sp: readPostIgCall,
        cacheName: "_readPostIg",
        returnType: (data, type) => data.contentTable01,
      },
      conversationList01: {
        sp: readBestMomentsIGCall,
        cacheName: "_readBestMomentsIG",
        returnType: (data, type) => data.conversationList01,
      },
      conversationSmall01: {
        sp: readTopIgCall,
        cacheName: "_readTopIg",
        returnType: (data, type) => data.conversationSmall01,
      },
      conversationSmall02: {
        sp: readTopIgCall,
        cacheName: "_readTopIg",
        returnType: (data, type) => data.conversationSmall02,
      },
      conversationSmall03: {
        sp: readTopIgCall,
        cacheName: "_readTopIg",
        returnType: (data, type) => data.conversationSmall03,
      },
      conversationSmall04: {
        sp: readTopIgCall,
        cacheName: "_readTopIg",
        returnType: (data, type) => data.conversationSmall04,
      },
      conversationBar01: {
        sp: readTopIgCall,
        cacheName: "_readTopIg",
        returnType: (data, type) => data.conversationBar01,
      },
      conversationList02: {
        sp: readTopIgCall,
        cacheName: "_readTopIg",
        returnType: (data, type) =>
          orderResults(type[0], data.conversationList02, "value"),
      },
      conversationTitleText01: {
        sp: readBestMomentsIGCall,
        cacheName: "_readBestMomentsIG",
        returnType: (data, type) => data.conversationTitleText01,
      },
      conversationTitleText02: {
        sp: readBestMomentsIGCall,
        cacheName: "_readBestMomentsIG",
        returnType: (data, type) => data.conversationTitleText02,
      },
      conversationTitleText03: {
        sp: readBestMomentsIGCall,
        cacheName: "_readBestMomentsIG",
        returnType: (data, type) => data.conversationTitleText03,
      },
      conversationString01: {
        sp: readBestMomentsIGCall,
        cacheName: "_readBestMomentsIG",
        returnType: (data, type) => data.conversationString01,
      },
    },
    youtube: {
      generalInt01: {
        sp: readTopYtCall,
        cacheName: "_readTopYt",
        returnType: (data, type) => data.generalInt01,
      },
      generalInt02: {
        sp: readTopYtCall,
        cacheName: "_readTopYt",
        returnType: (data, type) => data.generalInt02,
      },
      generalString01: {
        sp: readTopYtCall,
        cacheName: "_readTopYt",
        returnType: (data, type) => data.generalString01,
      },
      generalValuePrev01: {
        sp: readTopYtCall,
        cacheName: "_readTopYt",
        returnType: (data, type) => data.generalValuePrev01,
      },
      generalValuePrev02: {
        sp: readTopYtCall,
        cacheName: "_readTopYt",
        returnType: (data, type) => data.generalValuePrev02,
      },
      generalValuePrev03: {
        sp: readTopYtCall,
        cacheName: "_readTopYt",
        returnType: (data, type) => data.generalValuePrev03,
      },
      generalValuePrev04: {
        sp: readTopYtCall,
        cacheName: "_readTopYt",
        returnType: (data, type) => data.generalValuePrev04,
      },
      communitySmall01: {
        sp: readTopYtCall,
        cacheName: "_readTopYt",
        returnType: (data, type) => data.communitySmall01,
      },
      communitySmall02: {
        sp: readTopYtCall,
        cacheName: "_readTopYt",
        returnType: (data, type) => data.communitySmall02,
      },
      communityValuePrev01: {
        sp: readTopYtCall,
        cacheName: "_readTopYt",
        returnType: (data, type) => data.communityValuePrev01,
      },
      communityValuePrev02: {
        sp: readTopYtCall,
        cacheName: "_readTopYt",
        returnType: (data, type) => data.communityValuePrev02,
      },
      communityComp01: {
        sp: readTopYtCall,
        cacheName: "_readTopYt",
        returnType: (data, type) => data.communityComp01,
      },
      communityBar01: {
        sp: communityGenderCall,
        cacheName: "_communityGender",
        returnType: (data, type) => data.communityBar01,
      },
      communityDonutDetail01: {
        sp: sourseValueCall,
        cacheName: "_sourseValue",
        returnType: (data, type) => data.communityDonutDetail01,
      },
      communityListPrev01: {
        sp: communityGeoCall,
        cacheName: "_communityGeo",
        returnType: (data, type) => data.communityListPrev01,
      },
      communityGeo01: {
        sp: communityGeoCall,
        cacheName: "_communityGeo",
        returnType: (data, type) => data.communityGeo01,
      },
      communityBar02: {
        sp: readBestMomentsYtCall,
        cacheName: "_readBestMomentsYt",
        returnType: (data, type) => data.communityBar02,
      },
      desktopBar01: {
        sp: readBestMomentsYtCall,
        cacheName: "_readBestMomentsYt",
        returnType: (data, type) => data.desktopBar01,
      },
      communityList01: {
        sp: readBestMomentsYtCall,
        cacheName: "_readBestMomentsYt",
        returnType: (data, type) => data.communityList01,
      },
      activitySmall01: {
        sp: readTopYtCall,
        cacheName: "_readTopYt",
        returnType: (data, type) => data.activitySmall01,
      },
      activitySmall02: {
        sp: readTopYtCall,
        cacheName: "_readTopYt",
        returnType: (data, type) => data.activitySmall02,
      },
      activitySmall03: {
        sp: readTopYtCall,
        cacheName: "_readTopYt",
        returnType: (data, type) => data.activitySmall03,
      },
      activitySmall04: {
        sp: readTopYtCall,
        cacheName: "_readTopYt",
        returnType: (data, type) => data.activitySmall04,
      },
      activityComp01: {
        sp: readTopYtCall,
        cacheName: "_readTopYt",
        returnType: (data, type) => data.activityComp01,
      },
      activitySmall05: {
        sp: readTopYtCall,
        cacheName: "_readTopYt",
        returnType: (data, type) => data.activitySmall05,
      },
      activitySmall06: {
        sp: readTopYtCall,
        cacheName: "_readTopYt",
        returnType: (data, type) => data.activitySmall06,
      },
      activitySmall07: {
        sp: readTopYtCall,
        cacheName: "_readTopYt",
        returnType: (data, type) => data.activitySmall07,
      },
      activitySmall08: {
        sp: readTopYtCall,
        cacheName: "_readTopYt",
        returnType: (data, type) => data.activitySmall08,
      },
      activityTable01: {
        sp: readPostYtCall,
        cacheName: "_readPostYt",
        returnType: (data, type) => data.activityTable01,
      },
      affinitySmall01: {
        sp: readTopYtCall,
        cacheName: "_readTopYt",
        returnType: (data, type) => data.generalValuePrev01,
      },
      affinitySmall02: {
        sp: readTopYtCall,
        cacheName: "_readTopYt",
        returnType: (data, type) => data.affinitySmall02,
      },
      affinitySmall03: {
        sp: readTopYtCall,
        cacheName: "_readTopYt",
        returnType: (data, type) => data.affinitySmall03,
      },
      affinitySmall04: {
        sp: readTopYtCall,
        cacheName: "_readTopYt",
        returnType: (data, type) => data.affinitySmall04,
      },
      affinityComp01: {
        sp: readTopYtCall,
        cacheName: "_readTopYt",
        returnType: (data, type) => data.affinityComp01,
      },
      affinitySmall05: {
        sp: readTopYtCall,
        cacheName: "_readTopYt",
        returnType: (data, type) => data.affinitySmall05,
      },
      affinitySmall06: {
        sp: readTopYtCall,
        cacheName: "_readTopYt",
        returnType: (data, type) => data.affinitySmall06,
      },
      affinitySmall07: {
        sp: readTopYtCall,
        cacheName: "_readTopYt",
        returnType: (data, type) => data.affinitySmall07,
      },
      affinitySmall08: {
        sp: readTopYtCall,
        cacheName: "_readTopYt",
        returnType: (data, type) => data.affinitySmall08,
      },
      affinityComp02: {
        sp: readTopYtCall,
        cacheName: "_readTopYt",
        returnType: (data, type) => data.affinityComp02,
      },
      affinityBar01: {
        sp: readBestMomentsYtCall,
        cacheName: "_readBestMomentsYt",
        returnType: (data, type) => data.affinityBar01,
      },
      contentList01: {
        sp: readBestMomentsYtCall,
        cacheName: "_readBestMomentsYt",
        returnType: (data, type) => data.contentList01,
      },
      contentPost01: {
        sp: readPostYtCall,
        cacheName: "_readPostYt",
        returnType: (data, type) => data.contentPost01,
      },
      contentTable01: {
        sp: readPostYtCall,
        cacheName: "_readPostYt",
        returnType: (data, type) => data.contentTable01,
      },
      conversationList01: {
        sp: readBestMomentsYtCall,
        cacheName: "_readBestMomentsYt",
        returnType: (data, type) => data.conversationList01,
      },
      conversationSmall01: {
        sp: readTopYtCall,
        cacheName: "_readTopYt",
        returnType: (data, type) => data.conversationSmall01,
      },
      conversationBar01: {
        sp: readTopYtCall,
        cacheName: "_readTopYt",
        returnType: (data, type) => data.conversationBar01,
      },
      conversationList02: {
        sp: readTopYtCall,
        cacheName: "_readTopYt",
        returnType: (data, type) => data.conversationList02,
      },
      conversationTitleText01: {
        sp: readBestMomentsYtCall,
        cacheName: "_readBestMomentsYt",
        returnType: (data, type) => data.conversationTitleText01,
      },
      conversationTitleText02: {
        sp: readBestMomentsYtCall,
        cacheName: "_readBestMomentsYt",
        returnType: (data, type) => data.conversationTitleText02,
      },
      conversationTitleText03: {
        sp: readBestMomentsYtCall,
        cacheName: "_readBestMomentsYt",
        returnType: (data, type) => data.conversationTitleText03,
      },
      conversationString01: {
        sp: readBestMomentsYtCall,
        cacheName: "_readBestMomentsYt",
        returnType: (data, type) => data.conversationString01,
      },
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
    instagram: {
      generalTable01: {
        sp: GeneralBenchIgCall,
        cacheName: "_generalBenchIg",
        returnType: (data, type) => data.generalTable01,
      },
      activityPrevsValues01: {
        sp: GeneralBenchIgCall,
        cacheName: "_generalBenchIg",
        returnType: (data, type) => data.activityPrevsValues01[type[0]],
      },
      activityCopm01: {
        sp: GeneralBenchIgCall,
        cacheName: "_generalBenchIg",
        returnType: (data, type) => data.activityCopm01[type[0]],
      },
      performanceTable01: {
        sp: GeneralBenchIgCall,
        cacheName: "_generalBenchIg",
        returnType: (data, type) => data.performanceTable01,
      },
      performancesPrevsValues01: {
        sp: GeneralBenchIgCall,
        cacheName: "_generalBenchIg",
        returnType: (data, type) => data.performancesPrevsValues01[type[0]],
      },
      affinityBubbles01: {
        sp: GeneralBenchIgCall,
        cacheName: "_generalBenchIg",
        returnType: (data, type) => data.affinityBubbles01,
      },
      contentTable01: {
        sp: GeneralBenchIgCall,
        cacheName: "_generalBenchIg",
        returnType: (data, type) => data.contentTable01,
      },
      contentTable02: {
        sp: postIgCall,
        cacheName: "_postBenchIg",
        returnType: (data, type) => data.contentTable02,
      },
      contentList01: {
        sp: keywordsIgCall,
        cacheName: "_keywordBenchIg",
        returnType: (data, type) =>
          orderBench(type[0], data.contentList01, "value"),
      },
      responseTable01: {
        sp: GeneralBenchIgCall,
        cacheName: "_generalBenchIg",
        returnType: (data, type) => data.responseTable01,
      },
      responseList01: {
        sp: keywordsIgCall,
        cacheName: "_keywordBenchIg",
        returnType: (data, type) =>
          orderBench(type[0], data.responseList01, "value"),
      },
    },
    youtube: {
      generalTable01: {
        sp: GeneralBenchYtCall,
        cacheName: "_generalBenchYt",
        returnType: (data, type) => data.generalTable01,
      },
      activityPrevsValues01: {
        sp: GeneralBenchYtCall,
        cacheName: "_generalBenchYt",
        returnType: (data, type) => data.activityPrevsValues01[type[0]],
      },
      activityCopm01: {
        sp: GeneralBenchYtCall,
        cacheName: "_generalBenchYt",
        returnType: (data, type) => data.activityCopm01[type[0]],
      },
      performanceTable01: {
        sp: GeneralBenchYtCall,
        cacheName: "_generalBenchYt",
        returnType: (data, type) => data.performanceTable01,
      },
      performancesPrevsValues01: {
        sp: GeneralBenchYtCall,
        cacheName: "_generalBenchYt",
        returnType: (data, type) => data.performancesPrevsValues01[type[0]],
      },
      affinityBubbles01: {
        sp: GeneralBenchYtCall,
        cacheName: "_generalBenchYt",
        returnType: (data, type) => data.affinityBubbles01,
      },
      contentTable01: {
        sp: postYtCall,
        cacheName: "_postBenchYt",
        returnType: (data, type) => data.contentTable01,
      },
      contentList01: {
        sp: keywordsYtCall,
        cacheName: "_keywordBenchYt",
        returnType: (data, type) =>
          orderBench(type[0], data.contentList01, "value"),
      },
      responseTable01: {
        sp: GeneralBenchYtCall,
        cacheName: "_generalBenchYt",
        returnType: (data, type) => data.responseTable01,
      },
      responseList01: {
        sp: keywordsYtCall,
        cacheName: "_keywordBenchYt",
        returnType: (data, type) =>
          orderBench(type[0], data.responseList01, "value"),
      },
    },
  },
};
