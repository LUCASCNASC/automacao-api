// /v3/pedido/{codigo} - Pedido Venda
// Excluir pedido de venda

describe('Pedido - DELETE - /v3/pedido/{codigo}', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {
      const requestBody = {
        codigo: "",
        idfilial: ""
      }

      cy.request({
        method: 'DELETE', 
        url: '/Pedido/v2_pedido_get_delete2', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });