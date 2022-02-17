"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var FurthestEnemiesProtocol_1 = require("../../../src/services/protocols/FurthestEnemiesProtocol");
var FakeScans_1 = require("../../testHelpers/FakeScans");
describe("FurthestEnemiesProtocol", function () {
    var sut;
    beforeEach(function () {
        sut = new FurthestEnemiesProtocol_1.FurthestEnemiesProtocol();
    });
    it("should return scans ordered by proximity furthest first", function () {
        var scans = FakeScans_1.FakeData.scans;
        var scanOrderedFurthestFirst = FakeScans_1.FakeData.scansOrderedFurthestFirst;
        var orderedScans = sut.apply(scans);
        (0, chai_1.expect)(orderedScans).to.be.deep.eq(scanOrderedFurthestFirst);
    });
});
//# sourceMappingURL=FurtherEnemiesProtocol.spec.js.map