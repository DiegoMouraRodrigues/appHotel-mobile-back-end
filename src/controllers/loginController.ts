import { NextFunction, Request, Response } from "express";
import loginRepository from "../repositories/loginRepository";
import { validarSenha } from "../utils/senha";
import { createJWT } from "../utils/jwt";

async function login(req: Request, res: Response, next: NextFunction) {
    const { email, senha } = req.body;
    if (!email || !senha) {
        return res.status(400).json({ message: "Email and password are required." });
    }
    if (email.trim() === "" || senha.trim() === "") {
        return res.status(401).json({ message: "Email and password cannot be empty." });
    }

    //consulta no banco de dados
    try {
        const result = await loginRepository.validarLogin(email);
        if (!result) { throw new Error(); }

        //remove senha do usuario
        const { senha: $senha, ...usuario } = result;

        //token
        const token = createJWT(usuario);
        res.status(200).json(token);

    } catch (error) {
        console.log(error);
        return res.status(402).json({ message: "Internal server error." });
    }
};



export default { login };