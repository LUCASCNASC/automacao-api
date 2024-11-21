// /v3/pedido/{codigo} - Pedido Venda
// Excluir pedido de venda

describe('Pedido - DELETE - /v3/pedido/{codigo}', () => {
    const url = 'http://localhost:8091/sabium#/Pedido/v2_pedido_get_delete2';
  
    it('DELETE - /v3/pedido/{codigo} - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição DELETE
      cy.request('DELETE', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });