import express, { Express } from "express";
import { RestService } from "./api/RestService";

export class App {
  public express: Express;

  constructor() {
    this.express = express();
  }

  public async start(): Promise<express.Express> {
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));

    const restService = new RestService({
      app: this.express,
    });

    await restService.start();
    const PORT = process.env.PORT;

    try {
      this.express.listen(PORT, () => console.log(`Listening on port ${PORT}`));
      return Promise.resolve(this.express);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
