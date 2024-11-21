// /v3/pedidos_pendentes/{filial} - Pedidos
// Lista pedidos para pagamento

describe('Pagamento pedido - GET - /v3/pedidos_pendentes/{filial}', () => {
    const url = 'http://localhost:8091/sabium#/Pagamento%20pedido/v3_pag_pedidos_pendentes';
  
    it('GET - /v3/pedidos_pendentes/{filial} - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição GET
      cy.request('GET', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });