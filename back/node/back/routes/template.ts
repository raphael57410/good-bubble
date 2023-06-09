import { capitalizeFirstLetter } from "../utils/modifyString";

export const routerTemplate = (name: string) => `

import { ${name}Ctrl } from "../../controllers/${capitalizeFirstLetter(name)}Ctrl";
import GenericRouter from "../../_helpers/genericRouter";

class ${capitalizeFirstLetter(name)}Router extends GenericRouter {

    constructor() {
        super();
        this.router.get('/', ${name}Ctrl.getAll${capitalizeFirstLetter(name)});
        this.router.post('/add${capitalizeFirstLetter(name)}', ${name}Ctrl.add${capitalizeFirstLetter(name)});
    }
}

export const ${name}Router = new ${capitalizeFirstLetter(name)}Router().router;

`