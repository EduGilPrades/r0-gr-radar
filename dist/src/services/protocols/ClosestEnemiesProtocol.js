"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClosestEnemiesProtocol = void 0;
var Helpers_1 = require("../../helpers/Helpers");
var ClosestEnemiesProtocol = /** @class */ (function () {
    function ClosestEnemiesProtocol() {
    }
    ClosestEnemiesProtocol.prototype.apply = function (scans) {
        var orderedScansByDistance = scans.sort(function (scanA, scanB) {
            return (0, Helpers_1.getDistance)(scanA.coordinates) - (0, Helpers_1.getDistance)(scanB.coordinates);
        });
        return orderedScansByDistance;
    };
    return ClosestEnemiesProtocol;
}());
exports.ClosestEnemiesProtocol = ClosestEnemiesProtocol;
//# sourceMappingURL=ClosestEnemiesProtocol.js.map