// /v3/formas_pagamento_titulos - Lista de formas de pagamento por título
// Retorna as formas de pagamento disponíveis para os títulos informados.

describe('Financeiro - POST - /v3/formas_pagamento_titulos', () => {
    const url = 'http://localhost:8091/sabium#/Financeiro/v3_financeiro_formas_pagamento_titulos';
  
    it('POST - /v3/formas_pagamento_titulos - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });