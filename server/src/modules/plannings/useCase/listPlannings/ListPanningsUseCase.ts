import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import {
    IPlanningRepository,
    IPlanning,
} from "../../repositories/IPlanningRepository";

interface IUserId {
    user: string;
}
@injectable()
export class ListPlanningUseCase {
    constructor(
        @inject("PlanningRepository")
        private planningRepository: IPlanningRepository
    ) {}
    async execute({ user }: IUserId): Promise<IPlanning[]> {
        const havePlanningCreatedForThisUser =
            await this.planningRepository.listPlannigs(user);
        if (!havePlanningCreatedForThisUser)
            throw new AppError(
                "Something doe's wrong!",
                "planUpdateError",
                400
            );
        return havePlanningCreatedForThisUser;
    }
}
