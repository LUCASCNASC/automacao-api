// /v3/proposta_credito/{data_inicial} - Proposta crédito
// Lista proposta de crédito

import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Proposta crédito - GET - /v3/proposta_credito/{data_inicial}', () => {
  const url = '/Proposta%20cr%C3%A9dito/v2_proposta_credito_get';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        data_inicial: "",
        vendedor: "",
        cliente: "",
        limit: "",
        offset: ""
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