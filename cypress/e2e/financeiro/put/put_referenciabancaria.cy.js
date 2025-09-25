// /v3/referenciabancaria - Alteração de referência bancária
// Alterar referência bancária pelo CNPJ/CPF da pessoa e código da referência bancária
// 201 - Criado
// 500 - Internal Server Error

const BASE_URL = Cypress.env('BASE_URL');
const Authorization = Cypress.env('API.PRAGMA');

describe('Financeiro - PUT - /v3/referenciabancaria', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 201 e as propriedades da referência bancária alterada', () => {
    cy.api({
      method: 'PUT',
      url: `${BASE_URL}/Financeiro/v3_financeiro_referencia_bancaria2`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        // Exemplo de payload, ajuste conforme necessário:
        // idCnpjCpf: "12345678901",
        // idReferenciaBancaria: 1,
        // banco: "123",
        // agencia: "999",
        // conta: "99999-9"
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