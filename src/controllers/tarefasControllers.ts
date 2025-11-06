import { Request, Response, NextFunction } from "express";

function getTarefas(req:Request, res:Response, next:NextFunction){
    res.send("listar todas as tarefas")
}

function getTarefa(req:Request, res:Response, next:NextFunction){
    res.send("listar todas as tarefas")
}

function criarTarefa(req:Request, res:Response, next:NextFunction){
    res.send("criar todas as tarefas")
}

function atualizarTarefa(req:Request, res:Response, next:NextFunction){
    res.send("atualizar todas as tarefas")
}

function deletarTarefa(req:Request, res:Response, next:NextFunction){
    res.send("deletar tarefas todas as tarefas")
}

export default{
    getTarefas, getTarefa,   criarTarefa,   atualizarTarefa,   deletarTarefa
};