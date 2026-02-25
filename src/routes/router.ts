import { Router } from "express";
import { createJWT } from "../utils/jwt";
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

handlerRouter.use("/jwt", (req, res) => {
  const payload = {
    id: 123,
    nome: "Matheus",
    cargo: "cliente"
  }
  res.json(createJWT(payload))
})

export default handlerRouter;
