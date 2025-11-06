import Express from "express";
import { Request, Response, NextFunction } from "express";

const app = Express();
app.use(Express.json());

app.get("/corpo", (req:Request, res:Response, next:NextFunction)=>{
  const nome = req.body.nome;  
  console.log("variavel dentro do copo - cliente digitou", nome);
  res.send(`variavel dentro do copo - voce digitou o nome:  ${nome}`);
})


// app.get("/parametro/:nome", (req:Request, res:Response, next:NextFunction)=>{
//   const nome = req.params.nome;  
//   console.log("Rota de paramentro - cliente digitou", nome);
//   res.send(`voce digitou o nome:  ${nome}`);
// })

// app.get("/query", (req:Request, res:Response, next:NextFunction)=>{
//   const nome = req.query.nome;  
//   console.log("cliente digitou", nome);
//   res.send(`voce digitou o nome:  ${nome}`);
// })

// app.get("/exemplo", (req:Request, res:Response, next:NextFunction)=>{
// console.log('aconteceu algo...')
// res.send("rodou tudo certo");
// });

// //rota genetica para representar e aparecer hello world
// app.use((req: Request, res: Response, next: NextFunction) => {
//   res.send("hello world!!");
// });

// //rota de erro
// app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
//   res.send(err);
//   res.status(500).send("Erro na requisição");
// });


export default app;
