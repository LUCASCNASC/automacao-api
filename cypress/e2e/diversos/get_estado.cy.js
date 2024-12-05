// /v3/estado - Estados
// Listar de estados

import acess_token from '../../fixtures/token.json'

describe('Diversos - GET - /v3/estado', () => {
  const url = '/Diversos/v2_diversos_estado';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        "uf_codigo": "string",
        "uf_nome": "string"
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