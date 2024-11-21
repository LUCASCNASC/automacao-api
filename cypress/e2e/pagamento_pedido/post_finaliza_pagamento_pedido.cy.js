// /v3/finaliza_pagamento_pedido - Finalizar pagamento
// Finalizar pagamento do pedido de venda pelo TOTEM. Pagamento feito no cartão. Utiliza o parâmetro de Empresa 422 - Conciliador TEF

describe('Financeiro - POST - /v3/finaliza_pagamento_pedido', () => {
    const url = 'http://localhost:8091/sabium#/Pagamento%20pedido/v2_pag_pedido_finaliza_pagamento_pedido';
  
    it('POST - /v3/finaliza_pagamento_pedido - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });