import { Router } from "express";
import multer from "multer";

import uploadConfig from "../config/upload";
import { CreatePlanningController } from "../modules/plannings/useCase/createPlanning/CreatePlanningController";
import { ListAllPlanningController } from "../modules/plannings/useCase/listAllPlannings/ListAllPlanningsController";
import { ListPlanningController } from "../modules/plannings/useCase/listPlannings/ListPlanningsController";

const uploadImages = multer(uploadConfig.upload("./tmp/images"));

export const planningsRoutes = Router();
const createPlanningController = new CreatePlanningController();
const listPlanningController = new ListPlanningController();
const listAllPlanningController = new ListAllPlanningController();
planningsRoutes.post(
    "/create_planning",
    uploadImages.array("images"),
    createPlanningController.handle
);
planningsRoutes.post("/list_plannings", listPlanningController.handle);
planningsRoutes.get("/list_all_plannings", listAllPlanningController.handle);
