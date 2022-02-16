"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChooseTargetUsecase = void 0;
var FilterRadarInfoService_1 = require("../services/FilterRadarInfoService");
var ChooseTargetUsecase = /** @class */ (function () {
    function ChooseTargetUsecase() {
    }
    ChooseTargetUsecase.prototype.execute = function (radarInfo) {
        var filterRadarInfoService = new FilterRadarInfoService_1.FilterRadarInfoService(radarInfo.protocols, radarInfo.scan);
        var bestTarget = filterRadarInfoService.getBestTarget();
        return bestTarget.coordinates;
    };
    return ChooseTargetUsecase;
}());
exports.ChooseTargetUsecase = ChooseTargetUsecase;
//# sourceMappingURL=ChooseTargetUsecase.js.map