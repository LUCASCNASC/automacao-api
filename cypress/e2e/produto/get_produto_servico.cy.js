// /v3/produto_servico/{servico} - Serviço preço
// Preço do serviço

import acess_token from '../../fixtures/token.json'

describe('Produtos - GET - /v3/produto_servico/{servico} ', () => {
  const url = '/Produto/v2_produto_servico';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        servico: ""
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