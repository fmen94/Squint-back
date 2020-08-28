import { youtubeIn } from "./youtube/index";
import { instagramIn } from "./instagram/index";
import { facebookIn } from "./facebook";

export interface pulseIn {
  facebook: facebookIn;
  instagram: instagramIn;
  youtube: youtubeIn;
}
