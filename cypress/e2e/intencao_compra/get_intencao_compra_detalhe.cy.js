// /v3/intencao_compra_detalhe/{codigo} - Intenções de compras
// Lista intenções de compras

import acess_token from '../../fixtures/token.json'

describe('Intenção compra - GET - /v3/intencao_compra_detalhe/{codigo}', () => {
  const url = '/Inten%C3%A7%C3%A3o%20compra/v2_intencao_compra_detalhe';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        codigo: "",
        cliente: "",
        situacao: ""
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