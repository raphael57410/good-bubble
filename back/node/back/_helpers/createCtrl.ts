import fs from 'fs'
import { CtrlTemplate } from '../controllers/Template';
import { capitalizeFirstLetter } from '../utils/modifyString';

const routePath = './back/controllers/'
const filePath = (name: string) => `${routePath}${capitalizeFirstLetter(name)}Ctrl.ts`

export const createCtrlfn = (name: string) => {

    fs.writeFile(filePath(name), CtrlTemplate(name).toString(), (err) => {
        if (err) {
            console.error('Erreur lors de la création du fichier :', err);
            return;
        }
    });


}
