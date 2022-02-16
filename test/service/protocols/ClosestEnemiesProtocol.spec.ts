import { expect } from "chai";
import { ClosestEnemiesProtocol } from "../../../src/service/protocols/ClosestEnemiesProtocol";
import { FakeData } from "../helpers/FakeScans";

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
