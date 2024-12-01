// /v3/nota_incluir/ - Inclusão de nota fiscal
// Incluir nota fiscal, estoque e títulos, com base no XML

import reqBody_post_nota_incluir from '../../fixtures/fisco_contabil/post_nota_incluir.json'

describe('Fisco/Contábil - POST - /v3/nota_incluir/', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Fisco/Contabil/v3_post_nota_incluir', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_nota_incluir
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });