// /v3/produto - Informações do produto
// Dados dos produtos.

import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Produtos - GET - /v3/produto ', () => {
  const url = '/Produto/v2_produto_get';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        termo: "",
        departamento: "",
        marca: "",
        so_promocao: "",
        so_servico: ""
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