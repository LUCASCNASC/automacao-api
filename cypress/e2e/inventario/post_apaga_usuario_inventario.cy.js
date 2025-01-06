// /v3/apaga_usuario_inventario/{idFilial}/{idInventario} - Apaga o usuário do inventário
// Apaga o usuário do inventário se não existir nenhuma contagem existente.

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Inventário - POST - /v3/apaga_usuario_inventario/{idFilial}/{idInventario}', () => {
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          //'Content-Type': 'application/json'
        },
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });