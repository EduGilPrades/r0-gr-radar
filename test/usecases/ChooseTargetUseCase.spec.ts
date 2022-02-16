import { expect } from "chai";
import { Coordinates } from "../../src/core/domain/types/Coordinates";
import { RadarInfo } from "../../src/core/domain/types/RadarInfo";
import { ChooseTargetUsecase } from "../../src/usecases/ChooseTargetUsecase";
import { FakeData } from "../testHelpers/FakeScans";

describe("ChooseTargetUseCase", () => {
  let radarInfo: RadarInfo;
  let sut: ChooseTargetUsecase;

  beforeEach(() => {
    sut = new ChooseTargetUsecase();
  });

  let allTests: [RadarInfo, Coordinates][] = FakeData.allTest;
  for (let cont = 0; cont < allTests.length; cont++) {
    let test: RadarInfo = allTests[cont][0];
    let result: Coordinates = allTests[cont][1];

    it(`test ${cont + 1} should be ${JSON.stringify(result)}`, () => {
      const coordinatesResult: Coordinates = sut.execute(test);
      expect(coordinatesResult).to.be.deep.eq(result);
    });
  }
});
