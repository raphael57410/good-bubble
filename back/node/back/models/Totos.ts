
    import mongoose, { ObjectId } from "mongoose";

export interface ITotosModel {
    _id?: ObjectId;
    lastname: String,firstname: String
}

const totosSchema = new mongoose.Schema({
    lastname: String,firstname: String

});

export interface ITotosDocument extends Omit<ITotosModel, "_id">, mongoose.Document { }

export const TotosModel = mongoose.model<ITotosDocument>("totos", totosSchema);
    