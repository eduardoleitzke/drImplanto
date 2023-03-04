import { Schema, model, Types } from "mongoose";

const ticketSchema = new Schema({
    details: { type: String, required: true },
    title: { type: String, required: true },
    procedureImage: { type: [String] },
    state: {
        type: String,
        enum: ["open", "answered"],
        default: "open",
    },
    user: { type: Types.ObjectId, ref: "User", required: true },
    createdAt: { type: Date, default: Date.now() },
});

export const Ticket = model("Ticket", ticketSchema);
