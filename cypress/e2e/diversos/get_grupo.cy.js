// /v3/grupo - Grupos
// Listar grupos

import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Diversos - GET - /v3/grupo', () => {
  const url = '/Diversos/v3_diversos_grupo';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        idtipogrupo: ""
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