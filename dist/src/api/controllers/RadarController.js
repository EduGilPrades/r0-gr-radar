"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadarController = void 0;
var RadarController = /** @class */ (function () {
    function RadarController(chooseTargetUsecase) {
        this.chooseTargetUsecase = chooseTargetUsecase;
    }
    RadarController.prototype.chooseTarget = function (req, res) {
        try {
            var radarInfo = req.body;
            var target = this.chooseTargetUsecase.execute(radarInfo);
            return res.status(200).json({ target: target });
        }
        catch (error) {
            return res.status(400).json({ error: error });
        }
    };
    return RadarController;
}());
exports.RadarController = RadarController;
//# sourceMappingURL=RadarController.js.map