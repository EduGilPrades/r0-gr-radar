"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var PrioritizeMechProtocol_1 = require("../../../src/services/protocols/PrioritizeMechProtocol");
var FakeScans_1 = require("../../testHelpers/FakeScans");
describe("AvoidMechProtocol", function () {
    var sut;
    beforeEach(function () {
        sut = new PrioritizeMechProtocol_1.PrioritizeMechProtocol();
    });
    it("should return only scans without mech enemy type", function () {
        var scans = FakeScans_1.FakeData.scans;
        var scansWithMech = FakeScans_1.FakeData.scansWithMech;
        var filteredScans = sut.apply(scans);
        (0, chai_1.expect)(filteredScans).to.be.deep.eq(scansWithMech);
    });
    it("should return all scans if no enemies are mech type", function () {
        var scans = FakeScans_1.FakeData.scansWithoutMech;
        var scansWithoutMech = FakeScans_1.FakeData.scansWithoutMech;
        var filteredScans = sut.apply(scans);
        (0, chai_1.expect)(filteredScans).to.be.deep.eq(scansWithoutMech);
    });
});
//# sourceMappingURL=PrioritizeMechProtocol.spec.js.map