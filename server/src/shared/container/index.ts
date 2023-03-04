import { container } from "tsyringe";

import { UserRepository } from "../../modules/accounts/repositories/implementions/UserRepository";
import { IUserRepository } from "../../modules/accounts/repositories/IUserRepository";
import { IFeedbackRepository } from "../../modules/feedbacks/repositories/IFeedbackRepository";
import { FeedbackRepository } from "../../modules/feedbacks/repositories/implementions/FeedbackRepository";
import { PaymentRepository } from "../../modules/payments/repositories/implemetions/PaymentRepository";
import { IPaymentRepository } from "../../modules/payments/repositories/IPaymentRepository";
import { PlanningRepository } from "../../modules/plannings/repositories/implementions/PlanningRepository";
import { IPlanningRepository } from "../../modules/plannings/repositories/IPlanningRepository";
import { IMailProvider } from "./providers/MailProvider/IMailProvider";
import { MailTrapProvider } from "./providers/MailProvider/implementations/MailTrapProvider";
import { LocalStorageProvider } from "./providers/StorageProvider/implementations/LocalStorageProvider";
import { S3StorageProvider } from "./providers/StorageProvider/implementations/S3StorageProvider";
import { IStorageProvider } from "./providers/StorageProvider/IStorageProvider";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
container.registerSingleton<IPlanningRepository>(
    "PlanningRepository",
    PlanningRepository
);
container.registerSingleton<IPaymentRepository>(
    "PaymentRepository",
    PaymentRepository
);

const diskStorage = {
    local: LocalStorageProvider,
    s3: S3StorageProvider,
};

container.registerSingleton<IStorageProvider>(
    "LocalStorageProvider",
    diskStorage[process.env.disk]
);

container.registerSingleton<IMailProvider>(
    "MailTrapProvider",
    MailTrapProvider
);

container.registerSingleton<IFeedbackRepository>(
    "FeedbackRepository",
    FeedbackRepository
);
