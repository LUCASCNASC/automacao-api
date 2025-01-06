// /v3/pedido_venda_cancelar/ - Efetua cancelamento pedido venda
// Efetua cancelamento pedido venda total ou parcial

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Pedido - POST - /v3/pedido_venda_cancelar/', { env: { hideCredendials: true } }, () => {

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