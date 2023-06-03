import express from "express";
import cors from 'cors'
import path from "path";
import mongoose from 'mongoose'
import { postRouter } from "./routes/posts/postsRoutes";
import listEndpoints from "express-list-endpoints";
import { createApiRouter } from "./main/apiRouterBuilder";

require('dotenv').config();


const user = process.env.USERName;
const pass = process.env.PASS;
const cluster = process.env.URL;
const db = process.env.DB;


mongoose.connect(`mongodb+srv://${user}:${pass}@cluster0.cohgx.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => console.log('connexion'))
    .catch((e) => console.log(e, 'connexion failed'));

export const app = express();

app.use(express.json());
app.use(cors({
    origin: '*'
}));


app.use('/ping', (req, res) => {
    res.status(200).send('ping OK');
});
createApiRouter(app);

console.log(path.join(__dirname, 'public'));

app.use('/static', express.static(path.join(__dirname, 'public/images')))

const allPath = listEndpoints(app);
allPath.forEach(route => {
    console.log(`🛣️  \x1b[33m ${route.path}\x1b[0m => \x1b[34m${route.methods}\x1b[0m`)
});
export default app;