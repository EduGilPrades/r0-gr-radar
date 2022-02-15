import { Protocol } from "./Protocol";
import { Scan } from "./Scan";

export type RadarInfo = {
  protocols: [Protocol];
  scan: [Scan];
};
