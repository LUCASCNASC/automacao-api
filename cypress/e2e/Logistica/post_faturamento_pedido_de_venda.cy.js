// /v3/faturamento_pedido_de_venda - Dados para faturamento
// Fatura pedidos de venda de um cliente, que estão com situação fechado e não estão em nenhum mapa de carga. Pedido de venda poderá ser faturado completo ou parcial.

import reqBody_post_faturamento_pedido_de_venda from '../../fixtures/logistica/post_faturamento_pedido_de_venda.json'

describe('Logística - POST - /v3/faturamento_pedido_de_venda', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Log%C3%ADstica/v3_post_logistica_faturamentopedidovendaporcliente', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_faturamento_pedido_de_venda
      })
        .then((response) => {
          expect(response.status).to.eq(200);
        });
    });
  });