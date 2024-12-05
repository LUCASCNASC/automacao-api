// /v3/baixa_titulo_multiplos - Baixa multiplas título
// Baixa multiplas título

import reqBody_post_baixa_titulo_multiplos from '../../fixtures/pagamento_divida/post_baixa_titulo_multiplos.json'
import acess_token from '../../fixtures/token.json'

describe('Financeiro - POST - /v3/baixa_titulo_multiplos', () => {
  const url = '/Pagamento%20divida/v2_divida_baixa_titulo_multiplos';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = 

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_baixa_titulo_multiplos,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });