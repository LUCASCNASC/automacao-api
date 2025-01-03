// /v3/gerente_filial/{idFilial} - Gerente Filial
// Retorna o gerente da filial informada

import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

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
          expect(resposta.body.retorno[0]).toHaveProperty('idUsuario');
          expect(resposta.body.retorno[0]).toHaveProperty('login');
          expect(resposta.body.retorno[0]).toHaveProperty('nome');
        });
    });
  });