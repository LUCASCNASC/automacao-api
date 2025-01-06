// /v3/ecommerce_finalizar - Gerar pedido e-commerce
// Incluir/alterar pedido de venda e-commerce

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('E-commerce - POST - /v3/ecommerce_finalizar', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'POST', 
        url: url, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });