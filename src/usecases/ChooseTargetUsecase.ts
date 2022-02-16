import { Coordinates } from "../core/domain/types/Coordinates";
import { EnemiesType } from "../core/domain/types/EnemiesType";
import { Protocol } from "../core/domain/types/Protocol";
import { RadarInfo } from "../core/domain/types/RadarInfo";
import { Scan } from "../core/domain/types/Scan";
import { getDistance } from "../helpers/Helpers";
import { FilterRadarInfo } from "../service/FilterRadarInfo";

export class ChooseTargetUsecase {
  public execute(radarInfo: RadarInfo): Coordinates {
    const protocols = Object.values(radarInfo.protocols);
    const filterRadarInfo = new FilterRadarInfo(radarInfo.scan);

    protocols.forEach((protocol) => {
      protocol === Protocol.ASSIST_ALLIES ||
      protocol === Protocol.AVOID_CROSSFIRE
        ? filterRadarInfo.filterAllies(protocol)
        : protocol === Protocol.AVOID_MECH ||
          protocol === Protocol.PRIORITIZE_MECH
        ? filterRadarInfo.filterMech(protocol)
        : filterRadarInfo.orderByDistance(protocol);
    });
    const filteredScans = filterRadarInfo.getFilteredScans();
    const bestTarget = filteredScans[0];
    return bestTarget.coordinates;
  }
}
