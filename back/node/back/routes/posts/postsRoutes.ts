import { postsCtrl } from "../../controllers/PostsCtrl";
import { upload } from "../../utils/imageStorage";
import GenericRouter from "../../_helpers/genericRouter";

class PostRouter extends GenericRouter {

    constructor() {

        super();
        this.router.get('/', postsCtrl.getAllPost);
        this.router.delete('/:id', postsCtrl.deletePost);
        this.router.post('/addPost', upload.single('image'), postsCtrl.addPost);
    }
}

export const postRouter = new PostRouter().router;