
import { Request, RequestHandler, Response } from "express";
import { ITotosDocument, ITotosModel, TotosModel } from "../models/Totos";
import GenericCtrl from "./GenericCtrl";

class TotosCtrl extends GenericCtrl<ITotosModel, ITotosDocument> {

    constructor() {

        super('totos', TotosModel)

    }

    getAllTotos: RequestHandler = async (_req: Request, res: Response) => {
        try {
            const totos = await this.getAll();
            res.status(200).send({ totos });
        } catch (err) {
            console.log(err);
        }
    }

    addTotos: RequestHandler = async (_req: Request, res: Response) => {
        const { body } = res.req

        try {
            const newTotos = await this.add(body)
            res.status(201).send(newTotos);
        } catch (err) {
            console.log(err);
        }
    }

}

export const totosCtrl = new TotosCtrl();
