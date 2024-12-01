// /post_gerar_rateio_centro_custo/ - Consulta NFE
// Consulta NFE

import reqBody_post_gerar_rateio_centro_custo from '../../fixtures/fisco_contabil/post_gerar_rateio_centro_custo.json'

describe('Fisco/Contábil - POST - /v3/nota_fiscal_consulta_nfe/', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Fisco/Contabil/v3_post_gerar_rateio_centro_custo', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_gerar_rateio_centro_custo
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });