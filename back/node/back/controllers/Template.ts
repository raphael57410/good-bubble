import { capitalizeFirstLetter } from "../utils/modifyString";

export const CtrlTemplate = (name: string) => {
    const firstLetterCapitalized = capitalizeFirstLetter(name);
    return (`
import { Request, RequestHandler, Response } from "express";
import { I${firstLetterCapitalized}Document, I${firstLetterCapitalized}Model, ${firstLetterCapitalized}Model } from "../models/${firstLetterCapitalized}";
import GenericCtrl from "./GenericCtrl";

class ${firstLetterCapitalized}Ctrl extends GenericCtrl<I${firstLetterCapitalized}Model, I${firstLetterCapitalized}Document> {

    constructor() {

        super('${name}', ${firstLetterCapitalized}Model)

    }

    getAll${firstLetterCapitalized}: RequestHandler = async (_req: Request, res: Response) => {
        try {
            const ${name} = await this.getAll();
            res.status(200).send({ ${name} });
        } catch (err) {
            console.log(err);
        }
    }

    add${firstLetterCapitalized}: RequestHandler = async (_req: Request, res: Response) => {
        const { body } = res.req

        try {
            const new${firstLetterCapitalized} = await this.add(body)
            res.status(201).send(new${firstLetterCapitalized});
        } catch (err) {
            console.log(err);
        }
    }

}

export const ${name}Ctrl = new ${firstLetterCapitalized}Ctrl();
`)
}