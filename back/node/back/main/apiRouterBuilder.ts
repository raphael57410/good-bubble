import express, { Express } from "express"
import { postRouter } from "../routes/posts/postsRoutes";
import { allCollectionsRouter } from "../routes/allCollections/allCollectionsRouter";
import { usersRouter } from "../routes/users/usersRoutes";
import { createRouter } from "../routes/create/create";

import { totosRouter } from "../routes/totos/TotosRoutes";


export const createApiRouter = (app: Express) => {
    const baseApiRouter = express.Router();

    baseApiRouter.use('/', allCollectionsRouter);
    baseApiRouter.use('/users', usersRouter);
    baseApiRouter.use('/posts', postRouter);
    baseApiRouter.use('/create', createRouter);


baseApiRouter.use('/totos', totosRouter);
    app.use('/api', baseApiRouter);
}