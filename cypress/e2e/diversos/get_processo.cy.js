// /v3/processo - Processos Mobile
// Carregar dados dos processos configurados para o Mobile

import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Diversos - GET - /v3/processo', () => {
  const url = '/Diversos/v2_diversos_processo';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {}

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