import { NextFunction, Request, Response } from "express";

import { AppError } from "../shared/errors/AppError";
import { UserRepository } from "../modules/accounts/repositories/implementions/UserRepository";

export async function ensureAdmin(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const { id } = req.user;

    const usersRepository = new UserRepository();
    const user = await usersRepository.findById(id);

    if (!user.isAdmin) {
        throw new AppError("User isn't admin!");
    }

    return next();
}
