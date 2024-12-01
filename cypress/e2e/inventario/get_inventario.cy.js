// /v3/inventario - Inventários
// Lista os inventários em aberto e que não estejam com a data limite da contagem expirada. Se usuário for gerente, lista os inventários de todos os usuários

import reqBody_get_inventario from '../../fixtures/inventario/get_inventario.json'

describe('Inventário - GET - /v3/inventario', () => {
    const token = Cypress.env('AUTH_TOKEN');  
  
    it('Resposta 200', () => {

      cy.request({
        method: 'GET', 
        url: '/Invent%C3%A1rio/v3_get_inventario', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_get_inventario
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });