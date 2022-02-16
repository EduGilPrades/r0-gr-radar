import { EnemiesType } from "../../core/domain/types/EnemiesType";
import { Scan } from "../../core/domain/types/Scan";
import { IProtocolUseCase } from "../../core/services/IProtocolUseCase";

export class PrioritizeMechProtocol implements IProtocolUseCase {
  public apply(scans: Scan[]): Scan[] {
    const filteredScans = scans.filter(
      (target) => target.enemies.type === EnemiesType.MECH
    );
    return filteredScans.length ? filteredScans : scans;
  }
}
