import { Feedback } from "../../../../models/Feedback";
import { IFeedback, IFeedbackRepository } from "../IFeedbackRepository";

export class FeedbackRepository implements IFeedbackRepository {
    async create({
        planningId,
        procedureDetails,
        createdAt,
        procedureImage,
    }: IFeedback): Promise<void> {
        const newFeedBack = new Feedback({
            createdAt,
            planningId,
            procedureDetails,
            procedureImage,
        });
        await newFeedBack.save();
    }
    async listFeebacks(id: string): Promise<IFeedback[]> {
        const feedbacks = await Feedback.find({ planningId: id });
        return feedbacks;
    }
}
