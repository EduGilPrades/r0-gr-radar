import { Request, Response } from "express";
import { RadarInfo } from "../../core/domain/types/RadarInfo";
import { ChooseTargetUsecase } from "../../usecases/ChooseTargetUsecase";

export class RadarController {
  constructor(private readonly chooseTargetUsecase: ChooseTargetUsecase) {}

  public chooseTarget(req: Request, res: Response) {
    try {
      const radarInfo: RadarInfo = req.body;
      const target = this.chooseTargetUsecase.execute(radarInfo);
      return res.status(200).json({ target });
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
}
