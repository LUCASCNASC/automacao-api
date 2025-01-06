// /v3/produto_serie - Numero de serie
// Lista número de série disponível do produto

import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Produtos - GET - /v3/produto_serie ', () => {
  const url = '/Produto/v2_produto_serie';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        filial_saldo: "",
        sku: "",
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
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0]).toHaveProperty('numeroSerie');
          expect(resposta.body.retorno[0]).toHaveProperty('dataMovimento');
        });
    });
  });