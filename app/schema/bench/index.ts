import { InstagramBench } from "./instagram/index";
import { ObjectType, Field } from "type-graphql";
import { FacebookBench } from "./facebook/index";
import { IsNull } from "../common/Options";
import { benchIn } from "../../interfaces/bench";
import { YoutubeBench } from "./youtube";

@ObjectType()
export class Bench implements benchIn {
  @Field((type) => FacebookBench, IsNull)
  facebook: FacebookBench;
  @Field((type) => InstagramBench, IsNull)
  instagram: InstagramBench;
  @Field((type) => YoutubeBench, IsNull)
  youtube: YoutubeBench;
}
