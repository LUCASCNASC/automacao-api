// /v3/filial_lista/ - Dados Filial - Retorna uma lista das filiais

import reqBody_get_filial_lista from '../../fixtures/projeto_real_time/get_filial_lista.json'

describe('Projeto Real Time - GET - /v3/filial_lista/', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {
      
      cy.request({
        method: 'GET', 
        url: '/Projeto%20Real%20Time', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_get_filial_lista
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });