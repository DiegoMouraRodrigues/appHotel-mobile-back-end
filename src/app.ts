import Express from "express";
import { Request, Response, NextFunction } from "express";
import router from "./routes/tarefaRouter";
const app = Express();
app.use(Express.json());
app.use("/tarefas", router);


export default app;
