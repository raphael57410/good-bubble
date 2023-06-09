import mongoose from "mongoose";

abstract class GenericCtrl<TModel, TDoc extends TModel & mongoose.Document> {

    readonly ctrlName: string;
    readonly model: mongoose.Model<TDoc>
    protected constructor(ctrlName: string, model: mongoose.Model<TDoc>) {

        this.ctrlName = ctrlName
        this.model = model
    }

    public async getAll() {

        try {
            return await this.model.find().sort({ number: 1 });
        } catch (err) {
            console.log(err);
        }

    }

    async add(data: TModel) {

        try {
            const newData = await this.model.create({ ...data })
            return newData;
        } catch (err) {
            console.log(err);
        }

    }

    async delete(id: string) {

        try {
            const deleteData = await this.model.deleteOne({ id })
            return deleteData;
        } catch (err) {
            console.log(err);
        }

    }

    async find(propertie: any, value: string) {

        try {
            const findData = await this.model.find({ [propertie]: value })
            return findData;
        } catch (err) {
            console.log(err);
        }

    }
}

export default GenericCtrl;