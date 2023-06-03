import express, { Express } from "express"
import { postRouter } from "../routes/posts/postsRoutes";
export const createApiRouter = (app: Express) => {
    const baseApiRouter = express.Router();
    baseApiRouter.use('/post', postRouter);
    app.use('/api', baseApiRouter);
}