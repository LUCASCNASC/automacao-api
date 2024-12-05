// /v3/baixa_titulo_encontro_contas - Baixa título encontro de contas
// Baixa título por encontro de contas

import reqBody_post_baixa_titulo_encontro_contas from '../../fixtures/pagamento_divida/post_baixa_titulo_encontro_contas.json'
import acess_token from '../../fixtures/token.json'

describe('Financeiro - POST - /v3/baixa_titulo_encontro_contas', () => {
  const url = '/Pagamento%20divida/v2_divida_baixa_titulo_encontro_contas';
  const token = acess_token
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_baixa_titulo_encontro_contas,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });