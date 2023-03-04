import { Response, Request } from "express";
import { container } from "tsyringe";

import { CreatePlanningUseCase } from "./CreatePlanningUseCase";

export class CreatePlanningController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { name, details, type, userId } = req.body;
        const createPlanningUseCase = container.resolve(CreatePlanningUseCase);
        const { files } = req;
        const filesName = [];
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < files.length; i++) {
            filesName.push(files[i].filename);
        }
        await createPlanningUseCase.execute({
            patientName: name,
            procedureDetails: details,
            procedureType: type,
            user: userId,
            procedureImage: filesName,
        });
        return res.status(201).send();
    }
}
