// /v3/pedido_pendencia - Pedidos pendentes
// lista de pedidos pendente

describe('Pedido - GET - /v3/pedido_pendencia', () => {
    const url = 'http://localhost:8091/sabium#/Pedido/v2_pedido_pendencia';
  
    it('GET - /v3/pedido_pendencia - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição GET
      cy.request('GET', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });