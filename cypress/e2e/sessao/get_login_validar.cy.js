// /v3/login_validar - Validar pragma da sessão
// Valida o pragma da sessão.

import acess_token from '../../fixtures/token.json'

describe('Sessão - GET - /v3/login_validar', () => {
  const url = '/Sess%C3%A3o/v3_sessao_login_validar';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {}

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