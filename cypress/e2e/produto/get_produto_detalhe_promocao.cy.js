// /v3/produto_detalhe_promocao/{produto} - Promoções do produto
// Promoções do produto.

import acess_token from '../../fixtures/token.json'

describe('Produtos - GET - /v3/produto_detalhe_promocao/{produto} ', () => {
  const url = '/Produto/v2_produto_detalhe_promocao';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        produto: "",
        processo_venda: ""
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