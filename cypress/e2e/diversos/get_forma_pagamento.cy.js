// /v3/forma_pagamento - Forma pagamento
// Lista formas de pagamento

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Diversos - GET - /v3/forma_pagamento', { env: { hideCredendials: true } }
  , () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'GET', 
        url: url, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0]).toHaveProperty('idformapagamento');
          expect(resposta.body.retorno[0]).toHaveProperty('descricao');
        });
    });
  });