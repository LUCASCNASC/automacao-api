// /v3/bloquetos_por_titulo - Impressão meio de cobrança
// Imprimir meio de cobrança em PDF (codificação Base64)

import reqBody_post_bloqueto_por_titulo from '../../fixtures/financeiro/post_bloquetos_por_titulos.json'

describe('Financeiro - POST - /v3/bloquetos_por_titulo', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Financeiro/v3_financeiro_bloquetos_por_titulo', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_bloqueto_por_titulo
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });