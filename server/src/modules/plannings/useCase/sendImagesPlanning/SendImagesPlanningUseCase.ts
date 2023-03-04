import { inject, injectable } from "tsyringe";

import { IStorageProvider } from "../../../../shared/container/providers/StorageProvider/IStorageProvider";
import { IPlanningRepository } from "../../repositories/IPlanningRepository";

interface IRequest {
    planningId: string;
    imageFiles: string | string[];
}
@injectable()
export class SendImagesPlanningUseCase {
    constructor(
        @inject("PlanningRepository")
        private planningRepository: IPlanningRepository,
        @inject("StorageProvider")
        private storageProvider: IStorageProvider
    ) {}
    async execute({ planningId, imageFiles }: IRequest) {
        const planning = await this.planningRepository.findById(planningId);
        await this.storageProvider.save(imageFiles, "images");
        planning.procedureImage = imageFiles;
    }
}
