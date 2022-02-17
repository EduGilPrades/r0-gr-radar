"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var AssitsAlliesProtocol_1 = require("../../../src/services/protocols/AssitsAlliesProtocol");
var FakeScans_1 = require("../../testHelpers/FakeScans");
describe("AssistsAlliesProtocol", function () {
    var sut;
    beforeEach(function () {
        sut = new AssitsAlliesProtocol_1.AssistAlliesProtocol();
    });
    it("should return only scans with allies if some have allies", function () {
        var scans = FakeScans_1.FakeData.scans;
        var scansWithAllies = FakeScans_1.FakeData.scansWithAllies;
        var filteredScans = sut.apply(scans);
        (0, chai_1.expect)(filteredScans).to.be.deep.eq(scansWithAllies);
    });
    it("should return all scans if there aren't allies", function () {
        var scans = FakeScans_1.FakeData.scansWithoutAllies;
        var scansWithoutAllies = FakeScans_1.FakeData.scansWithoutAllies;
        var filteredScans = sut.apply(scans);
        (0, chai_1.expect)(filteredScans).to.be.deep.eq(scansWithoutAllies);
    });
});
//# sourceMappingURL=AssitsAlliesProtocol.spec.js.map