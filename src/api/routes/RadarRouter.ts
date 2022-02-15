import { Request, Response, Router } from "express";
import { ChooseTargetUsecase } from "../../usecases/ChooseTargetUsecase";
import { RadarController } from "../controllers/RadarController";

export class RadarRouter {
  public static configure(): Router {
    const router = Router();

    const chooseTargetUsecase = new ChooseTargetUsecase();
    const radarController = new RadarController(chooseTargetUsecase);

    router.post("/", async (req: Request, res: Response) => {
      try {
        radarController.chooseTarget(req, res);
      } catch (error) {
        return res.status(400).json({ error });
      }
    });
    return router;
  }
}
