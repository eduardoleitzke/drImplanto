import { Planning } from "../../../../models/Planning";
import { IPlanningRepository, IPlanning } from "../IPlanningRepository";

export class PlanningRepository implements IPlanningRepository {
    async listAllPlannings(): Promise<IPlanning[]> {
        const plannings = await Planning.find();
        return plannings;
    }

    async findById(id: string): Promise<IPlanning> {
        const planning = await Planning.findById(id);
        return planning;
    }
    async listPlannigs(id: string): Promise<IPlanning[]> {
        const plannings = await Planning.find({ user: id });
        return plannings;
    }

    async create({
        patientName,
        procedureDetails,
        procedureType,
        user,
        procedureImage,
    }: IPlanning): Promise<void> {
        const newPlanning = new Planning({
            patientName,
            procedureDetails,
            procedureType,
            user,
            procedureImage,
            createdAt: Date.now(),
        });

        await newPlanning.save();
    }
}
