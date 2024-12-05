// /v3/cancela_inventario/{idFilial}/{idInventario} - Cancelar inventário
// Exclui toda a contagem já realizado de um inventário que não esteja finalizado, disponibilizando-o para outros usuários.

import acess_token from '../../fixtures/token.json'

describe('Inventário - POST - /v3/cancela_inventario/{idFilial}/{idInventario}', () => {
  const url = '/Invent%C3%A1rio/v3_post_cancela_inventario';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        idFilial: "",
        idInventario: ""
      }

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        requestBody,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });