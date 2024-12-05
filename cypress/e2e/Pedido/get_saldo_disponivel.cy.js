// /v3/saldo_disponivel/{idFilial}/{idPedidoVenda} - Saldo Disponível dos itens do Pedido
// Retorna o saldo dispinível dos ítens do pedido de venda

import acess_token from '../../fixtures/token.json'

describe('Pedido - GET - /v3/saldo_disponivel/{idFilial}/{idPedidoVenda}', () => {
  const url = '/Pedido/v3_pedido_saldo_disponivel';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        idFilial: "",
        idPedidoVenda: ""
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