import { container } from "tsyringe";

import { UserRepository } from "../../modules/accounts/repositories/implementions/UserRepository";
import { IUserRepository } from "../../modules/accounts/repositories/IUserRepository";
import { PaymentRepository } from "../../modules/payments/repositories/implemetions/PaymentRepository";
import { IPaymentRepository } from "../../modules/payments/repositories/IPaymentRepository";
import { PlanningRepository } from "../../modules/plannings/repositories/implementions/PlanningRepository";
import { IPlanningRepository } from "../../modules/plannings/repositories/IPlanningRepository";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
container.registerSingleton<IPlanningRepository>(
    "PlanningRepository",
    PlanningRepository
);
container.registerSingleton<IPaymentRepository>(
    "PaymentRepository",
    PaymentRepository
);
