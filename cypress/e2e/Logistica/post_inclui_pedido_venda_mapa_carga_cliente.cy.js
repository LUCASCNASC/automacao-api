// /v3/inclui_pedido_venda_mapa_carga_cliente - Insere o pedido de venda no mapa de carga cliente
// Todo os itens do pedido de venda podem ser incluídos no mapa de carga, ou o pedido de venda pode ser incluído parcialmente, informando os itembases.

describe('Logística - POST - /v3/inclui_pedido_venda_mapa_carga_cliente', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('POST - /v3/inclui_pedido_venda_mapa_carga_cliente - Resposta 200', () => {
      const requestBody = {
        "idFilialMapa": 0,
        "idMapaCarga": 0,
        "idFilialPedido": 0,
        "idPedidoVenda": 0,
        "produtos": [
          {
            "idItemBase": 0
          }
        ]
      }
      // Realiza a requisição POST
      cy.request({
        method: 'POST', 
        url: '/Log%C3%ADstica/v3_post_inclui_pedido_venda_mapa_carga_cliente', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });