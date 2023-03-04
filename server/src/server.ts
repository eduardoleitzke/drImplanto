import "reflect-metadata";
import "dotenv/config";
import "./database/index";
import "./shared/container";

import cors from "cors";
import express, { NextFunction, Request, Response, urlencoded } from "express";

import "express-async-errors";
import { router } from "./routes";
import { AppError } from "./shared/errors/AppError";

const app = express();
app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(router);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            message: err.message,
            type: err.type,
        });
    }

    return res.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`,
    });
});

app.listen(3333, () => console.log("Server is running!"));
