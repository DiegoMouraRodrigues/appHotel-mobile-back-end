import { NextFunction, Request, Response } from "express";


async function registerCliente(req: Request, res: Response, next: NextFunction){
const { nome, email, senha} = req.body;

}