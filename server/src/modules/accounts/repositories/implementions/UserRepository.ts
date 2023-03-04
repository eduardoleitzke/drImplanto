import { Types } from "mongoose";

import { User } from "../../../../models/User";
import { IUserRepository, IUser } from "../IUserRepository";

export class UserRepository implements IUserRepository {
    async changePassword(
        password: string,
        email: string
    ): Promise<IUser | null> {
        const user = await User.findOneAndUpdate(
            { email },
            {
                $set: { password },
            }
        );
        return user;
    }

    async sendRecoveryPassword(email: string): Promise<IUser | null> {
        const user = await User.findOne({ email });
        return user;
    }
    async findById(id: string): Promise<IUser | null> {
        const user = await User.findById(id);
        return user;
    }

    async findByEmail(email: string): Promise<IUser | null> {
        const user = await User.findOne({ email });
        return user;
    }

    async findByCpf(cpf: string): Promise<IUser | null> {
        const user = await User.findOne({ cpf });
        return user;
    }

    async updatePlan(id: Types.ObjectId): Promise<IUser | null> {
        const user = await User.findByIdAndUpdate(id, {
            $set: { haveAssignement: true },
        });
        return user;
    }

    async create({
        name,
        birthday,
        cpf,
        lastName,
        phone,
        email,
        password,
    }: IUser): Promise<void> {
        const newUser = new User({
            name,
            birthday,
            cpf,
            lastName,
            phone,
            email,
            password,
        });

        await newUser.save();
    }
}
