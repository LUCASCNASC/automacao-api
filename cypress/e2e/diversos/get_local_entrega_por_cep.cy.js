// /v3/local_entrega_por_cep - Local de entrega por CEP
// Listar locais de entrega por CEP

import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Diversos - GET - /v3/local_entrega_por_cep', () => {
  const url = '/Diversos/v3_diversos_local_entrega_por_cep';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        cep: ""
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