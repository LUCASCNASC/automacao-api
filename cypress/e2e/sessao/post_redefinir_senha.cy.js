// /v3/redefinir_senha - Nova senha de login
// Gera uma nova senha provisória para o usuário do login

import reqBody_post_redefinir_senha from '../../fixtures/sessao/post_redefinir_senha.json'
import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Sessão - POST - /v3/redefinir_senha', () => {
  const url = '/Sess%C3%A3o/v3_post_redefinir_senha';
  const token = acess_token
  
    it('Resposta 200', () => {

      cy.request({
        method: 'GET',
        url: url,
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_redefinir_senha,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });