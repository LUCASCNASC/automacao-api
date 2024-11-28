// /v3/estoque/ - Dados Estoque - Retorna o estoque

import requestBodyEstoque from '../../fixtures/projeto_real_time/post_estoque.json'

describe('Projeto Real Time - POST - /v3/estoque/', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('POST - /v3/estoque/ - Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Projeto%20Real%20Time/v3_post_estoque', 
        //headers: { Authorization: `Bearer ${token}` },
        body: requestBodyEstoque
      })
        .then((response) => {
          expect(response.body).to.have.property('retorno').and.to.be.an('array').and.to.have.lengthOf(2);
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });