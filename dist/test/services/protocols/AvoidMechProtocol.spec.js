"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var AvoidMechProtocol_1 = require("../../../src/services/protocols/AvoidMechProtocol");
var FakeScans_1 = require("../../testHelpers/FakeScans");
describe("AvoidMechProtocol", function () {
    var sut;
    beforeEach(function () {
        sut = new AvoidMechProtocol_1.AvoidMechProtocol();
    });
    it("should return only scans without mech enemy type", function () {
        var scans = FakeScans_1.FakeData.scans;
        var scansWithoutMech = FakeScans_1.FakeData.scansWithoutMech;
        var filteredScans = sut.apply(scans);
        (0, chai_1.expect)(filteredScans).to.be.deep.eq(scansWithoutMech);
    });
    it("should return all scans if all enemies are mech type", function () {
        var scans = FakeScans_1.FakeData.scansWithMech;
        var scansWithMech = FakeScans_1.FakeData.scansWithMech;
        var filteredScans = sut.apply(scans);
        (0, chai_1.expect)(filteredScans).to.be.deep.eq(scansWithMech);
    });
});
//# sourceMappingURL=AvoidMechProtocol.spec.js.map