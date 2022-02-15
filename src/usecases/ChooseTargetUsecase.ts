import { Coordinates } from "../core/domain/types/Coordinates";
import { EnemiesType } from "../core/domain/types/EnemiesType";
import { Protocol } from "../core/domain/types/Protocol";
import { RadarInfo } from "../core/domain/types/RadarInfo";
import { Scan } from "../core/domain/types/Scan";
import { getDistance } from "../helpers/Helpers";

export class ChooseTargetUsecase {
  private scans: Scan[] = [];

  public execute(radarInfo: RadarInfo): Coordinates {
    const protocols = Object.values(radarInfo.protocols);
    this.scans = radarInfo.scan;

    protocols.forEach((protocol) => {
      const filteredScans =
        protocol === Protocol.ASSIST_ALLIES ||
        protocol === Protocol.AVOID_CROSSFIRE
          ? this.filterAllies(protocol)
          : protocol === Protocol.AVOID_MECH ||
            protocol === Protocol.PRIORITIZE_MECH
          ? this.filterMech(protocol)
          : this.orderByDistance(protocol);
      this.scans = filteredScans;
    });
    return this.scans[0].coordinates;
  }
  private filterAllies(protocol: Protocol) {
    const filteredScans =
      protocol === Protocol.AVOID_CROSSFIRE
        ? this.scans.filter((target) => target.allies !== undefined)
        : this.scans.filter((target) => target.allies === undefined);
    return filteredScans.length ? filteredScans : this.scans;
  }
  private filterMech(protocol: Protocol) {
    const filteredScans =
      protocol === Protocol.PRIORITIZE_MECH
        ? this.scans.filter(
            (target) => target.enemies.type === EnemiesType.MECH
          )
        : this.scans.filter(
            (target) => target.enemies.type !== EnemiesType.MECH
          );
    return filteredScans.length ? filteredScans : this.scans;
  }
  private orderByDistance(protocol: Protocol) {
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
    return orderedScansByDistance;
  }
}
