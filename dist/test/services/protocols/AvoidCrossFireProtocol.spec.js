"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var AvoidCrossFireProtocol_1 = require("../../../src/services/protocols/AvoidCrossFireProtocol");
var FakeScans_1 = require("../../testHelpers/FakeScans");
describe("AvoidCrossFireProtocol", function () {
    var sut;
    beforeEach(function () {
        sut = new AvoidCrossFireProtocol_1.AvoidCrossFireProtocol();
    });
    it("should return only scans without allies if some have allies", function () {
        var scans = FakeScans_1.FakeData.scans;
        var scansWithoutAllies = FakeScans_1.FakeData.scansWithoutAllies;
        var filteredScans = sut.apply(scans);
        (0, chai_1.expect)(filteredScans).to.be.deep.eq(scansWithoutAllies);
    });
    it("should return all scans if all have allies", function () {
        var scans = FakeScans_1.FakeData.scansWithAllies;
        var scansWithAllies = FakeScans_1.FakeData.scansWithAllies;
        var filteredScans = sut.apply(scans);
        (0, chai_1.expect)(filteredScans).to.be.deep.eq(scansWithAllies);
    });
});
//# sourceMappingURL=AvoidCrossFireProtocol.spec.js.map