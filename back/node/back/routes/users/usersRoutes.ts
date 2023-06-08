import GenericRouter from "../../_helpers/genericRouter";
import { usersCtrl } from "../../controllers/UsersCtrl";

class UsersRouter extends GenericRouter {

    constructor() {
        super();
        this.router.get('/', usersCtrl.getAllUsers);
    }
}

export const usersRouter = new UsersRouter().router;