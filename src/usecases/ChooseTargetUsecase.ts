import { Coordinates } from "../core/domain/types/Coordinates";
import { RadarInfo } from "../core/domain/types/RadarInfo";

export class ChooseTargetUsecase {
  public execute(radarInfo: RadarInfo): Coordinates {
    console.log(radarInfo);
    return { x: 10, y: 10 };
  }
}
