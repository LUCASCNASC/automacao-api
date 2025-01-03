// /v3/cidade - Cidades
// Listar de cidades

import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Diversos - GET - /v3/cidade', () => {
  const url = '/Diversos/v2_diversos_cidade';
  const token = acess_token 
  
    it('Resposta 200', () => {
      const requestBody = {
        uf: ""
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
          expect(resposta.body.retorno[0]).toHaveProperty('cidade_codigo');
          expect(resposta.body.retorno[0]).toHaveProperty('cidade_nome');
        });
    });
  });