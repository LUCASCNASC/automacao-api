// /v3/saldo_disponivel/{idFilial}/{idPedidoVenda} - Saldo Disponível dos itens do Pedido
// Retorna o saldo dispinível dos ítens do pedido de venda

describe('Pedido - GET - /v3/saldo_disponivel/{idFilial}/{idPedidoVenda}', () => {
    const url = 'http://localhost:8091/sabium#/Pedido/v3_pedido_saldo_disponivel';
  
    it('GET - /v3/saldo_disponivel/{idFilial}/{idPedidoVenda} - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição GET
      cy.request('GET', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });