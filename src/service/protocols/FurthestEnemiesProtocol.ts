import { Scan } from "../../core/domain/types/Scan";
import { IProtocolUseCase } from "../../core/services/IProtocolUseCase";
import { getDistance } from "../../helpers/Helpers";

export class FurthestEnemiesProtocol implements IProtocolUseCase {
  public apply(scans: Scan[]): Scan[] {
    const orderedScansByDistance = scans.sort(
      (scanA, scanB) =>
        getDistance(scanB.coordinates) - getDistance(scanA.coordinates)
    );
    const filteredScans = orderedScansByDistance.filter(
      (scan) => getDistance(scan.coordinates) < 100
    );
    return filteredScans;
  }
}
