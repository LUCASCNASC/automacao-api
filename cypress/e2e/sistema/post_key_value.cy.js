// /v3/key_value - Dados de chave e valor
// Incluir/Alterar chave e valor

import reqBody_post_key_value from '../../fixtures/sistema/post_key_value.json'
import acess_token from '../../fixtures/token.json'

describe('Sistema - POST - /v3/key_value', () => {
  const url = '/Sistema/v2_sistema_key_value_post';
  const token = acess_token
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_key_value,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });