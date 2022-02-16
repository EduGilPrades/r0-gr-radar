import { expect } from "chai";
import { PrioritizeMechProtocol } from "../../../src/service/protocols/PrioritizeMechProtocol";
import { FakeData } from "../../testHelpers/FakeScans";

describe("AvoidMechProtocol", () => {
  let sut: PrioritizeMechProtocol;

  beforeEach(() => {
    sut = new PrioritizeMechProtocol();
  });

  it("should return only scans without mech enemy type", () => {
    let scans = FakeData.scans;
    let scansWithMech = FakeData.scansWithMech;
    const filteredScans = sut.apply(scans);
    expect(filteredScans).to.be.deep.eq(scansWithMech);
  });

  it("should return all scans if no enemies are mech type", () => {
    let scans = FakeData.scansWithoutMech;
    let scansWithoutMech = FakeData.scansWithoutMech;
    const filteredScans = sut.apply(scans);
    expect(filteredScans).to.be.deep.eq(scansWithoutMech);
  });
});
