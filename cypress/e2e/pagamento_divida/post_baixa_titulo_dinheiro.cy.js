// /v3/baixa_titulo - Baixa título
// Baixa título

import reqBody_post_baixa_titulo from '../../fixtures/pagamento_divida/post_baixa_titulo_dinheiro.json'
import acess_token from '../../fixtures/token.json'

describe('Pagamento divida - POST - /v3/baixa_titulo', () => {
  const url = '/Pagamento%20divida/v2_divida_baixa_titulo';
  const token = acess_token
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_baixa_titulo,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });