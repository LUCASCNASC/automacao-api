// /v3/baixa_divida_cliente - Baixa títulos do cliente
// Baixa título do cliente

import reqBody_post_baixa_divida_cliente from '../../fixtures/pagamento_divida/post_baixa_divida_cliente.json'

describe('Financeiro - POST - /v3/baixa_divida_cliente', () => {
    const token = Cypress.env('AUTH_TOKEN');  
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Pagamento%20divida/v2_divida_baixa_cliente', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_baixa_divida_cliente
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });