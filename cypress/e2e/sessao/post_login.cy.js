// /v3/login - Login do sistema
// Estabelece uma comunicação com o sistema com base no usuário.

import acess_token from '../../fixtures/token.json'

describe('Sessão - POST - /v3/login', () => {
  const url = '/Sess%C3%A3o/v3_sessao_login_post';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        "chave_login": "string"
      }

      cy.request({
        method: 'GET',
        url: url,
        headers: { 
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