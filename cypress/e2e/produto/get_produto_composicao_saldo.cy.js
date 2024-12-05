// /v3/produto_composicao_saldo - Composição de saldo
// Composição de saldo do produto.

import acess_token from '../../fixtures/token.json'

describe('Produtos - GET - /v3/produto_composicao_saldo ', () => {
  const url = '/Produto/v2_produto_composicao_saldo';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        filial_saldo: "",
        sku: "",
        quantidade: "",
        local_saldo: ""
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