import { postsCtrl } from "../../controllers/PostsCtrl";
import GenericRouter from "../../_helpers/genericRouter";
import { createCtrl } from "../../controllers/CreateCtrl";

class CreateRouter extends GenericRouter {

    constructor() {

        super();
        this.router.post('/', createCtrl.CreateNewResource);
    }
}

export const createRouter = new CreateRouter().router;