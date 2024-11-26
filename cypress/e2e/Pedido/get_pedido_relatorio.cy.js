// /v3/pedido_relatorio/{codigo} - Relatório
// Relatório do pedido de venda

describe('Pedido - GET - /v3/pedido_relatorio/{codigo}', () => {
    const url = 'http://localhost:8091/sabium#/Pedido/v2_pedido_relatorio';
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json

    it('GET - /v3/pedido_relatorio/{codigo} - Resposta 200', () => {
      const requestBody = {
        codigo: ""
      }
      // Realiza a requisição GET
      cy.request({
        method: 'GET', 
        url, 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });