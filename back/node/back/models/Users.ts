import mongoose, { ObjectId } from "mongoose";

export interface IUsersModel {
    _id?: ObjectId;
    firstname: string;
    lastname: string;
    email: string;
}

const usersSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,

});

export interface IUsersDocument extends Omit<IUsersModel, "_id">, mongoose.Document { }

export const UsersModel = mongoose.model<IUsersDocument>("users", usersSchema);