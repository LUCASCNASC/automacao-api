// /v3/estoque/ - Dados Estoque - Retorna o estoque

import reqBody_post_estoque from '../../fixtures/projeto_real_time/post_estoque.json'
import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Projeto Real Time - POST - /v3/estoque/', () => {
    const url = '/Projeto%20Real%20Time/v3_post_estoque';
    const token = acess_token
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_estoque,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });