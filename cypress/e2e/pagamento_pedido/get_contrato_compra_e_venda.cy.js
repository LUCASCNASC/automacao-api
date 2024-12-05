// /v3/contrato_compra_e_venda/{filial}/{pedido} - Contrato compra/venda
// Contrato da compra e venda

import acess_token from '../../fixtures/token.json'

describe('Pagamento pedido - GET - /v3/contrato_compra_e_venda/{filial}/{pedido}', () => {
  const url = '/Pagamento%20pedido/v2_pag_pedido_contrato_compra_e_venda';
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