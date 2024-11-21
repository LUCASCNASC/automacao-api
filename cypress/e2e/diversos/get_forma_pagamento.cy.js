// /v3/forma_pagamento - Forma pagamento
// Lista formas de pagamento

describe('Diversos - GET - /v3/forma_pagamento', () => {
    const url = 'http://localhost:8091/sabium#/Diversos/v2_diversos_forma_pagamento';
  
    it('GET - /v3/forma_pagamento - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição GET
      cy.request('GET', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });