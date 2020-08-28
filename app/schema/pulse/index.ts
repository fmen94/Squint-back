import { Instagram } from "./instagram/index";
import { ObjectType, Field } from "type-graphql";
import { Facebook } from "./facebook/index";
import { IsNull } from "../common/Options";
import { pulseIn } from "../../interfaces/pulse";
import { Youtube } from "./youtube/index";
@ObjectType()
export class Pulse implements pulseIn {
  @Field((type) => Facebook, IsNull)
  facebook: Facebook;
  @Field((type) => Instagram, IsNull)
  instagram: Instagram;
  @Field((type) => Youtube, IsNull)
  youtube: Youtube;
}
