import { Express, Router } from "express";
import { RadarController } from "./controllers/RadarController";
import { RadarRouter } from "./routes/RadarRouter";

export class RestService {
  constructor(
    private readonly config: {
      app: Express;
    }
  ) {}

  public async start(): Promise<Express> {
    try {
      this.config.app.use("/radar", this.radarRouter());
      console.log("Rest service working");
      return this.config.app;
    } catch (error: unknown) {
      console.log("REST service NOT working");
      return Promise.reject(error);
    }
  }
  public radarRouter(): Router {
    return RadarRouter.configure();
  }
}
