// /v3/pedido_totalizadores - Totalizadores
// Totalizadores do pedido mobile

describe('Pedido - POST - /v3/pedido_totalizadores', () => {
    const url = 'http://localhost:8091/sabium#/Pedido/v3_pedido_totalizadores';
  
    it('POST - /v3/pedido_totalizadores - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });