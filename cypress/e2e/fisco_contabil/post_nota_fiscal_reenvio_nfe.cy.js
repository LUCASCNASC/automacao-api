// /v3/nota_fiscal_reenvio_nfe/ - Nota Fiscal (Reenvio)
// Realizar o reenvio da nota fiscal NFe

import reqBody_post_nota_fiscal_reenvio_nfe from '../../fixtures/fisco_contabil/post_nota_fiscal_reenvio_nfe.json'

describe('Fisco/Contábil - POST - /v3/nota_fiscal_reenvio_nfe/', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Fisco/Contabil/v3_post_nota_fiscal_reenvio_nfe', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_nota_fiscal_reenvio_nfe
      })
        .then((response) => {
          expect(response.status).to.eq(200);
        });
    });
  });