"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var Helpers_1 = require("../../src/helpers/Helpers");
describe("getDistance", function () {
    it("should be sqrt(2) when x:1 and y:1", function () {
        var x = 1;
        var y = 1;
        var result = (0, Helpers_1.getDistance)({ x: x, y: y });
        (0, chai_1.expect)(result).to.be.eq(Math.sqrt(2));
    });
    it("should be sqrt(8) when x:2 and y:2", function () {
        var x = 2;
        var y = 2;
        var result = (0, Helpers_1.getDistance)({ x: x, y: y });
        (0, chai_1.expect)(result).to.be.eq(Math.sqrt(8));
    });
    it("should be sqrt(4) when x:2 and y:0", function () {
        var x = 2;
        var y = 0;
        var result = (0, Helpers_1.getDistance)({ x: x, y: y });
        (0, chai_1.expect)(result).to.be.eq(Math.sqrt(4));
    });
});
//# sourceMappingURL=Helpers.spec.js.map