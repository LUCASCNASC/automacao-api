// /v3/movimento_bens_patrimonio_incluir/ - Incluir Movimento Patrimonio
// Incluir Movimento Patrimonio

import reqBody_post_movimento_bens_patrimonio_incluir from '../../fixtures/fisco_contabil/post_movimento_bens_patrimonio_incluir.json'

describe('Fisco/Contábil - POST - /v3/movimento_bens_patrimonio_incluir/', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Fisco/Contabil/v3_post_movimento_patrimonio', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_movimento_bens_patrimonio_incluir
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });