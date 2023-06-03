import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    number: Number,

});
export const UserNumber = mongoose.model("Number", userSchema);