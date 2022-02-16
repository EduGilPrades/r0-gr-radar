"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FurthestEnemiesProtocol = void 0;
var Helpers_1 = require("../../helpers/Helpers");
var FurthestEnemiesProtocol = /** @class */ (function () {
    function FurthestEnemiesProtocol() {
    }
    FurthestEnemiesProtocol.prototype.apply = function (scans) {
        var orderedScansByDistance = scans.sort(function (scanA, scanB) {
            return (0, Helpers_1.getDistance)(scanB.coordinates) - (0, Helpers_1.getDistance)(scanA.coordinates);
        });
        var filteredScans = orderedScansByDistance.filter(function (scan) { return (0, Helpers_1.getDistance)(scan.coordinates) < 100; });
        return filteredScans;
    };
    return FurthestEnemiesProtocol;
}());
exports.FurthestEnemiesProtocol = FurthestEnemiesProtocol;
//# sourceMappingURL=FurthestEnemiesProtocol.js.map