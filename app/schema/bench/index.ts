import { ObjectType, Field } from "type-graphql";
import { FacebookBench } from "./facebook/index";
import { IsNull } from "../common/Options";
import { benchIn } from "../../interfaces/bench";

@ObjectType()
export class Bench implements benchIn {
  @Field((type) => FacebookBench, IsNull)
  facebook: FacebookBench;
}
