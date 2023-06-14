import { Request, RequestHandler, Response } from "express";
import { createRoutefn } from "../_helpers/createRoute";
import { createCtrlfn } from "../_helpers/createCtrl";
import { TPropertiesArray, createModelfn } from "../_helpers/createModel";
import { createApiRouterBuilder } from "../_helpers/createApiRouterBuilder";
import { usersCtrl } from "./UsersCtrl";


type Body = {
    email: string,
    password: string,

}

class AuthCtrl {

    login: RequestHandler = async (req: Request, res: Response) => {
        const { email, password }: Body = req.body

        try {

            console.log(email, password);
            const user = await usersCtrl.find('email', email)

            console.log(user);

            res.status(201).send('created!')

        } catch (err) {
            console.log(err);
        }
    }

}

export const authCtrl = new AuthCtrl();