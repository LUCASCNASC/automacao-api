// /v3/faturamento_pedido_loja - Dados para faturamento
// Fatura pedidos de loja de uma filial origem para uma filial destino que não estão em nenhum mapa de carga loja. Poderão ser faturados todos os pedidos de loja ou alguns, se especificado.

import reqBody_post_faturamento_pedido_loja from '../../fixtures/logistica/post_faturamento_pedido_loja.json'

describe('Logística - POST - /v3/faturamento_pedido_loja', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Log%C3%ADstica/v3_post_logistica_faturamentopedidolojaporfilial', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_faturamento_pedido_loja
      })
        .then((response) => {
          expect(response.status).to.eq(200);
        });
    });
  });