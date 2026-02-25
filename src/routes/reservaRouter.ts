import { Router } from "express";
import reservaController from "../controllers/reservaController"

const rotaReserva = Router();

rotaReserva.post("/", reservaController.criarPedido) 

export default rotaReserva;