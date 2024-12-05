// /v3/carne_pedido/{filial}/{pedido} - Carne Pedido Venda
// Impressão de Carnê por Pedido de Venda

import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Pagamento pedido - GET - /v3/carne_pedido/{filial}/{pedido}', () => {
  const url = '/Pagamento%20pedido/v3_pag_pedido_carne_pedido';
  const token = acess_token 
  
    it('Resposta 200', () => {
      const requestBody = {
        filial: "",
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
        });
    });
  });