import { Protocol } from "../core/domain/types/Protocol";
import { Scan } from "../core/domain/types/Scan";
import { IProtocolUseCase } from "../core/services/IProtocolUseCase";
import { AssistAlliesProtocol } from "./protocols/AssitsAlliesProtocol";
import { AvoidCrossFireProtocol } from "./protocols/AvoidCrossFireProtocol";
import { AvoidMechProtocol } from "./protocols/AvoidMechProtocol";
import { ClosestEnemiesProtocol } from "./protocols/ClosestEnemiesProtocol";
import { FurthestEnemiesProtocol } from "./protocols/FurthestEnemiesProtocol";
import { PrioritizeMechProtocol } from "./protocols/PrioritizeMechProtocol";

export class FilterRadarInfoService {
  private protocolsActions: Map<string, IProtocolUseCase>;

  constructor(private protocols: Protocol[], private scans: Scan[]) {
    this.protocolsActions = new Map();
    this.protocolsActions.set(
      Protocol.ASSIST_ALLIES,
      new AssistAlliesProtocol()
    );
    this.protocolsActions.set(
      Protocol.AVOID_CROSSFIRE,
      new AvoidCrossFireProtocol()
    );
    this.protocolsActions.set(Protocol.AVOID_MECH, new AvoidMechProtocol());
    this.protocolsActions.set(
      Protocol.CLOSEST_ENEMIES,
      new ClosestEnemiesProtocol()
    );
    this.protocolsActions.set(
      Protocol.FURTHEST_ENEMIES,
      new FurthestEnemiesProtocol()
    );
    this.protocolsActions.set(
      Protocol.PRIORITIZE_MECH,
      new PrioritizeMechProtocol()
    );
  }

  public getBestTarget(): Scan {
    this.protocols.forEach((protocol) => {
      const protocolAction = this.protocolsActions.get(protocol);
      this.scans =
        protocolAction === undefined
          ? this.scans
          : protocolAction.apply(this.scans);
    });
    return this.scans[0];
  }
}
