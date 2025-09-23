// /v3/referenciabancaria - Inclusão de referência bancária
// Incluir referência bancária
// 201 - Criado
// 500 - Internal Server Error

const API_URL = Cypress.env('API_URL');
const Authorization = Cypress.env('API.PRAGMA');

describe('Financeiro - POST - /v3/referenciabancaria', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 201 e as propriedades de referência bancária', () => {
    cy.api({
      method: 'POST',
      url: `${API_URL}/Financeiro/v3_financeiro_referencia_bancaria1`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        // Exemplo de payload, ajuste conforme necessário:
        // idCnpjCpf: "12345678901",
        // banco: "001",
        // agencia: "1234",
        // conta: "56789-0"
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('idCnpjCpf');
      expect(ret).to.have.property('idReferenciaBancaria');
    });
  });
});