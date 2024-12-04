// /v3/key_value - Dados de chave e valor
// Incluir/Alterar chave e valor

import reqBody_post_key_value from '../../fixtures/sistema/post_key_value.json'

describe('Sistema - POST - /v3/key_value', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Sistema/v2_sistema_key_value_post', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_key_value
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });