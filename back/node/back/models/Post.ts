import mongoose, { ObjectId } from "mongoose";

export interface IPostModel {
    _id?: ObjectId;
    title: string;
    email: string;
    image: string;
    description: string;
}

const Post = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true
    },
    title: String,
    email: String,
    image: String,
    description: String

});

export interface IPostDocument extends Omit<IPostModel, "_id">, mongoose.Document { }



export const PostModel = mongoose.model<IPostDocument>('Post', Post);