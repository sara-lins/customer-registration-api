# Customer Registration API

## Descrição do projeto (Project description)

Servidor elaborado para execução de um CRUD de usuários e contatos

Regras de negócio:

1. Um cliente pode ter vários contatos adicionados;
2. No cadastro do cliente o e-mail não deve ter sido cadastrado antes;
3. Não é possível adicionar o mesmo número (phone) mais de uma vez;
4. Um contato só pode ter um cliente como userId;
5. Para criar um contato é necessário permissão de ADM ou ser um cliente;
6. Para atualizar/deletar contato é necessário ser ADM ou o próprio cliente que o criou;
7. Para atualizar os dados do cliente é nessessário ser ADM ou o próprio cliente;
8. Para deletar o cadastro do cliente é necessário ser ADM;

Tecnologias (technologies): TypeScript, Express, Prisma, UUID, PostgreSQL, Jest, JsonWebToken.

Endpoint API:

Documentation:
