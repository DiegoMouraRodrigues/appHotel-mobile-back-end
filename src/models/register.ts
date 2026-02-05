import { RowDataPacket } from "mysql2";

export type registerCliente = RowDataPacket[] & {
    id: number;
    nome: string;
    cpf: string;
    email: string;
    telefone: string;
    cargo: string;

}
