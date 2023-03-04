import { inject, injectable } from "tsyringe";

import { Payment } from "../../../../models/Payment";
import { IStorageProvider } from "../../../../shared/container/providers/StorageProvider/IStorageProvider";
import { AppError } from "../../../../shared/errors/AppError";
import {
    IPlanningRepository,
    IPlanning,
} from "../../repositories/IPlanningRepository";

@injectable()
export class CreatePlanningUseCase {
    constructor(
        @inject("PlanningRepository")
        private planningRepository: IPlanningRepository,
        @inject("LocalStorageProvider")
        private localStorageProvider: IStorageProvider
    ) {}
    async execute({
        patientName,
        procedureDetails,
        procedureType,
        user,
        procedureImage,
    }: IPlanning): Promise<void> {
        const userHavePlanningsRemain = await Payment.findOne({ user });
        if (userHavePlanningsRemain.currentPlanningsRemain <= 0) {
            throw new AppError(
                "No have more plannings request!",
                "planningsinsufficenttError",
                401
            );
        }
        await Payment.findOneAndUpdate(
            { user },
            {
                $inc: { currentPlanningsRemain: -1 },
            }
        );
        if (procedureImage.length > 0) {
            await this.localStorageProvider.save(procedureImage, "images");
        }
        await this.planningRepository.create({
            patientName,
            procedureDetails,
            procedureType,
            user,
            procedureImage,
        });
    }
}
