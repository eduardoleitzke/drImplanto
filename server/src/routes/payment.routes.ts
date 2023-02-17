import { Router } from "express";

import { CreatePaymentOrderController } from "../modules/payments/useCase/createPaymentOrder/CreatePaymentOrderController";
import { FindPaymentController } from "../modules/payments/useCase/findAssignment/FindPaymentController";

export const paymentRoutes = Router();
const createPaymentOrderController = new CreatePaymentOrderController();
const findPaymentController = new FindPaymentController();
paymentRoutes.post("/create_payment", createPaymentOrderController.handle);
paymentRoutes.post("/search_payment", findPaymentController.handle);
