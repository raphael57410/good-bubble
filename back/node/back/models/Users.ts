import mongoose, { ObjectId } from "mongoose";

export enum Roles {
    ADMIN = "ADMIN",
    USER = "USER"
}

export interface IUsersModel {
    _id?: ObjectId;
    firstname: string;
    lastname: string;
    email: string;
    roles: { type: string, enum: Roles, default: Roles.USER };
}

const usersSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    roles: { type: String, enum: Roles, default: Roles.USER },

});

export interface IUsersDocument extends Omit<IUsersModel, "_id">, mongoose.Document { }

export const UsersModel = mongoose.model<IUsersDocument>("users", usersSchema);