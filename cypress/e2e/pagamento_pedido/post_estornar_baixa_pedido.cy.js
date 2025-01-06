// /v3/estornar_baixa_pedido - Estorno da baixar pedido
// Estornar baixa do pedido de venda pelo TOTEM

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Financeiro - POST - /v3/estornar_baixa_pedido', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

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