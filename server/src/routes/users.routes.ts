import { Router } from "express";

import { CreateUserController } from "../modules/accounts/useCase/createUser/CreateUserController";
import { UpdatePlanController } from "../modules/accounts/useCase/updatePlan/UpdatePlanController";
import { VerifyIfEmailExistsController } from "../modules/accounts/useCase/VerifyIfEmailExists/VerifyIfEmailExistsController";

export const usersRoutes = Router();

const createUserController = new CreateUserController();
const verifyIfEmailExistsController = new VerifyIfEmailExistsController();
const updatePlanController = new UpdatePlanController();
usersRoutes.post("/create_user", createUserController.handle);
usersRoutes.post("/verify_email", verifyIfEmailExistsController.handle);
usersRoutes.put("/choiced_plan", updatePlanController.handle);
