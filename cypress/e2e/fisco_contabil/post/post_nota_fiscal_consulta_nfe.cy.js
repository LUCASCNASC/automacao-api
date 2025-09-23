// /v3/nota_fiscal_consulta_nfe/ - Consulta NFE
// Consulta NFE
// 200 - OK
// 204 - Sem dados de retorno

const API_URL = Cypress.env('API_URL');
const Authorization = Cypress.env('API.PRAGMA');

describe('Fisco/Contábil - POST - /v3/nota_fiscal_consulta_nfe/', { env: { hideCredendials: true } }, () => {
  it('Deve retornar 200 e as propriedades do resultado da consulta NFE', () => {
    cy.api({
      method: 'POST',
      url: `${API_URL}/Fisco/Contabil/v3_post_nota_fiscal_consulta_nfe`,
      headers: { Authorization },
      failOnStatusCode: false,
      body: {
        // Adicione payload conforme necessário para o endpoint
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      const ret = response.body.retorno[0];
      expect(ret).to.have.property('sucesso');
    });
  });
});