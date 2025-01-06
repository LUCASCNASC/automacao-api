// /v3/pesquisa_satisfacao - Pesquisa de Satisfação
// Lista das pesquisas de satisfação da pós-venda

import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Pós-venda - GET - /v3/pesquisa_satisfacao', () => {
  const url = '/P%C3%B3s-venda/v3_pesquisa_satisfacao';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        idfilial: ""
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
          expect(resposta.body.retorno[0]).toHaveProperty('idpesquisasatisfacao');
          expect(resposta.body.retorno[0]).toHaveProperty('descricao');
        });
    });
  });