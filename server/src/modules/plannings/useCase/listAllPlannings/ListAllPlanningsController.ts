import { Response, Request } from "express";
import { container } from "tsyringe";

import { ListAllPlanningUseCase } from "./ListAllPlanningsUseCase";

export class ListAllPlanningController {
    async handle(req: Request, res: Response): Promise<Response> {
        const listAllPlanningUseCase = container.resolve(
            ListAllPlanningUseCase
        );
        const listOfPlannings = await listAllPlanningUseCase.execute();
        return res.status(201).json(listOfPlannings);
    }
}
