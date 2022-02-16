import { expect } from "chai";
import express from "express";
import request from "supertest";
import { RadarRouter } from "../../../src/api/routes/RadarRouter";
import { Coordinates } from "../../../src/core/domain/types/Coordinates";
import { RadarInfo } from "../../../src/core/domain/types/RadarInfo";
import { FakeData } from "../../testHelpers/FakeScans";

describe("RadarRouter", () => {
  let app: express.Application;

  beforeEach(() => {
    app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use("/radar", RadarRouter.configure());
  });

  it("should return JSON and code status 200", async () => {
    let test: [RadarInfo, Coordinates] = FakeData.allTest[0];
    const response = await request(app)
      .post("/radar")
      .send(test[0])
      .set("Accept", "application/json")
      .expect("Content-type", /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).to.be.not.empty;
      });
  });
  it("should return code status 400 if bad request", async () => {
    let test: [RadarInfo, Coordinates] = FakeData.allTest[0];
    const response = await request(app)
      .post("/radar")
      .send({ bad: "radarInfo" })
      .set("Accept", "application/json")
      .expect("Content-type", /json/)
      .expect(400)
      .then((res) => {
        expect(res.body).to.be.not.empty;
      });
  });
});
