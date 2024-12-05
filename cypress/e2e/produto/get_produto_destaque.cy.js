// /v3/produto_destaque - Produtos em destaque
// Lista de produtos em destaque.

import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Produtos - GET - /v3/produto_destaque ', () => {
  const url = '/Produto/v2_produto_destaque';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        id_processo: ""
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