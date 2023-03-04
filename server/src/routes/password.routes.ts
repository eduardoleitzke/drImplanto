import { Router } from "express";

import { ChangePasswordController } from "../modules/accounts/useCase/changePassword/ChangePasswordController";
import { SendForgotPasswordMailController } from "../modules/accounts/useCase/sendForgotPasswordMail/SendForgotPasswordMailController";

export const passwordRoutes = Router();

const sendForgotPasswordMailController = new SendForgotPasswordMailController();
const changePasswordController = new ChangePasswordController();

passwordRoutes.post(
    "/password_forgot",
    sendForgotPasswordMailController.handle
);

passwordRoutes.put("/change_password", changePasswordController.handle);
