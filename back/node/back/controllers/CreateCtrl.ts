import { Request, RequestHandler, Response } from "express";
import { createRoutefn } from "../_helpers/createRoute";
import { createCtrlfn } from "../_helpers/createCtrl";
import { createModelfn } from "../_helpers/createModel";

class CreateCtrl {

    CreateNewResource: RequestHandler = async (req: Request, res: Response) => {
        const { name, properties } = req.body

        try {
            createRoutefn(name)
            createCtrlfn(name)
            createModelfn(name, properties)

            res.status(201).send('created!')

        } catch (err) {
            console.log(err);
        }
    }

}

export const createCtrl = new CreateCtrl();