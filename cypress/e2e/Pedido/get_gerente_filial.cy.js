// /v3/gerente_filial/{idFilial} - Gerente Filial
// Retorna o gerente da filial informada

import acess_token from '../../fixtures/token.json'

describe('Pedido - GET - /v3/gerente_filial/{idFilial}', () => {
  const url = '/Pedido/v3_gerente_filial';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        idFilial: ""
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