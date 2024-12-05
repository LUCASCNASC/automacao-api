// /v3/itens_inventario/{idFilial}/{idInventario} - Itens do Inventário
// Lista os itens do inventários.

import acess_token from '../../fixtures/token.json'

describe('Inventário - GET - /v3/itens_inventario/{idFilial}/{idInventario}', () => {
  const url = '/Invent%C3%A1rio/v3_get_itens_inventario';
  const token = acess_token 
  
    it('Resposta 200', () => {
      const requestBody = {
        idFilial: "",
        idInventario: ""
      }

      cy.request({
        method: 'GET', 
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