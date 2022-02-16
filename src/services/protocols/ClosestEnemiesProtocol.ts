import { Scan } from "../../core/domain/types/Scan";
import { IProtocolUseCase } from "../../core/services/IProtocolUseCase";
import { getDistance } from "../../helpers/Helpers";

export class ClosestEnemiesProtocol implements IProtocolUseCase {
  public apply(scans: Scan[]): Scan[] {
    const orderedScansByDistance = scans.sort(
      (scanA, scanB) =>
        getDistance(scanA.coordinates) - getDistance(scanB.coordinates)
    );
    return orderedScansByDistance;
  }
}
