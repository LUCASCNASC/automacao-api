// /v3/pedido_venda_vinculanotarevenda/ - Dados da nota de revenda
// Serviço utilizado para relacionar nota de revenda com pedido de venda atacado que utiliza triangulação.

describe('Pedido - POST - /v3/pedido_venda_vinculanotarevenda/', () => {
    const url = 'http://localhost:8091/sabium#/Pedido/v3_post_pedido_venda_vinculanotarevenda';
  
    it('POST - /v3/pedido_venda_vinculanotarevenda/ - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });