import { Request, RequestHandler, Response } from "express";
import { IPostDocument, IPostModel, PostModel } from "../models/Post";
import GenericCtrl from "./GenericCtrl";
import { db } from "../app";

class AllCollectionsCtrl extends GenericCtrl<IPostModel, IPostDocument> {

    constructor() {

        super("allCollections", PostModel)

    }

    getAllCollections: RequestHandler = async (_req: Request, res: Response) => {
        try {
            // Fetch all collections
            const collections = await db.db.listCollections().toArray();

            res.status(200).send(collections);

        } catch (error) {
            console.error(error);
        }
    }
}

export const allCollectionsCtrl = new AllCollectionsCtrl();