import { Response, Request } from "express";
import { container } from "tsyringe";

import { VerifyAssignmentUseCase } from "./VerifyAssignmentUseCase";

export class VerifyAssignmentController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.body;
        console.log(`userId: ${id}`);
        const verifyAssignmentController = container.resolve(
            VerifyAssignmentUseCase
        );
        await verifyAssignmentController.execute(id);
        return res.status(201).json();
    }
}
