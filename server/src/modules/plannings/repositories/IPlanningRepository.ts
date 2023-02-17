export interface IPlanning {
    patientName: string;
    procedureType: string;
    procedureDetails: string;
    procedureImage?: string | string[];
    createdAt?: Date;
    user: unknown;
}

export interface IPlanningRepository {
    create(data: IPlanning): Promise<void>;
    listPlannigs(id: string): Promise<IPlanning[]>;
    findById(id: string): Promise<IPlanning>;
}
