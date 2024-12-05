// /v3/intencao_compra/{codigo} - Intenção compra
// Cancelar a intenção de compra

import acess_token from '../../fixtures/token.json'

describe('Intenção compra - DELETE - /v3/intencao_compra/{codigo}', () => {
  const url = '/Inten%C3%A7%C3%A3o%20compra/v2_intencao_compra_delete';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        codigo: ""
      }

      cy.request({
        method: 'DELETE', 
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