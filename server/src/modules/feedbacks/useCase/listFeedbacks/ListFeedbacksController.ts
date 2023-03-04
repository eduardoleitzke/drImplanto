import { Response, Request } from "express";
import { container } from "tsyringe";

import { ListFeedbacksUseCase } from "./ListFeedbacksUseCase";

export class ListFeedbacksController {
    async handle(req: Request, res: Response) {
        const { planningId } = req.body;
        console.log(planningId);
        const listFeedbackUseCase = container.resolve(ListFeedbacksUseCase);
        const listOfFeedbacks = await listFeedbackUseCase.execute(planningId);
        return res.status(201).json(listOfFeedbacks);
    }
}
