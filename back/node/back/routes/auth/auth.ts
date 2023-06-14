import GenericRouter from "../../_helpers/genericRouter";
import { authCtrl } from "../../controllers/AuthCtrl";

class AuthRouter extends GenericRouter {

    constructor() {

        super();
        this.router.post('/login', authCtrl.login);
    }
}

export const authRouter = new AuthRouter().router;