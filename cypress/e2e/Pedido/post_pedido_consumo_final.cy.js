// /v3/pedido_consumo_final - Consumo Final
// Retorna se o pedido foi feito para um Consumidor Final

describe('Pedido - POST - /v3/pedido_consumo_final', () => {
    const url = 'http://localhost:8091/sabium#/Pedido/v3_pedido_consumo_final';
  
    it('POST - /v3/pedido_consumo_final - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });