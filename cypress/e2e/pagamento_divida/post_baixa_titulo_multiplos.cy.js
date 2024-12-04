// /v3/baixa_titulo_multiplos - Baixa multiplas título
// Baixa multiplas título

import reqBody_post_baixa_titulo_multiplos from '../../fixtures/pagamento_divida/post_baixa_titulo_multiplos.json'

describe('Financeiro - POST - /v3/baixa_titulo_multiplos', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {
      const requestBody = 

      cy.request({
        method: 'POST', 
        url: '/Pagamento%20divida/v2_divida_baixa_titulo_multiplos', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_baixa_titulo_multiplos
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });