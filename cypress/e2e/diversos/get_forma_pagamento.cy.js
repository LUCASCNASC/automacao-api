// /v3/forma_pagamento - Forma pagamento
// Lista formas de pagamento

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Diversos - GET - /v3/forma_pagamento', () => {
  const url = '/Diversos/v2_diversos_forma_pagamento';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        "idformapagamento": 0,
        "descricao": "string"
      }

      cy.request({
        method: 'GET', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          //'Content-Type': 'application/json'
        },
        requestBody,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0]).toHaveProperty('idformapagamento');
          expect(resposta.body.retorno[0]).toHaveProperty('descricao');
        });
    });
  });