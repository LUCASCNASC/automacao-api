// /v3/movimento_compra_venda/ - Dados Movimento - Retorna os movimentos de entrada e saída dos produtos

import reqBody_post_movimento_compra_venda from '../../fixtures/projeto_real_time/post_movimento_compra_venda.JSON'
import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Projeto Real Time - POST - /v3/movimento_compra_venda/', () => {
  const url = '/Projeto%20Real%20Time/v3_post_movimento_compra_venda';
  const token = acess_token
  
    it('POST - /v3/movimento_compra_venda/ - Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_movimento_compra_venda,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });