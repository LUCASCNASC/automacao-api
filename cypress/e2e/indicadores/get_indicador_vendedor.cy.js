// /v3/indicador_vendedor/{ano} - Indicadores do Vendedor
// Indicadores do vendedor

import acess_token from '../../fixtures/token.json'

describe('Indicadores - GET - /v3/indicador_vendedor/{ano}', () => {
  const url = '/Indicadores/v3_indicador_vendedor';
  const token = acess_token

    it('Resposta 200', () => {
      const requestBody = {
        ano: "",
        mes: "",
        dia: ""
      }

      cy.request({
        method: 'GET', 
        url: url, 
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
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