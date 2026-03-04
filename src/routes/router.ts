import { Router } from "express";
import { middleware } from "./jwtMiddleware";
import rotaLogin from "./loginRouter";
import rotaQuartos from "./quartosRouter";
import rotaReserva from "./reservaRouter";

const handlerRouter = Router();


//rota publicas
handlerRouter.use("/api/login", rotaLogin);
handlerRouter.use("/api/quartosDisponiveis", rotaQuartos)

//rota privada
handlerRouter.use("/api/reserva", middleware, rotaReserva)


export default handlerRouter;
