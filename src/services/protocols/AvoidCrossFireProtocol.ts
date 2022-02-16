import { Scan } from "../../core/domain/types/Scan";
import { IProtocolUseCase } from "../../core/services/IProtocolUseCase";

export class AvoidCrossFireProtocol implements IProtocolUseCase {
  public apply(scans: Scan[]): Scan[] {
    const filteredScans = scans.filter((target) => target.allies === undefined);
    return filteredScans.length ? filteredScans : scans;
  }
}
