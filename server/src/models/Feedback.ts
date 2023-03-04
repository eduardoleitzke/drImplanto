import { Schema, model, Types } from "mongoose";

const feedbckSchema = new Schema({
    procedureDetails: { type: String, required: true },
    procedureImage: { type: [String] },
    state: {
        type: String,
        enum: ["open", "answered"],
        default: "open",
    },
    planningId: { type: Types.ObjectId, ref: "Planning" },
    createdAt: { type: Date, default: Date.now() },
});

export const Feedback = model("Feedback", feedbckSchema);
