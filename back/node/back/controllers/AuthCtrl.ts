import { Request, RequestHandler, Response } from "express";
import { usersCtrl } from "./UsersCtrl";
import { sign } from 'jsonwebtoken';


type Body = {
    email: string,
    password: string,

}

class AuthCtrl {

    login: RequestHandler = async (req: Request, res: Response) => {
        const { email, password }: Body = req.body

        try {

            console.log(email, password);
            const user = await usersCtrl.find('email', email);

            if (!user.length) throw res.status(404).send("Pas de user trouvé !")

            //TODO: Secret need to be changed and put in .env file
            const token = sign({ user: user }, 'secret');

            res.status(201).send(token)

        } catch (err) {
            console.log(err);
        }
    }

}

export const authCtrl = new AuthCtrl();