import { ObjectType, Field } from "type-graphql";
import { IsNull } from "../../common/Options";
import { postNw } from "../../common/Common";
import { newsIn } from "../../../interfaces/pulse/news";
@ObjectType()
export class News implements newsIn {
  @Field(IsNull)
  stringCard: String;
  @Field((type) => [postNw], IsNull)
  postCard: [postNw];
}
