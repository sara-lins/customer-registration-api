import { hash, hashSync } from "bcryptjs";
import request from "supertest";
import { app } from "../../server";
import { admUserMock } from "./user.mock";
import { prisma } from "../../prisma";

/* testes  */

/* login
1. é possível fazer login
2. não é possível fazer login de conta inexistente
3. não é possível fazer login com senha errada
*/

describe("Login", () => {
  let authorization: string = "";

  beforeAll(async () => {
    await prisma.user.create({
      data: admUserMock,
    });

    const loginAdm = await request(app).post("/users/login");
  });
});

/* Criar Cliente
1. é possível criar cliente
2. não é possível criar cliente sem os dados necessários
3. não é possível criar cliente com o mesmo email
*/

/* Listar todos Cliente
1. é possível listar os clientes
*/

/* Listar Cliente por id
1. é possível listar o cliente por id
2. não é possível listar o cliente com id inexistente
*/

/* Update Cliente por id
1. é possível atualizar dados do cliente (ele mesmo/admin)
2. não é possível atualizar dados do cliente se não for o próprio/admin
*/

/* Deletar Cliente
1. é possível deletar cliente (admin)
2. não é possível deletar cliente sem permissão
*/

/* Adicionar contato
1. é possível adicionar contato
2. não é possível adicionar contato sem token
3. não é possível adicionar contato com o mesmo email
4. não é possível adicionar contato com o mesmo telefone
*/
