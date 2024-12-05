// /v3/pedido/{codigo} - Pedido Venda
// Dados do pedido de venda

import acess_token from '../../fixtures/token.json'

describe('Pedido - GET - /v3/pedido/{codigo}', () => {
  const url = '/Pedido/v2_pedido_get_delete1';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        idFilial: "",
        codigo: "",
        validarsituacaopedido: ""
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