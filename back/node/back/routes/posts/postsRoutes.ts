import express from "express";
import { postsCtrl } from "../../controllers/postsCtrl";
import { upload } from "../../utils/imageStorage";
import GenericRouter from "../../_helpers/genericRouter";

class PostRouter extends GenericRouter {

    constructor() {

        super();
        this.router.get('/allPosts', postsCtrl.getAllPost);
        this.router.post('/addPost', upload.single('image'), postsCtrl.addPost);
    }
}

export const postRouter = new PostRouter().router;