import express from "express";
import morgan from "morgan";
import twitter from "./routes/twitter.routes";
import {port} from './config'
import router from "./routes/twitter.routes";

const app = express();

app.use(morgan("dev"));
//uso mis rutas
app.use(twitter);


//servidor
app.listen(port);
console.log("server on port", port);
