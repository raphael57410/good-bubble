import GenericRouter from "../../_helpers/genericRouter";
import { usersCtrl } from "../../controllers/UsersCtrl";
import { isAdmin } from "../../middleware/IsAdminMiddleware";

class UsersRouter extends GenericRouter {

    constructor() {
        super();
        this.router.get('/', [isAdmin], usersCtrl.getAllUsers);
    }
}

export const usersRouter = new UsersRouter().router;