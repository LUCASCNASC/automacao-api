// Testes para o endpoint: /v3/referenciabancaria - Inclusão de referência bancária
// Incluir referência bancária
// Códigos de resposta esperados:
// - 201: Criado
// - 500: Internal Server Error

const BASE_URL = Cypress.env('BASE_URL');
const PATH_API = '/Financeiro/v3_financeiro_referencia_bancaria1';
const Authorization = Cypress.env('API.PRAGMA');

describe('API - Financeiro - POST /v3/referenciabancaria', { env: { hideCredentials: true } }, () => {
  it('Deve retornar 201 e as propriedades de referência bancária', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}${PATH_API}`,
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

  it('Deve retornar 500 ao tentar incluir referência bancária com payload inválido', () => {
    cy.api({
      method: 'POST',
      url: `${BASE_URL}${PATH_API}`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        // Payload inválido
      }
    }).then((response) => {
      expect(response.status).to.eq(500);
    });
  });
});