import { Response, Request } from "express";
import { container } from "tsyringe";

import { CreateFeedbackUseCase } from "./CreateFeedbackUseCase";

export class CreateFeedbackController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { description, planningId } = req.body;
        const { files } = req;
        const filesName = [];

        for (let i = 0; i < files.length; i += 1) {
            filesName.push(files[i].filename);
        }
        const createFeedbackUseCase = container.resolve(CreateFeedbackUseCase);
        await createFeedbackUseCase.execute({
            procedureDetails: description,
            planningId,
            procedureImage: filesName,
        });

        return res.status(201).send();
    }
}
