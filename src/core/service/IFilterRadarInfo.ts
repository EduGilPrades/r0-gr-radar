import { Protocol } from "../domain/types/Protocol";
import { Scan } from "../domain/types/Scan";

export interface IFilterRadarInfo {
  filterAllies(protocol: Protocol): Scan[];
  filterMech(protocol: Protocol): Scan[];
  orderByDistance(protocol: Protocol): Scan[];
}
