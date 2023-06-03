import { UserNumber } from "../models/number";

class NumberCtrl {

    async getAllNumberSorted(req, res){

        try {
            //sort the numbers from smallest to largest
            const numberArray = await UserNumber.find().sort({number:1});
            res.status(200).send(numberArray);
        }catch (err){
            console.log(err);
        }

    }
    async newNumber(req,res){
        const { body } = req;

        if (!body) res.send("une erreur est survenue!");

        try {
            await UserNumber.create({...body});

            res.status(201).send("Nouveau nombre ajouté !");
        }catch (err){
            console.log(err);
        }

    }
}

export const  numberCtrl = new NumberCtrl();