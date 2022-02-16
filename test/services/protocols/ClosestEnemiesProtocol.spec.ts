import { expect } from "chai";
import { ClosestEnemiesProtocol } from "../../../src/services/protocols/ClosestEnemiesProtocol";
import { FakeData } from "../../testHelpers/FakeScans";

describe("ClosestEnemiesProtocol", () => {
  let sut: ClosestEnemiesProtocol;

  beforeEach(() => {
    sut = new ClosestEnemiesProtocol();
  });

  it("should return only scans ordered by proximity closest first", () => {
    let scans = FakeData.scans;
    let scanOrderedClosestFirst = FakeData.scansOrderedClosestFirst;
    const orderedScans = sut.apply(scans);
    expect(orderedScans).to.be.deep.eq(scanOrderedClosestFirst);
  });
});
