import { Schema, model, Types } from "mongoose";

const planningSchema = new Schema({
    patientName: { type: String, required: true },
    procedureType: { type: String, required: true },
    procedureDetails: { type: String, required: true },
    procedureImage: { type: [String] },
    state: {
        type: String,
        enum: ["open", "answered", "finished"],
        default: "open",
    },
    user: { type: Types.ObjectId, ref: "User", required: true },
    createdAt: { type: Date, default: Date.now() },
});

export const Planning = model("Planning", planningSchema);
