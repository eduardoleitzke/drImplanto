import { inject, injectable } from "tsyringe";

import { Payment } from "../../../../models/Payment";
import { AppError } from "../../../../shared/errors/AppError";
import {
    IPlanningRepository,
    IPlanning,
} from "../../repositories/IPlanningRepository";

@injectable()
export class CreatePlanningUseCase {
    constructor(
        @inject("PlanningRepository")
        private planningRepository: IPlanningRepository
    ) {}
    async execute({
        patientName,
        procedureDetails,
        procedureType,
        user,
        procedureImage,
    }: IPlanning): Promise<void> {
        const userHavePlanningsRemain = await Payment.findOne();
        if (userHavePlanningsRemain.currentPlanningsRemain <= 0) {
            throw new AppError(
                "No have more plannings request!",
                "planningsinsufficenttError",
                401
            );
        }
        console.log(user);
        const teste = await Payment.findOneAndUpdate(user, {
            $inc: { currentPlanningsRemain: -1 },
        });
        console.log(teste);
        await this.planningRepository.create({
            patientName,
            procedureDetails,
            procedureType,
            user,
            procedureImage,
        });
    }
}
