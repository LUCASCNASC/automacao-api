// /v3/redefinir_senha - Nova senha de login
// Gera uma nova senha provisória para o usuário do login

import reqBody_post_redefinir_senha from '../../fixtures/sessao/post_redefinir_senha.json'

describe('Sessão - POST - /v3/redefinir_senha', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {

      cy.request({
        method: 'GET',
        url: '/Sess%C3%A3o/v3_post_redefinir_senha',
        //headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_redefinir_senha
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });