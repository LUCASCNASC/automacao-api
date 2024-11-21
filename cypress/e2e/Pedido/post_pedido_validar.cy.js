// /v3/pedido_validar - Validar
// Validação do pedido de venda mobile

describe('Pedido - POST - /v3/pedido_validar', () => {
    const url = 'http://localhost:8091/sabium#/Pedido/v3_pedido_validar';
  
    it('POST - /v3/pedido_validar - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });