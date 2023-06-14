import { Request, RequestHandler, Response } from "express";
import { IUsersDocument, IUsersModel, UsersModel } from "../models/Users";
import GenericCtrl from "./GenericCtrl";

class UsersCtrl extends GenericCtrl<IUsersModel, IUsersDocument> {

    constructor() {

        super("users", UsersModel)

    }

    getAllUsers: RequestHandler = async (_req: Request, res: Response) => {
        try {
            const users = await this.getAll();
            res.status(200).send({ users });
        } catch (err) {
            console.log(err);
        }
    }


}

export const usersCtrl = new UsersCtrl();