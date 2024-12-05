// /v3/cliente/{cliente} - Dados do cliente
// Dados do cliente

import acess_token from '../../fixtures/token.json'

describe('Cliente - GET - /v3/cliente/{cliente}', () => {
  const url = '/Cliente/v2_cliente_get_delete_get';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        cliente: ""
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