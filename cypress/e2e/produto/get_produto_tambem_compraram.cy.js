// /v3/produto_tambem_compraram - Tambem compraram
// Relacionamento dos produtos com base em vendas conjuntas concretizadas.

import acess_token from '../../fixtures/token.json'

describe('Produtos - GET - /v3/produto_tambem_compraram ', () => {
  const url = '/Produto/v2_produto_tambem_compraram';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        lista: ""
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