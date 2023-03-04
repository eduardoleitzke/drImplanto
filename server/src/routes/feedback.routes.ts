import { Router } from "express";
import multer from "multer";

import uploadConfig from "../config/upload";
import { CreateFeedbackController } from "../modules/feedbacks/useCase/createFeedback/CreateFeedbackController";
import { ListFeedbacksController } from "../modules/feedbacks/useCase/listFeedbacks/ListFeedbacksController";

const uploadImages = multer(uploadConfig);

export const feebackRoutes = Router();
const createFeedbackController = new CreateFeedbackController();
const listFeedbacksController = new ListFeedbacksController();
feebackRoutes.post(
    "/create_feedback",
    uploadImages.array("images"),
    createFeedbackController.handle
);

feebackRoutes.post("/list_feedback", listFeedbacksController.handle);
