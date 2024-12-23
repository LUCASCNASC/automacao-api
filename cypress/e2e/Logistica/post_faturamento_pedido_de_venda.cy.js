// /v3/faturamento_pedido_de_venda - Dados para faturamento
// Fatura pedidos de venda de um cliente, que estão com situação fechado e não estão em nenhum mapa de carga. Pedido de venda poderá ser faturado completo ou parcial.

import reqBody_post_faturamento_pedido_de_venda from '../../fixtures/logistica/post_faturamento_pedido_de_venda.json'
import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Logística - POST - /v3/faturamento_pedido_de_venda', () => {
  const url = '/Log%C3%ADstica/v3_post_logistica_faturamentopedidovendaporcliente';
  const token = acess_token
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_faturamento_pedido_de_venda,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });