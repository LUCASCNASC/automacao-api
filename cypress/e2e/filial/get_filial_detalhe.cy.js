// /v3/filial_detalhe/{filial} - Dados da Filial
// Retorna dados cadastrais da filial.

import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Filial - GET - /v3/filial_detalhe/{filial}', () => {
  const url = '/Filial/v2_filial_detalhe';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        filial: ""
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