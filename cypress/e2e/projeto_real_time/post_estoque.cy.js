// /v3/estoque/ - Dados Estoque - Retorna o estoque

import reqBody_post_estoque from '../../fixtures/projeto_real_time/post_estoque.json'

describe('Projeto Real Time - POST - /v3/estoque/', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Projeto%20Real%20Time/v3_post_estoque', 
        //headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_estoque
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });