// /v3/agencia - Inclusão de agência
// Incluir agência
// 201 - Criado
// 500 - Internal Server Error

const API_URL = Cypress.env('API_URL');
const Authorization = Cypress.env('API.PRAGMA');

describe('Financeiro - POST - /v3/agencia', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 201 ao incluir agência', () => {
    cy.api({
      method: 'POST',
      url: `${API_URL}/Financeiro/v3_financeiro_agencia1`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        // Exemplo de payload, ajuste conforme necessário para o endpoint real
        codigoBanco: 1,
        codigoAgencia: 100,
        nome: "Agência Central",
        endereco: "Rua Exemplo, 123"
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.duration).to.be.lessThan(2000);
    });
  });
});