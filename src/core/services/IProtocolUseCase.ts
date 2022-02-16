import { Scan } from "../domain/types/Scan";

export interface IProtocolUseCase {
  apply(scans: Scan[]): Scan[];
}
