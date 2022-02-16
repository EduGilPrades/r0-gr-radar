import { Coordinates } from "./Coordinates";
import { Enemies } from "./Enemies";

export type Scan = {
  coordinates: Coordinates;
  enemies: Enemies;
  allies?: number;
};
