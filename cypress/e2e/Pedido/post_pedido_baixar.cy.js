// /v3/pedido_baixar - Baixar pedido
// Baixar pedido de venda. Antes de baixar o pedido, deve fechar o mesmo.

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Pedido - POST - /v3/pedido_baixar', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {
      const requestBody = 

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { Authorization },
        failOnStatusCode: false
      })  
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });