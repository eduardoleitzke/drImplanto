import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    birthday: { type: Date, required: true },
    password: { type: String, required: true },
    cpf: { type: String, required: true },
    phone: { type: String, required: true },
    haveAssignement: { type: Boolean, default: false },
    isAdmin: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now() },
});

export const User = model("User", userSchema);
