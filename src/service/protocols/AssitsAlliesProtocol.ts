import { IProtocolUseCase } from "../../core/services/IProtocolUseCase";
import { Scan } from "../../core/domain/types/Scan";

export class AssistAlliesProtocol implements IProtocolUseCase {
  public apply(scans: Scan[]): Scan[] {
    const filteredScans = scans.filter((target) => target.allies !== undefined);
    return filteredScans.length ? filteredScans : scans;
  }
}
