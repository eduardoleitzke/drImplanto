export interface IFeedback {
    procedureDetails: string;
    procedureImage?: string[];
    createdAt?: Date;
    planningId?: unknown;
}

export interface IFeedbackRepository {
    create(data: IFeedback): Promise<void>;
    listFeebacks(id: string): Promise<IFeedback[]>;
}
