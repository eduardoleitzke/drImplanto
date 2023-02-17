import { Router } from "express";

import { EnsureAuthenticated } from "../middlewares/ensureAuthenticated";
import { AuthenticationUserController } from "../modules/accounts/useCase/authentication/AuthenticationUserController";
import { VerifyAssignmentController } from "../modules/payments/useCase/verifyAssignment/VerifyAssignmentController";

export const authenticationRoutes = Router();

const authenticationUserController = new AuthenticationUserController();
const verifyAssignmentController = new VerifyAssignmentController();
authenticationRoutes.post("/session", authenticationUserController.handle);
authenticationRoutes.post("/verify_token", EnsureAuthenticated, (req, res) => {
    const { userDetails } = req;
    res.status(200).json(userDetails);
});

authenticationRoutes.post(
    "/verify_assignment",
    verifyAssignmentController.handle
);
