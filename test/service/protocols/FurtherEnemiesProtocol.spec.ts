import { expect } from "chai";
import { FurthestEnemiesProtocol } from "../../../src/service/protocols/FurthestEnemiesProtocol";
import { FakeData } from "../helpers/FakeScans";

describe("FurthestEnemiesProtocol", () => {
  let sut: FurthestEnemiesProtocol;

  beforeEach(() => {
    sut = new FurthestEnemiesProtocol();
  });

  it("should return scans ordered by proximity furthest first", () => {
    let scans = FakeData.scans;
    let scanOrderedFurthestFirst = FakeData.scansOrderedFurthestFirst;
    const orderedScans = sut.apply(scans);
    expect(orderedScans).to.be.deep.eq(scanOrderedFurthestFirst);
  });
});
