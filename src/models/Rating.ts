import { model, Schema, Types } from "mongoose";
import { IRating } from "../interfaces/IRating";

const RatingSchema: Schema = new Schema<IRating>({
    id: { type: Types.ObjectId },
    name: { type: String, required: true },
    value: { type: Number, required: true },
    date: { type: Date },
});

export const Rating = model<IRating>("Rating", RatingSchema);
