require('dotenv').config();
import http from "http";
import app from "./back/app";


app.set('port', process.env.PORT || 3000);

const server = http.createServer(app);

server.listen(process.env.PORT || 3001, () => {
    console.log(`app is running: http:// localhost: ${process.env.PORT || 3001}`);
});