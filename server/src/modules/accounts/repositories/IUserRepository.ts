import { Types } from "mongoose";

export interface IUser {
    _id?: Types.ObjectId;
    name: string;
    lastName: string;
    email: string;
    birthday: Date;
    password: string;
    cpf: string;
    phone: string;
    haveAssignement: boolean;
}

export interface IUserRepository {
    create(data: IUser): Promise<void>;
    findByEmail(email: string): Promise<IUser | null>;
    findByCpf(cpf: string): Promise<IUser | null>;
    findById(id: string): Promise<IUser | null>;
    updatePlan(id: Types.ObjectId): Promise<IUser | null>;
    sendRecoveryPassword(email: string): Promise<IUser | null>;
    changePassword(password: string, email: string): Promise<IUser | null>;
}
