import express, { Router } from "express";

class GenericRouter {
    readonly router: Router;
    constructor() {
        this.router = express.Router({ mergeParams: true });
    }
}

export default GenericRouter;