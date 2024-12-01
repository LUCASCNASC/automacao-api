// /v3/pedido_relatorio/{codigo} - Relatório
// Relatório do pedido de venda

describe('Pedido - GET - /v3/pedido_relatorio/{codigo}', () => {
    const token = Cypress.env('AUTH_TOKEN'); 

    it('Resposta 200', () => {
      const requestBody = {
        codigo: ""
      }

      cy.request({
        method: 'GET', 
        url: '/Pedido/v2_pedido_relatorio', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });