import { pool } from '../database/database';
import { registerCliente } from '../models/register';

async function validarCadastroCliente(email: string):Promise<registerCliente|null> {
    const sql = 'SELECT clientes.id, clientes.nome, clientes.cpf, clientes.telefone, clientes.email, clientes.senha, roles.nome AS cargo FROM clientes JOIN roles ON roles.id = clientes.cargo_id WHERE clientes.email = ?';
   const [linhas] = await pool.query<registerCliente[]>(sql, [email]);
   return linhas.length ? linhas[0] : null;
}

export default { validarCadastroCliente };
