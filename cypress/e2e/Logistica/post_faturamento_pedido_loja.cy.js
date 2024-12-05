// /v3/faturamento_pedido_loja - Dados para faturamento
// Fatura pedidos de loja de uma filial origem para uma filial destino que não estão em nenhum mapa de carga loja. Poderão ser faturados todos os pedidos de loja ou alguns, se especificado.

import reqBody_post_faturamento_pedido_loja from '../../fixtures/logistica/post_faturamento_pedido_loja.json'
import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Logística - POST - /v3/faturamento_pedido_loja', () => {
  const url = '/Log%C3%ADstica/v3_post_logistica_faturamentopedidolojaporfilial';
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
        body: reqBody_post_faturamento_pedido_loja,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });