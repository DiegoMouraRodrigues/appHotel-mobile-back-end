import { Router } from "express";
import loginController from "../controllers/loginController";
import registerController from "../controllers/loginController";

const rotaLogin = Router();

rotaLogin.post("/", loginController.login)
rotaLogin.post("/", registerController.login)

export default rotaLogin;
