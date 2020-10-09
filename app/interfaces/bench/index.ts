import { facebookBenchIn } from "./facebook";
import { instagramBenchIn } from "./instagram";
import { youtubeBenchIn } from "./youtube";

export interface benchIn {
  facebook: facebookBenchIn;
  instagram: instagramBenchIn;
  youtube: youtubeBenchIn;
}
