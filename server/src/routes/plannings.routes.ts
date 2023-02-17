import { Router } from "express";
import multer from "multer";

import uploadConfig from "../config/upload";
import { CreatePlanningController } from "../modules/plannings/useCase/createPlanning/CreatePlanningController";
import { ListPlanningController } from "../modules/plannings/useCase/listPlannings/ListPlanningsController";

const uploadImages = multer(uploadConfig.upload("./tmp/images"));

export const planningsRoutes = Router();
const createPlanningController = new CreatePlanningController();
const listPlanningController = new ListPlanningController();
planningsRoutes.post(
    "/create_planning",
    uploadImages.array("images"),
    createPlanningController.handle
);
planningsRoutes.post("/list_plannings", listPlanningController.handle);
