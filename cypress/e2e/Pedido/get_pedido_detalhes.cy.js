// /v3/pedido_detalhes/{codigo} - Pedido detalhes
// Detalhes do pedido

describe('Pedido - GET - /v3/pedido_detalhes/{codigo}', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {
      const requestBody = {
        isFilial: "",
        codigo: ""
      }

      cy.request({
        method: 'GET', 
        url: '/Pedido/v2_pedido_detalhes', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody}
      )
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });