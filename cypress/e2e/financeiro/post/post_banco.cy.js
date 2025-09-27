// /v3/banco - Inclusão de banco
// Incluir cadastro de banco
// 201 - Criado
// 500 - Internal Server Error

const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Financeiro/v3_financeiro_banco1';
const Authorization = Cypress.env('API.PRAGMA');

describe('Financeiro - POST - /v3/banco', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 201 ao incluir banco', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        // Exemplo de payload, ajuste conforme necessário:
        // nome: "Banco de Teste",
        // codigo: "123",
        // agencia: "0001"
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.duration).to.be.lessThan(2000);
      expect(response.body.retorno[0]).to.have.property('codigo');
    });
  });
});