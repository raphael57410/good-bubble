import fs from 'fs'
import { routerTemplate } from '../routes/template'
import { capitalizeFirstLetter } from '../utils/modifyString'

const routePath = './back/routes/'
const filePath = (name: string) => `${routePath}${name}/${capitalizeFirstLetter(name)}Routes.ts`

export const createRoutefn = (name: string) => {

    fs.mkdir(routePath + name, { recursive: true }, (err) => {
        if (err) {
            console.error('Erreur lors de la création du fichier :', err);
            return;
        }

        fs.writeFile(filePath(name), routerTemplate(name).toString(), (err) => {
            if (err) {
                console.error('Erreur lors de la création du fichier :', err);
                return;
            }
        });
    });

}
