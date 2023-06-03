import { Request, RequestHandler, Response } from "express";
import { IPostDocument, IPostModel, PostModel } from "../models/Post";
import GenericCtrl from "./GenericCtrl";

class PostsCtrl extends GenericCtrl<IPostModel, IPostDocument> {

    constructor() {

        super("Post", PostModel)

    }

    getAllPost: RequestHandler = async (_req: Request, res: Response) => {
        try {
            const allPosts = await this.getAll();
            res.status(200).send(allPosts);
        } catch (err) {
            console.log(err);
        }
    }

    addPost: RequestHandler = async (_req: Request, res: Response) => {
        const { file, body } = res.req

        try {
            const newPosts = await this.add({
                title: body.title,
                email: body.email,
                image: file.filename,
                description: body.description
            })
            res.status(201).send(newPosts);
        } catch (err) {
            console.log(err);
        }
    }
}

export const postsCtrl = new PostsCtrl();