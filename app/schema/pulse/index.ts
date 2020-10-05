import { Instagram } from "./instagram/index";
import { ObjectType, Field } from "type-graphql";
import { Facebook } from "./facebook/index";
import { IsNull } from "../common/Options";
import { pulseIn } from "../../interfaces/pulse";
import { Youtube } from "./youtube/index";
import { Trends } from "./trends";
import { News } from "./news";
@ObjectType()
export class Pulse implements pulseIn {
  @Field((type) => Facebook, IsNull)
  facebook: Facebook;
  @Field((type) => Instagram, IsNull)
  instagram: Instagram;
  @Field((type) => Youtube, IsNull)
  youtube: Youtube;
  @Field((type) => Trends, IsNull)
  trends: Trends;
  @Field((type) => News, IsNull)
  news: News;
}
