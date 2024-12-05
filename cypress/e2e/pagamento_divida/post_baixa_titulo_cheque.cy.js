// /v3/baixa_titulo_cheque - Baixa título cheque
// Baixa título por cheque

import reqBody_post_baixa_titulo_cheque from '../../fixtures/pagamento_divida/post_baixa_titulo_cheque.json'
import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Financeiro - POST - /v3/baixa_titulo_cheque', () => {
  const url = '/Pagamento%20divida/v2_divida_baixa_titulo_cheque';
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
        body: reqBody_post_baixa_titulo_cheque,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });