"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrioritizeMechProtocol = void 0;
var EnemiesType_1 = require("../../core/domain/types/EnemiesType");
var PrioritizeMechProtocol = /** @class */ (function () {
    function PrioritizeMechProtocol() {
    }
    PrioritizeMechProtocol.prototype.apply = function (scans) {
        var filteredScans = scans.filter(function (target) { return target.enemies.type === EnemiesType_1.EnemiesType.MECH; });
        return filteredScans.length ? filteredScans : scans;
    };
    return PrioritizeMechProtocol;
}());
exports.PrioritizeMechProtocol = PrioritizeMechProtocol;
//# sourceMappingURL=PrioritizeMechProtocol.js.map