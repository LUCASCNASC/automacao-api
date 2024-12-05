// /v3/banco - Lista de banco
// Listar banco

import acess_token from '../../fixtures/token.json'

describe('Financeiro - GET - /v3/banco', () => {
  const url = '/Financeiro/v3_financeiro_banco3';
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