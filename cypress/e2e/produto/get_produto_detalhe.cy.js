// /v3/produto_detalhe/{produto} - Detalhes do produto
// Detalhes do produto.

import acess_token from '../../fixtures/token.json'

describe('Produtos - GET - /v3/produto_detalhe/{produto} ', () => {
  const url = '/Produto/v2_produto_detalhe';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        produto: "",
        pesquisagtin: "",
        pedido: ""
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
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });