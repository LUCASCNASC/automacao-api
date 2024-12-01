// /v3/evento - Registra eventos do sistema
// Utilizado para registrar os eventos de movimentação dentro do Mobile

import reqBody_post_evento from '../../fixtures/sistema/post_evento.json'

describe('Sistema - POST - /v3/evento', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Sistema/v2_sistema_evento', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_evento
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });