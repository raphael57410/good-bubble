import fs from 'fs'
import { capitalizeFirstLetter } from '../utils/modifyString';
import { modelTemplate } from '../models/Template';

export type TProperties = {
    key: string,
    type: string
}

export type TPropertiesArray = TProperties[]

const routePath = './back/models/'
const filePath = (name: string) => `${routePath}${capitalizeFirstLetter(name)}.ts`

export const createModelfn = (name: string, properties: TPropertiesArray) => {

    fs.writeFile(filePath(name), modelTemplate(name, properties).toString(), (err) => {
        if (err) {
            console.error('Erreur lors de la création du fichier :', err);
            return;
        }
    });


}
