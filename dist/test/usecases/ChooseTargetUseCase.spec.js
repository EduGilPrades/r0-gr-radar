"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var ChooseTargetUsecase_1 = require("../../src/usecases/ChooseTargetUsecase");
var FakeScans_1 = require("../testHelpers/FakeScans");
describe("ChooseTargetUseCase", function () {
    var radarInfo;
    var sut;
    beforeEach(function () {
        sut = new ChooseTargetUsecase_1.ChooseTargetUsecase();
    });
    var allTests = FakeScans_1.FakeData.allTest;
    var _loop_1 = function (cont) {
        var test_1 = allTests[cont][0];
        var result = allTests[cont][1];
        it("test ".concat(cont + 1, " should be ").concat(JSON.stringify(result)), function () {
            var coordinatesResult = sut.execute(test_1);
            (0, chai_1.expect)(coordinatesResult).to.be.deep.eq(result);
        });
    };
    for (var cont = 0; cont < allTests.length; cont++) {
        _loop_1(cont);
    }
});
//# sourceMappingURL=ChooseTargetUseCase.spec.js.map