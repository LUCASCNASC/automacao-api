// /v3/pedido_impressoes_disponiveis/{idFilial}/{idPedidoVenda} - Impressoes Disponíveis Pedido
// Retorna a lista do que pode ser impresso em um pedido de venda.

describe('Pedido - GET - /v3/pedido_impressoes_disponiveis/{idFilial}/{idPedidoVenda}', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('GET - /v3/pedido_impressoes_disponiveis/{idFilial}/{idPedidoVenda} - Resposta 200', () => {
      const requestBody = {
        idFilial: "",
        idPedidoVenda: ""
      }
      // Realiza a requisição GET
      cy.request({
        method: 'GET', 
        url: '/Pedido/v3_pedido_impressoes_disponiveis', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });