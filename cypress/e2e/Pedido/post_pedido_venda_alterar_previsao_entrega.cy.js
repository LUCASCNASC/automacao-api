// /v3/pedido_venda_alterar_previsao_entrega/ - Alterar a previsão de entrega do pedido de venda
// Alteração da previsão de entrega do pedido de venda.

describe('Pedido - POST - /v3/pedido_venda_alterar_previsao_entrega/', () => {
    const url = 'http://localhost:8091/sabium#/Pedido/v3_post_pedido_venda_previsao_entrega';
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
    it('POST - /v3/pedido_venda_alterar_previsao_entrega/ - Resposta 200', () => {
      const requestBody = {
        "idFilial": 0,
        "idPedidoVenda": 0,
        "produtos": [
          {
            "idItemBase": 0,
            "previsaoEntrega": "string"
          }
        ]
      }
      // Realiza a requisição POST
      cy.request({
        method: 'POST', 
        url, 
        //headers: { authorization },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });