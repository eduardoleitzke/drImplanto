import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
export class UpdatePlanUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) {}

    async execute({ id }): Promise<void> {
        const userExists = await this.userRepository.updatePlan(id);
        if (!userExists)
            throw new AppError(
                "Something doe's wrong!",
                "planUpdateError",
                400
            );
    }
}
