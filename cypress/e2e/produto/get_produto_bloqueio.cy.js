// /v3/produto_bloqueio - Lista de bloqueio
// Produto bloqueado.

import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Produtos - GET - /v3/produto_bloqueio', () => {
  const url = '/Produto/v2_produto_bloqueio';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        filial: "",
        sku: "",
        id_cnpj_cpf: ""
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