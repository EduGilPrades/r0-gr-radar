import { Coordinates } from "../core/domain/types/Coordinates";

export function getDistance({ x, y }: Coordinates): number {
  const distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  return distance;
}
