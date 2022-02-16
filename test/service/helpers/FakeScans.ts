import { EnemiesType } from "../../../src/core/domain/types/EnemiesType";
import { Scan } from "../../../src/core/domain/types/Scan";

export class FakeData {
  public static scans: Scan[] = [
    {
      enemies: { number: 1, type: "mech" as EnemiesType },
      coordinates: { x: 89, y: 13 },
    },
    {
      enemies: { type: "mech" as EnemiesType, number: 10 },
      allies: 3,
      coordinates: { y: 35, x: 11 },
    },
    {
      enemies: { type: "soldier" as EnemiesType, number: 10 },
      coordinates: { y: 49, x: 19 },
    },
    {
      enemies: { type: "soldier" as EnemiesType, number: 30 },
      allies: 5,
      coordinates: { y: 21, x: 38 },
    },
    {
      enemies: { number: 30, type: "soldier" as EnemiesType },
      allies: 8,
      coordinates: { x: 10, y: 39 },
    },
    {
      enemies: { type: "soldier" as EnemiesType, number: 15 },
      coordinates: { x: 13, y: 38 },
    },
    {
      enemies: { number: 60, type: "soldier" as EnemiesType },
      coordinates: { x: 13, y: 15 },
    },
    {
      enemies: { number: 40, type: "soldier" as EnemiesType },
      coordinates: { y: 19, x: 30 },
    },
    {
      coordinates: { x: 30, y: 11 },
      enemies: { number: 20, type: "soldier" as EnemiesType },
    },
    {
      coordinates: { x: 15, y: 19 },
      allies: 11,
      enemies: { number: 80, type: "soldier" as EnemiesType },
    },
  ];

  public static scansWithAllies: Scan[] = [
    {
      enemies: { type: "mech" as EnemiesType, number: 10 },
      allies: 3,
      coordinates: { y: 35, x: 11 },
    },
    {
      enemies: { type: "soldier" as EnemiesType, number: 30 },
      allies: 5,
      coordinates: { y: 21, x: 38 },
    },
    {
      enemies: { number: 30, type: "soldier" as EnemiesType },
      allies: 8,
      coordinates: { x: 10, y: 39 },
    },
    {
      coordinates: { x: 15, y: 19 },
      allies: 11,
      enemies: { number: 80, type: "soldier" as EnemiesType },
    },
  ];
  public static scansWithoutAllies: Scan[] = [
    {
      enemies: { number: 1, type: "mech" as EnemiesType },
      coordinates: { x: 89, y: 13 },
    },
    {
      enemies: { type: "soldier" as EnemiesType, number: 10 },
      coordinates: { y: 49, x: 19 },
    },
    {
      enemies: { type: "soldier" as EnemiesType, number: 15 },
      coordinates: { x: 13, y: 38 },
    },
    {
      enemies: { number: 60, type: "soldier" as EnemiesType },
      coordinates: { x: 13, y: 15 },
    },
    {
      enemies: { number: 40, type: "soldier" as EnemiesType },
      coordinates: { y: 19, x: 30 },
    },
    {
      coordinates: { x: 30, y: 11 },
      enemies: { number: 20, type: "soldier" as EnemiesType },
    },
  ];
  public static scansWithoutMech: Scan[] = [
    {
      enemies: { type: "soldier" as EnemiesType, number: 10 },
      coordinates: { y: 49, x: 19 },
    },
    {
      enemies: { type: "soldier" as EnemiesType, number: 30 },
      allies: 5,
      coordinates: { y: 21, x: 38 },
    },
    {
      enemies: { number: 30, type: "soldier" as EnemiesType },
      allies: 8,
      coordinates: { x: 10, y: 39 },
    },
    {
      enemies: { type: "soldier" as EnemiesType, number: 15 },
      coordinates: { x: 13, y: 38 },
    },
    {
      enemies: { number: 60, type: "soldier" as EnemiesType },
      coordinates: { x: 13, y: 15 },
    },
    {
      enemies: { number: 40, type: "soldier" as EnemiesType },
      coordinates: { y: 19, x: 30 },
    },
    {
      coordinates: { x: 30, y: 11 },
      enemies: { number: 20, type: "soldier" as EnemiesType },
    },
    {
      coordinates: { x: 15, y: 19 },
      allies: 11,
      enemies: { number: 80, type: "soldier" as EnemiesType },
    },
  ];
  public static scansWithMech: Scan[] = [
    {
      enemies: { number: 1, type: "mech" as EnemiesType },
      coordinates: { x: 89, y: 13 },
    },
    {
      enemies: { type: "mech" as EnemiesType, number: 10 },
      allies: 3,
      coordinates: { y: 35, x: 11 },
    },
  ];
  public static scansOrderedClosestFirst: Scan[] = [
    {
      enemies: { number: 60, type: "soldier" as EnemiesType },
      coordinates: { x: 13, y: 15 },
    },
    {
      coordinates: { x: 15, y: 19 },
      allies: 11,
      enemies: { number: 80, type: "soldier" as EnemiesType },
    },
    {
      coordinates: { x: 30, y: 11 },
      enemies: { number: 20, type: "soldier" as EnemiesType },
    },
    {
      enemies: { number: 40, type: "soldier" as EnemiesType },
      coordinates: { y: 19, x: 30 },
    },
    {
      enemies: { type: "mech" as EnemiesType, number: 10 },
      allies: 3,
      coordinates: { y: 35, x: 11 },
    },
    {
      enemies: { type: "soldier" as EnemiesType, number: 15 },
      coordinates: { x: 13, y: 38 },
    },
    {
      enemies: { number: 30, type: "soldier" as EnemiesType },
      allies: 8,
      coordinates: { x: 10, y: 39 },
    },
    {
      enemies: { type: "soldier" as EnemiesType, number: 30 },
      allies: 5,
      coordinates: { y: 21, x: 38 },
    },
    {
      enemies: { type: "soldier" as EnemiesType, number: 10 },
      coordinates: { y: 49, x: 19 },
    },
    {
      enemies: { number: 1, type: "mech" as EnemiesType },
      coordinates: { x: 89, y: 13 },
    },
  ];
}
