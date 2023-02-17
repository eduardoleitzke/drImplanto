import { Schema, model, Types } from "mongoose";

const paymentSchema = new Schema({
    payment_id: { type: String, required: true },
    reason: { type: String, required: true },
    currentPlanningsRemain: { type: Number, default: 0 },
    status: { type: String, required: true },
    createdAt: { type: Date, default: new Date() },
    expireAt: { type: Date, required: true },
    user: { type: Types.ObjectId, ref: "User", required: true },
});

export const Payment = model("Payment", paymentSchema);
