// /v3/pedido/{codigo} - Pedido Venda
// Excluir pedido de venda

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const codigo = ""; //number - OBRIGATÓRIO
const idfilial = ""; //number - OBRIGATÓRIO

describe('Pedido - DELETE - /v3/pedido/{codigo}', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.request({
        method: 'DELETE', 
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