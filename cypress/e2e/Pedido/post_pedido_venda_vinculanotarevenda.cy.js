// /v3/pedido_venda_vinculanotarevenda/ - Dados da nota de revenda
// Serviço utilizado para relacionar nota de revenda com pedido de venda atacado que utiliza triangulação.

describe('Pedido - POST - /v3/pedido_venda_vinculanotarevenda/', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('POST - /v3/pedido_venda_vinculanotarevenda/ - Resposta 200', () => {
      const requestBody = {
        "idFilial": 0,
        "idPedidoVenda": 0,
        "chaveSefaz": "string",
        "observacao": "string",
        "xmlNotaBase64": "string"
      }
      // Realiza a requisição POST
      cy.request({
        method: 'POST', 
        url: '/Pedido/v3_post_pedido_venda_vinculanotarevenda', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });