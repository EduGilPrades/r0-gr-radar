"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDistance = void 0;
function getDistance(_a) {
    var x = _a.x, y = _a.y;
    var distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    return distance;
}
exports.getDistance = getDistance;
//# sourceMappingURL=Helpers.js.map