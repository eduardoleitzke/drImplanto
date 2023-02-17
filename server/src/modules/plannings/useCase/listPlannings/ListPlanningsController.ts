import { Response, Request } from "express";
import { container } from "tsyringe";

import { ListPlanningUseCase } from "./ListPanningsUseCase";

export class ListPlanningController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { userId } = req.body;
        const listPlanningUseCase = container.resolve(ListPlanningUseCase);
        const listOfPlannings = await listPlanningUseCase.execute({
            user: userId,
        });
        return res.status(201).json(listOfPlannings);
    }
}
