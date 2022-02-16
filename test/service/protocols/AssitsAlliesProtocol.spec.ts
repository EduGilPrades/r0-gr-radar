import { expect } from "chai";
import { AssistAlliesProtocol } from "../../../src/service/protocols/AssitsAlliesProtocol";
import { FakeData } from "../../testHelpers/FakeScans";

describe("AssistsAlliesProtocol", () => {
  let sut: AssistAlliesProtocol;

  beforeEach(() => {
    sut = new AssistAlliesProtocol();
  });

  it("should return only scans with allies if some have allies", () => {
    let scans = FakeData.scans;
    let scansWithAllies = FakeData.scansWithAllies;
    const filteredScans = sut.apply(scans);
    expect(filteredScans).to.be.deep.eq(scansWithAllies);
  });

  it("should return all scans if there aren't allies", () => {
    let scans = FakeData.scansWithoutAllies;
    let scansWithoutAllies = FakeData.scansWithoutAllies;
    const filteredScans = sut.apply(scans);
    expect(filteredScans).to.be.deep.eq(scansWithoutAllies);
  });
});
