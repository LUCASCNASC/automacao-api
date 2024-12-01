// /v3/pos_venda - Pós-venda
// Incluir contato de pós-venda

import reqBody_post_pos_venda from '../../fixtures/pos_venda/post_pos_venda.json'

describe('Pós-venda - POST - /v3/pos_venda', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/P%C3%B3s-venda/v3_pos_venda_get_post2', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_pos_venda
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });