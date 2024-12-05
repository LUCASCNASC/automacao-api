// /v3/produto_previsao_entrega - Previsão de entrega
// Previsão de entrega do produto.

import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Produtos - GET - /v3/produto_previsao_entrega ', () => {
  const url = '/Produto/v2_produto_previsao_entrega';
  const token = acess_token
    
    it('Resposta 200', () => {
      const requestBody = {
        processo_venda: "",
        filial: "",
        filial_faturar: "",
        filial_saldo: "",
        sku: "",
        quantidade: "",
        local_saldo: ""
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