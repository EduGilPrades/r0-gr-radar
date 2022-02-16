import { expect } from "chai";
import { AvoidCrossFireProtocol } from "../../../src/services/protocols/AvoidCrossFireProtocol";
import { FakeData } from "../../testHelpers/FakeScans";

describe("AvoidCrossFireProtocol", () => {
  let sut: AvoidCrossFireProtocol;

  beforeEach(() => {
    sut = new AvoidCrossFireProtocol();
  });

  it("should return only scans without allies if some have allies", () => {
    let scans = FakeData.scans;
    let scansWithoutAllies = FakeData.scansWithoutAllies;
    const filteredScans = sut.apply(scans);
    expect(filteredScans).to.be.deep.eq(scansWithoutAllies);
  });

  it("should return all scans if all have allies", () => {
    let scans = FakeData.scansWithAllies;
    let scansWithAllies = FakeData.scansWithAllies;
    const filteredScans = sut.apply(scans);
    expect(filteredScans).to.be.deep.eq(scansWithAllies);
  });
});
