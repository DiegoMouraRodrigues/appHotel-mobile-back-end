<<<<<<< HEAD
import express from "express";
import handlerRouter from "./routes/router";

const app = express();
app.use(express.json());

app.use(handlerRouter);
=======
import Express from "express";
import { Request, Response, NextFunction } from "express";
import router from "./routes/tarefaRouter";
const app = Express();
app.use(Express.json());
app.use("/tarefas", router);

>>>>>>> 1cd80fb90a6c9a8ae1a0d2f93a8e032bc4a69142

export default app;
