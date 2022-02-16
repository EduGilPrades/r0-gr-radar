import { expect } from "chai";
import { AvoidMechProtocol } from "../../../src/service/protocols/AvoidMechProtocol";
import { FakeData } from "../helpers/FakeScans";

describe("AvoidMechProtocol", () => {
  let sut: AvoidMechProtocol;

  beforeEach(() => {
    sut = new AvoidMechProtocol();
  });

  it("should return only scans without mech enemy type", () => {
    let scans = FakeData.scans;
    let scansWithoutMech = FakeData.scansWithoutMech;
    const filteredScans = sut.apply(scans);
    expect(filteredScans).to.be.deep.eq(scansWithoutMech);
  });

  it("should return all scans if all enemies are mech type", () => {
    let scans = FakeData.scansWithMech;
    let scansWithMech = FakeData.scansWithMech;
    const filteredScans = sut.apply(scans);
    expect(filteredScans).to.be.deep.eq(scansWithMech);
  });
});
