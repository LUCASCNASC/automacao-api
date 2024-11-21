// /v3/pedido_validar_cliente - Validar cliente
// Validação do cliente no pedido de venda mobile

describe('Pedido - POST - /v3/pedido_validar_cliente', () => {
    const url = 'http://localhost:8091/sabium#/Pedido/v3_pedido_validar_cliente';
  
    it('POST - /v3/pedido_validar_cliente - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });