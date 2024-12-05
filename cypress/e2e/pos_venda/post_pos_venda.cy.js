// /v3/pos_venda - Pós-venda
// Incluir contato de pós-venda

import reqBody_post_pos_venda from '../../fixtures/pos_venda/post_pos_venda.json'
import acess_token from '../../fixtures/token.json'

describe('Pós-venda - POST - /v3/pos_venda', () => {
  const url = '/P%C3%B3s-venda/v3_pos_venda_get_post2';
  const token = acess_token
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_pos_venda,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });