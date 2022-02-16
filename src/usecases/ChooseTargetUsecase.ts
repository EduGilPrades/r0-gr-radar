import { Coordinates } from "../core/domain/types/Coordinates";
import { RadarInfo } from "../core/domain/types/RadarInfo";
import { FilterRadarInfoService } from "../service/FilterRadarInfoService";

export class ChooseTargetUsecase {
  public execute(radarInfo: RadarInfo): Coordinates {
    const filterRadarInfoService = new FilterRadarInfoService(
      radarInfo.protocols,
      radarInfo.scan
    );

    const bestTarget = filterRadarInfoService.getBestTarget();
    return bestTarget.coordinates;
  }
}
