// /v3/finaliza_inventario - Finaliza contagem de inventário pelo aplicativo
// Finaliza a contagem de inventário, podendo ser finalizado definitivo ou não

import reqBody_post_finaliza_inventario from '../../fixtures/inventario/post_finaliza_inventario.json'

describe('Inventário - POST - /v3/finaliza_inventario', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Invent%C3%A1rio/v3_post_finaliza_inventario', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_finaliza_inventario
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });