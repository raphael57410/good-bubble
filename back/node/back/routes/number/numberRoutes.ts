import { numberCtrl } from "../../controllers/numberCtrl";

const express = require('express');
const numberRouter = express.Router();

numberRouter.post('/number', numberCtrl.newNumber);
numberRouter.get('/number', numberCtrl.getAllNumberSorted);

export default numberRouter;