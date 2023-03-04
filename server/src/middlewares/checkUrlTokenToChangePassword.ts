import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import auth from "../config/auth";
import { UserRepository } from "../modules/accounts/repositories/implementions/UserRepository";
import { AppError } from "../shared/errors/AppError";

interface IPayload {
    id: string;
    email: string;
    plan: string;
}

export async function checkUrlTokenToChangePassword(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        throw new AppError("Token missing", "tokenError", 401);
    }

    const [, token] = authHeader.split(" ");
    try {
        const sub = verify(token, auth.recoveryPasswordSecret) as IPayload;
        const userRepository = new UserRepository();
        const user = await userRepository.findByEmail(sub.email);

        if (!user) {
            throw new AppError("User dosen't exists", "tokenError", 401);
        }
        req.user = {
            id: sub.id,
        };
        req.userDetails = sub;
        next();
    } catch (error) {
        throw new AppError("Invalid token!", "tokenError", 401);
    }
}
