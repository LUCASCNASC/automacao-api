// /v3/titulo_incluir - Incluir Título A Receber/Pagar
// Inclusão A Receber/Pagar de Título, Parcela e Cartão

import reqBody_post_titulo_incluir from '../../fixtures/titulo/post_titulo_incluir.json'

describe('Titulo - POST - /v3/titulo_incluir', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {

      cy.request({
        method: 'GET', 
        url: '/Titulo/v3_post_titulo_incluir', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_titulo_incluir
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });