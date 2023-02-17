import { Response, Request } from "express";
import { container } from "tsyringe";

import { UpdatePlanUseCase } from "./UpdatePlanUseCase";

export class UpdatePlanController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { userId } = req.body;
        const updatePlanUseCase = container.resolve(UpdatePlanUseCase);
        await updatePlanUseCase.execute({
            id: userId,
        });

        return res.status(201).json();
    }
}
