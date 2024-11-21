// /v3/pedido_calcular_frete - Calcular frete
// Calcular valor do frete para pedido mobile

describe('Pedido - POST - /v3/pedido_calcular_frete', () => {
    const url = 'http://localhost:8091/sabium#/Pedido/v3_pedido_calcular_frete';
  
    it('POST - /v3/pedido_calcular_frete - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });