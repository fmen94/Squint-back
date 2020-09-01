import { youtubeIn } from "./youtube/index";
import { instagramIn } from "./instagram/index";
import { facebookIn } from "./facebook";
import { trendsIn } from "./trends";

export interface pulseIn {
  facebook: facebookIn;
  instagram: instagramIn;
  youtube: youtubeIn;
  trends: trendsIn;
}
