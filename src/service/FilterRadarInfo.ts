import { EnemiesType } from "../core/domain/types/EnemiesType";
import { Protocol } from "../core/domain/types/Protocol";
import { Scan } from "../core/domain/types/Scan";
import { IFilterRadarInfo } from "../core/service/IFilterRadarInfo";
import { getDistance } from "../helpers/Helpers";

export class FilterRadarInfo implements IFilterRadarInfo {
  constructor(private scans: Scan[]) {}

  filterAllies(protocol: Protocol): Scan[] {
    const filteredScans =
      protocol === Protocol.AVOID_CROSSFIRE
        ? this.scans.filter((target) => target.allies !== undefined)
        : this.scans.filter((target) => target.allies === undefined);
    this.scans = filteredScans.length ? filteredScans : this.scans;
    return this.scans;
  }
  filterMech(protocol: Protocol): Scan[] {
    const filteredScans =
      protocol === Protocol.PRIORITIZE_MECH
        ? this.scans.filter(
            (target) => target.enemies.type === EnemiesType.MECH
          )
        : this.scans.filter(
            (target) => target.enemies.type !== EnemiesType.MECH
          );
    this.scans = filteredScans.length ? filteredScans : this.scans;
    return this.scans;
  }
  orderByDistance(protocol: Protocol): Scan[] {
    const orderedScansByDistance =
      protocol === Protocol.CLOSEST_ENEMIES
        ? this.scans.sort(
            (scanA, scanB) =>
              getDistance(scanA.coordinates) - getDistance(scanB.coordinates)
          )
        : this.scans.sort(
            (scanA, scanB) =>
              getDistance(scanB.coordinates) - getDistance(scanA.coordinates)
          );
    this.scans = orderedScansByDistance;
    return this.scans;
  }
  getFilteredScans(): Scan[] {
    return this.scans;
  }
}
