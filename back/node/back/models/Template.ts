import { Types } from "mongoose";
import { capitalizeFirstLetter } from "../utils/modifyString";
import { TPropertiesArray } from "../_helpers/createModel";

export const modelTemplate = (name: string, data?: TPropertiesArray) => {
    const firstLetterCapitalized = capitalizeFirstLetter(name);

    return `
    import mongoose, { ObjectId } from "mongoose";

export interface I${firstLetterCapitalized}Model {
    _id?: ObjectId;
    ${data && data.map(val => `${val.key}: ${val.type}`)}
}

const ${name}Schema = new mongoose.Schema({
    ${data && data.map(val => `${val.key}: ${capitalizeFirstLetter(val.type)}`)}

});

export interface I${firstLetterCapitalized}Document extends Omit<I${firstLetterCapitalized}Model, "_id">, mongoose.Document { }

export const ${firstLetterCapitalized}Model = mongoose.model<I${firstLetterCapitalized}Document>("${name}", ${name}Schema);
    `
}