// /v3/sessao_login_altera_senha - Altera senha de usuário
// Altera senha para o usuário do sistema

import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Sessão - POST - /v3/sessao_login_altera_senha', () => {
  const url = '/Sess%C3%A3o/v3_post_sessao_login_altera_senha';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        "usuario": "string",
        "senha": "string",
        "novaSenha": "string"
      }

      cy.request({
        method: 'GET',
        url: url,
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          //'Content-Type': 'application/json'
        },
        requestBody,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });