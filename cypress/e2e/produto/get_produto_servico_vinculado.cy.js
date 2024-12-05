// /v3/produto_servico_vinculado - Preços do produto
// Preços do produto.

import acess_token from '../../fixtures/token.json'

describe('Produtos - GET - /v3/produto_servico_vinculado ', () => {
  const url = '/Produto/v2_produto_servico_vinculado';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        sku: "",
        valor: "",
        tipo_servico: "",
        processo:""
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