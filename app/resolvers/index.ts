/**
 * En este Archivo se hacen todas las importaciones de los resolutores
 */

//Pulse
import { PulseFieldResolver, PulseResolver } from "./pulse/index";
//facebook
import { PulseFacebookResolver } from "./pulse/facebook/index";
import { BuildSchemaOptions } from "type-graphql";
import { PulseInstagramResolver } from "./pulse/instagram/index";
import { PulseYoutubeResolver } from "./pulse/youtube";
import { PulseTrendsResolver } from "./pulse/trends";
import { PulseNewsResolver } from "./pulse/news";
import { BenchFieldResolver, BenchResolver } from "./bench";
import { BenchFacebookResolver } from "./bench/facebook";
import { BenchInstagramResolver } from "./bench/instagram";
import { BenchYoutubeResolver } from "./bench/youtube";
export const SchemaOptions: BuildSchemaOptions = {
  resolvers: [
    PulseFieldResolver,
    PulseResolver,
    PulseFacebookResolver,
    PulseInstagramResolver,
    PulseYoutubeResolver,
    PulseTrendsResolver,
    PulseNewsResolver,

    //bench
    BenchResolver,
    BenchFieldResolver,
    BenchFacebookResolver,
    BenchInstagramResolver,
    BenchYoutubeResolver,
  ],
};
