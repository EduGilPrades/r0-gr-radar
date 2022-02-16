"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvoidMechProtocol = void 0;
var EnemiesType_1 = require("../../core/domain/types/EnemiesType");
var AvoidMechProtocol = /** @class */ (function () {
    function AvoidMechProtocol() {
    }
    AvoidMechProtocol.prototype.apply = function (scans) {
        var filteredScans = scans.filter(function (target) { return target.enemies.type !== EnemiesType_1.EnemiesType.MECH; });
        return filteredScans.length ? filteredScans : scans;
    };
    return AvoidMechProtocol;
}());
exports.AvoidMechProtocol = AvoidMechProtocol;
//# sourceMappingURL=AvoidMechProtocol.js.map