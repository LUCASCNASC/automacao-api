// /v3/pedido_detalhes/{codigo} - Pedido detalhes
// Detalhes do pedido

import acess_token from '../../fixtures/token.json'

describe('Pedido - GET - /v3/pedido_detalhes/{codigo}', () => {
  const url = '/Pedido/v2_pedido_detalhes';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        isFilial: "",
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
      }
      )
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });