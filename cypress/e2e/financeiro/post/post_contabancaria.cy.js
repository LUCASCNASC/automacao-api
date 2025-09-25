// /v3/contabancaria - Inclusão de conta bancária
// Incluir conta bancária
// 201 - Criado
// 500 - Internal Server Error

const BASE_URL = Cypress.env('BASE_URL');
const Authorization = Cypress.env('API.PRAGMA');

describe('Financeiro - POST - /v3/contabancaria', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 201 ao incluir conta bancária', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}/Financeiro/v3_financeiro_conta_bancaria1`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        // Exemplo de payload, ajuste conforme necessário:
        // codigoBanco: 1,
        // codigoAgencia: 1001,
        // numeroConta: "123456-7",
        // titular: "Empresa Teste"
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.duration).to.be.lessThan(2000);
    });
  });
});