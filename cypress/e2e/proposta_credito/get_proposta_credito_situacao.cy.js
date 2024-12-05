// /v3/proposta_credito_situacao/{codigo} - Proposta crédito situação
// Situação da proposta crédito

import acess_token from '../../fixtures/token.json'

describe('Proposta crédito - GET - /v3/proposta_credito_situacao/{codigo}', () => {
  const url = '/Proposta%20cr%C3%A9dito/v2_proposta_credito_situacao';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        codigo: ""
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