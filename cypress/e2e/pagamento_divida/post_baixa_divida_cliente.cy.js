// /v3/baixa_divida_cliente - Baixa títulos do cliente
// Baixa título do cliente

import reqBody_post_baixa_divida_cliente from '../../fixtures/pagamento_divida/post_baixa_divida_cliente.json'
import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Financeiro - POST - /v3/baixa_divida_cliente', () => {
  const url = '/Pagamento%20divida/v2_divida_baixa_cliente';
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
        body: reqBody_post_baixa_divida_cliente,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });