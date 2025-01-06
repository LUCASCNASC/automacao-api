// /v3/formas_pagamento_titulos - Lista de formas de pagamento por título
// Retorna as formas de pagamento disponíveis para os títulos informados.

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Financeiro - POST - /v3/formas_pagamento_titulos', () => {
  const url = '/Financeiro/v3_financeiro_formas_pagamento_titulos';
  const token = acess_token
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_formas_pagamento_titulos,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });