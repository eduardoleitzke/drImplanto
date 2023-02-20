import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import {
    IPlanningRepository,
    IPlanning,
} from "../../repositories/IPlanningRepository";

@injectable()
export class ListAllPlanningUseCase {
    constructor(
        @inject("PlanningRepository")
        private planningRepository: IPlanningRepository
    ) {}
    async execute(): Promise<IPlanning[]> {
        const havePlanningCreatedForThisUser =
            await this.planningRepository.listAllPlannings();
        console.log(havePlanningCreatedForThisUser);
        if (!havePlanningCreatedForThisUser)
            throw new AppError(
                "Something doe's wrong!",
                "planUpdateError",
                400
            );
        return havePlanningCreatedForThisUser;
    }
}
