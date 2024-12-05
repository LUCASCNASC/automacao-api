// /v3/banco/{codigo} - Exclusão de banco
// Excluir banco pelo código

import acess_token from '../../fixtures/token.json'

describe('Financeiro - DELETE - /v3/banco/{codigo}', () => {
  const url = '/Financeiro/v3_financeiro_banco_delete';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        codigo: ""
      }

      cy.request({
        method: 'DELETE', 
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