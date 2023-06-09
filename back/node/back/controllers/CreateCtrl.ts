import { Request, RequestHandler, Response } from "express";
import { createRoutefn } from "../_helpers/createRoute";
import { createCtrlfn } from "../_helpers/createCtrl";
import { TPropertiesArray, createModelfn } from "../_helpers/createModel";
import { createApiRouterBuilder } from "../_helpers/createApiRouterBuilder";


type Body = {
    name: string,
    properties: TPropertiesArray
}

class CreateCtrl {

    CreateNewResource: RequestHandler = async (req: Request, res: Response) => {
        const { name, properties }: Body = req.body

        try {
            createRoutefn(name)
            createCtrlfn(name)
            createModelfn(name, properties)
            createApiRouterBuilder(name)

            res.status(201).send('created!')

        } catch (err) {
            console.log(err);
        }
    }

}

export const createCtrl = new CreateCtrl();