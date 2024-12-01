// /v3/forma_pagamento - Forma pagamento
// Lista formas de pagamento

describe('Diversos - GET - /v3/forma_pagamento', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {
      const requestBody = {
        "idformapagamento": 0,
        "descricao": "string"
      }

      cy.request({
        method: 'GET', 
        url: '/Diversos/v2_diversos_forma_pagamento', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });