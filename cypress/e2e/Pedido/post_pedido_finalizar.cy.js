// /v3/pedido_finalizar - Gerar pedido
// Incluir/alterar pedido de venda mobile

describe('Pedido - POST - /v3/pedido_finalizar', () => {
    const url = 'http://localhost:8091/sabium#/Pedido/v3_pedido_finalizar';
  
    it('POST - /v3/pedido_finalizar - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });