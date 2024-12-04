// /v3/baixa_titulo - Baixa título
// Baixa título

import reqBody_post_baixa_titulo from '../../fixtures/pagamento_divida/post_baixa_titulo_cartao.json'

describe('Pagamento divida - POST - /v3/baixa_titulo', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {
      const requestBody = 

      cy.request({
        method: 'POST', 
        url: '/Pagamento%20divida/v2_divida_baixa_titulo', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_baixa_titulo
    })
      .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });