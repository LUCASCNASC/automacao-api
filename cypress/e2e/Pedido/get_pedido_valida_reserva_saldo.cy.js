// /v3/pedido_valida_reserva_saldo/{idFilial}/{idPedidoVenda} - Valida regra de controle de saldo para os produtos do pedido de venda
// Retorna informação se os itens do pedido de venda possuem saldo, terão nova previsão de faturamento ou precisam de reserva de saldo do CD. Válido apenas para regras de controle de saldo igual a 2-Somente total, 4-Somente total com reserva no CD, 5-Somente total com reserva no CD principal ou 7-Somente total com reserva na empresa distribuidora

import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Pedido - GET - /v3/pedido_valida_reserva_saldo/{idFilial}/{idPedidoVenda}', () => {
  const url = '/Pedido/v3_pedido_valida_reserva_saldo';
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