import { Router } from "express";

import { authenticationRoutes } from "./authentication.routes";
import { paymentRoutes } from "./payment.routes";
import { planningsRoutes } from "./plannings.routes";
import { usersRoutes } from "./users.routes";

export const router = Router();

router.use(usersRoutes);
router.use(authenticationRoutes);
router.use(planningsRoutes);
router.use(paymentRoutes);
