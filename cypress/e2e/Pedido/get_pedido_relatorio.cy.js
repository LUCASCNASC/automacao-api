// /v3/pedido_relatorio/{codigo} - Relatório
// Relatório do pedido de venda

describe('Pedido - GET - /v3/pedido_relatorio/{codigo}', () => {
    const url = 'http://localhost:8091/sabium#/Pedido/v2_pedido_relatorio';
  
    it('GET - /v3/pedido_relatorio/{codigo} - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição GET
      cy.request('GET', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });