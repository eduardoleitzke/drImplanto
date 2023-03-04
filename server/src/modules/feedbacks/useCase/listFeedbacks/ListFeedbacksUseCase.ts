import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { IFeedbackRepository } from "../../repositories/IFeedbackRepository";

@injectable()
export class ListFeedbacksUseCase {
    constructor(
        @inject("FeedbackRepository")
        private feedbackRepository: IFeedbackRepository
    ) {}
    async execute(planningId: string) {
        const haveFeedbacksList = await this.feedbackRepository.listFeebacks(
            planningId
        );
        if (!haveFeedbacksList) {
            throw new AppError("Dont have feedbacks", "feddbacksError", 400);
        }
        return haveFeedbacksList;
    }
}
