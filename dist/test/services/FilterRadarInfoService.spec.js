"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var Protocol_1 = require("../../src/core/domain/types/Protocol");
var FilterRadarInfoService_1 = require("../../src/services/FilterRadarInfoService");
var FakeScans_1 = require("../testHelpers/FakeScans");
describe("FilterRadarInfoService", function () {
    var scans;
    var sut;
    beforeEach(function () {
        scans = FakeScans_1.FakeData.scans;
    });
    it("should return only one filtered scan when filter scans", function () {
        var protocols = [Protocol_1.Protocol.ASSIST_ALLIES, Protocol_1.Protocol.AVOID_MECH];
        var filteredScan = {
            enemies: { type: "soldier", number: 30 },
            allies: 5,
            coordinates: { y: 21, x: 38 },
        };
        sut = new FilterRadarInfoService_1.FilterRadarInfoService(protocols, scans);
        var bestTarget = sut.getBestTarget();
        (0, chai_1.expect)(bestTarget).to.be.deep.eq(filteredScan);
    });
});
//# sourceMappingURL=FilterRadarInfoService.spec.js.map