// /v3/finaliza_inventario - Finaliza contagem de inventário pelo aplicativo
// Finaliza a contagem de inventário, podendo ser finalizado definitivo ou não

import reqBody_post_finaliza_inventario from '../../fixtures/inventario/post_finaliza_inventario.json'
import acess_token from '../../fixtures/token.json'

describe('Inventário - POST - /v3/finaliza_inventario', () => {
  const url = '/Invent%C3%A1rio/v3_post_finaliza_inventario';
  const token = acess_token
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_finaliza_inventario,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });