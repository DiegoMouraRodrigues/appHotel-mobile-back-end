import Express from "express";
import { Request, Response, NextFunction } from "express";

const app = Express();
app.use(Express.json());

app.get("/corpo", (req:Request, res:Response, next:NextFunction)=>{
  const nome = req.body.nome;  
  console.log("variavel dentro do copo - cliente digitou", nome);
  res.send(`variavel dentro do copo - voce digitou o nome:  ${nome}`);
})





export default app;
