// /v3/pedido_parcela_base_divisao - Parcela base
// Divide o(s) abatimento(s) em valor(es) mantendo a quantidade de parcela e processo iguais.

describe('Pedido - POST - /v3/pedido_parcela_base_divisao', () => {
    const url = 'http://localhost:8091/sabium#/Pedido/v3_pedido_parcela_base_divisao';
  
    it('POST - /v3/pedido_parcela_base_divisao - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });