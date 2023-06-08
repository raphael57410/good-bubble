import GenericRouter from "../../_helpers/genericRouter";
import { allCollectionsCtrl } from "../../controllers/AllCollectionsCtrl";

class AllCollectionsRouter extends GenericRouter {

    constructor() {

        super();
        this.router.get('/', allCollectionsCtrl.getAllCollections);
    }
}

export const allCollectionsRouter = new AllCollectionsRouter().router;