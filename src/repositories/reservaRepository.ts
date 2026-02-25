import {pool} from "../database/database";
import { ResultSetHeader, RowDataPacket } from "mysql2";

import {} from "../models/quartos";

async function fazerPedido(data:any){
    const sql = "INSERT INTO pedidos (cliente_id, pagamento) VALUES (?, ?)";

    try {
        const [result] = await pool.query<ResultSetHeader>(sql, [
            data.cliente_id,
            data.pagamento
        ]);
        //apenas retorna o id do novo pedido
        return result.insertId;
    }catch (error) {
        console.log(error);
        throw new Error("Error ao criar o pedido");
    }
}

async function fazerReserva(idpedido:number, quarto:any) {
    const sql = "INSERT INTO reservas (pedido_id, quarto_id, inicio, fim) VALUES (?, ?, ?, ?)";
      try {
        const [result] = await pool.query<ResultSetHeader>(sql, [
            idpedido,
            quarto.id,
            quarto.dataInicio,
            quarto.dataFim
        ]);
        //apenas retorna o id do novo pedido
        return result.insertId;
    }catch (error) {
        console.log(error);
        throw new Error("Error ao criar a reserva");
    }
}
  

export default {fazerPedido, fazerReserva}