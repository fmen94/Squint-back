import { ObjectType, Field } from "type-graphql";
import { IsNull } from "../../common/Options";
import {
  valueDiff,
  kindIntValues,
  smailCard,
  donutDetail,
  nameValueDiff,
  kindValue,
  kindDateValue,
  kindNameValue,
  postFB,
  titleText,
  geoCard,
} from "../../common/Common";
import { trendsIn } from "../../../interfaces/pulse/trends";
@ObjectType()
export class Trends implements trendsIn {
  @Field(IsNull)
  intCard: Number;
  @Field((type) => smailCard, IsNull)
  smallCard: smailCard;
  @Field((type) => [nameValueDiff], IsNull)
  compCard: [nameValueDiff];
  @Field((type) => [nameValueDiff], IsNull)
  listPrevCard: [nameValueDiff];
  @Field((type) => [geoCard], IsNull)
  geoCard: [geoCard];
  @Field((type) => [kindValue], IsNull)
  listCard: [kindValue];
}
