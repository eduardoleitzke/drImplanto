import { inject, injectable } from "tsyringe";

import { IPlanningRepository } from "../../repositories/IPlanningRepository";

interface IRequest {
    planningId: string;
    imageFiles: string | string[];
}
@injectable()
export class SendImagesPlanningUseCase {
    constructor(
        @inject("PlanningRepository")
        private planningRepository: IPlanningRepository
    ) {}
    async execute({ planningId, imageFiles }: IRequest) {
        const planning = await this.planningRepository.findById(planningId);
        planning.procedureImage = imageFiles;
    }
}
