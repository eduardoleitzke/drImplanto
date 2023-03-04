import { Router } from "express";

import { checkUrlTokenToChangePassword } from "../middlewares/checkUrlTokenToChangePassword";
import { EnsureAuthenticated } from "../middlewares/ensureAuthenticated";
import { AuthenticationUserController } from "../modules/accounts/useCase/authentication/AuthenticationUserController";
import { VerifySubscriptionController } from "../modules/payments/useCase/verifySubscriptions/VerifySubscriptionController";

export const authenticationRoutes = Router();

const authenticationUserController = new AuthenticationUserController();
const verifysubscriptionController = new VerifySubscriptionController();
authenticationRoutes.post("/session", authenticationUserController.handle);
authenticationRoutes.post("/verify_token", EnsureAuthenticated, (req, res) => {
    const { userDetails } = req;
    res.status(200).json(userDetails);
});
authenticationRoutes.post(
    "/verify_recoveryToken",
    checkUrlTokenToChangePassword,
    (req, res) => {
        const { email } = req.userDetails;
        console.log(req.userDetails);
        res.send(email);
    }
);

authenticationRoutes.post(
    "/verify_subscription",
    verifysubscriptionController.handle
);
