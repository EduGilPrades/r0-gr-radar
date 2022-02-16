"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssistAlliesProtocol = void 0;
var AssistAlliesProtocol = /** @class */ (function () {
    function AssistAlliesProtocol() {
    }
    AssistAlliesProtocol.prototype.apply = function (scans) {
        var filteredScans = scans.filter(function (target) { return target.allies !== undefined; });
        return filteredScans.length ? filteredScans : scans;
    };
    return AssistAlliesProtocol;
}());
exports.AssistAlliesProtocol = AssistAlliesProtocol;
//# sourceMappingURL=AssitsAlliesProtocol.js.map