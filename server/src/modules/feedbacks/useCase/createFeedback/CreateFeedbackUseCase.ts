import { inject, injectable } from "tsyringe";

import { Payment } from "../../../../models/Payment";
import { Planning } from "../../../../models/Planning";
import { IStorageProvider } from "../../../../shared/container/providers/StorageProvider/IStorageProvider";
import { AppError } from "../../../../shared/errors/AppError";
import {
    IFeedback,
    IFeedbackRepository,
} from "../../repositories/IFeedbackRepository";

@injectable()
export class CreateFeedbackUseCase {
    constructor(
        @inject("FeedbackRepository")
        private planningRepository: IFeedbackRepository,
        @inject("LocalStorageProvider")
        private localStorageProvider: IStorageProvider
    ) {}
    async execute({
        planningId,
        procedureDetails,
        createdAt,
        procedureImage,
    }: IFeedback): Promise<void> {
        console.log(planningId);
        const existPlanning = await Planning.findById(planningId);
        if (!existPlanning) {
            throw new AppError(
                "Something gones wrong",
                "notPlanningError",
                500
            );
        }
        if (procedureImage.length > 0) {
            await this.localStorageProvider.save(procedureImage, "images");
        }

        if (existPlanning.feebackRemains <= 0) {
            throw new AppError(
                "Dont have feebacks remains",
                "currentFeebackRemainsError",
                401
            );
        }

        await Planning.findByIdAndUpdate(planningId, {
            $inc: { feebackRemains: -1 },
        });

        await this.planningRepository.create({
            planningId,
            procedureDetails,
            createdAt,
            procedureImage,
        });
    }
}
