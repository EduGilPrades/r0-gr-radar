"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterRadarInfoService = void 0;
var Protocol_1 = require("../core/domain/types/Protocol");
var AssitsAlliesProtocol_1 = require("./protocols/AssitsAlliesProtocol");
var AvoidCrossFireProtocol_1 = require("./protocols/AvoidCrossFireProtocol");
var AvoidMechProtocol_1 = require("./protocols/AvoidMechProtocol");
var ClosestEnemiesProtocol_1 = require("./protocols/ClosestEnemiesProtocol");
var FurthestEnemiesProtocol_1 = require("./protocols/FurthestEnemiesProtocol");
var PrioritizeMechProtocol_1 = require("./protocols/PrioritizeMechProtocol");
var FilterRadarInfoService = /** @class */ (function () {
    function FilterRadarInfoService(protocols, scans) {
        this.protocols = protocols;
        this.scans = scans;
        this.protocolsActions = new Map();
        this.protocolsActions.set(Protocol_1.Protocol.ASSIST_ALLIES, new AssitsAlliesProtocol_1.AssistAlliesProtocol());
        this.protocolsActions.set(Protocol_1.Protocol.AVOID_CROSSFIRE, new AvoidCrossFireProtocol_1.AvoidCrossFireProtocol());
        this.protocolsActions.set(Protocol_1.Protocol.AVOID_MECH, new AvoidMechProtocol_1.AvoidMechProtocol());
        this.protocolsActions.set(Protocol_1.Protocol.CLOSEST_ENEMIES, new ClosestEnemiesProtocol_1.ClosestEnemiesProtocol());
        this.protocolsActions.set(Protocol_1.Protocol.FURTHEST_ENEMIES, new FurthestEnemiesProtocol_1.FurthestEnemiesProtocol());
        this.protocolsActions.set(Protocol_1.Protocol.PRIORITIZE_MECH, new PrioritizeMechProtocol_1.PrioritizeMechProtocol());
    }
    FilterRadarInfoService.prototype.getBestTarget = function () {
        var _this = this;
        this.protocols.forEach(function (protocol) {
            var protocolAction = _this.protocolsActions.get(protocol);
            _this.scans =
                protocolAction === undefined
                    ? _this.scans
                    : protocolAction.apply(_this.scans);
        });
        return this.scans[0];
    };
    return FilterRadarInfoService;
}());
exports.FilterRadarInfoService = FilterRadarInfoService;
//# sourceMappingURL=FilterRadarInfoService.js.map