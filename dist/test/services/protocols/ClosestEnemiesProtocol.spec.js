"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var ClosestEnemiesProtocol_1 = require("../../../src/services/protocols/ClosestEnemiesProtocol");
var FakeScans_1 = require("../../testHelpers/FakeScans");
describe("ClosestEnemiesProtocol", function () {
    var sut;
    beforeEach(function () {
        sut = new ClosestEnemiesProtocol_1.ClosestEnemiesProtocol();
    });
    it("should return only scans ordered by proximity closest first", function () {
        var scans = FakeScans_1.FakeData.scans;
        var scanOrderedClosestFirst = FakeScans_1.FakeData.scansOrderedClosestFirst;
        var orderedScans = sut.apply(scans);
        (0, chai_1.expect)(orderedScans).to.be.deep.eq(scanOrderedClosestFirst);
    });
});
//# sourceMappingURL=ClosestEnemiesProtocol.spec.js.map