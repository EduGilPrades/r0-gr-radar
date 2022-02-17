"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvoidCrossFireProtocol = void 0;
var AvoidCrossFireProtocol = /** @class */ (function () {
    function AvoidCrossFireProtocol() {
    }
    AvoidCrossFireProtocol.prototype.apply = function (scans) {
        var filteredScans = scans.filter(function (target) { return target.allies === undefined; });
        return filteredScans.length ? filteredScans : scans;
    };
    return AvoidCrossFireProtocol;
}());
exports.AvoidCrossFireProtocol = AvoidCrossFireProtocol;
//# sourceMappingURL=AvoidCrossFireProtocol.js.map