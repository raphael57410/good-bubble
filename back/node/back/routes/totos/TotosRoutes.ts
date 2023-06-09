

import { totosCtrl } from "../../controllers/TotosCtrl";
import GenericRouter from "../../_helpers/genericRouter";

class TotosRouter extends GenericRouter {

    constructor() {
        super();
        this.router.get('/', totosCtrl.getAllTotos);
        this.router.post('/addTotos', totosCtrl.addTotos);
    }
}

export const totosRouter = new TotosRouter().router;

