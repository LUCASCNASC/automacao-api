// /v3/local_entrega - Local de entrega
// Listar locais de entrega

import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Diversos - GET - /v3/local_entrega', () => {
  const url = '/Diversos/v2_diversos_local_entrega';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        rota: ""
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