// /v3/recarga - Recarga Telefone
// Efetivar Recarga Telefone

import reqBody_post_recarga from '../../fixtures//recarga/post_recarga.json'

describe('Titulo - POST - /v3/recarga', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {

      cy.request({
        method: 'GET', 
        url: '/Recarga/v3_post_recarga', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_recarga
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });