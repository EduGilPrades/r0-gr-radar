import { expect } from "chai";
import { Protocol } from "../../src/core/domain/types/Protocol";
import { Scan } from "../../src/core/domain/types/Scan";
import { FilterRadarInfoService } from "../../src/service/FilterRadarInfoService";
import { FakeData } from "../testHelpers/FakeScans";

describe("FilterRadarInfoService", () => {
  let scans: Scan[];
  let sut: FilterRadarInfoService;

  beforeEach(() => {
    scans = FakeData.scans;
  });

  it("should return only one filtered scan when filter scans", () => {
    let protocols: Protocol[] = [Protocol.ASSIST_ALLIES, Protocol.AVOID_MECH];
    let filteredScan = {
      enemies: { type: "soldier", number: 30 },
      allies: 5,
      coordinates: { y: 21, x: 38 },
    };

    sut = new FilterRadarInfoService(protocols, scans);

    const bestTarget: Scan = sut.getBestTarget();
    expect(bestTarget).to.be.deep.eq(filteredScan);
  });
});
