// /v3/inclui_pedido_venda_mapa_carga_cliente - Insere o pedido de venda no mapa de carga cliente
// Todo os itens do pedido de venda podem ser incluídos no mapa de carga, ou o pedido de venda pode ser incluído parcialmente, informando os itembases.

import reqBody_post_inclui_pedido_venda_mapa_carga_cliente from '../../fixtures/logistica/post_inclui_pedido_venda_mapa_carga_cliente.json'

describe('Logística - POST - /v3/inclui_pedido_venda_mapa_carga_cliente', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('POST - /v3/inclui_pedido_venda_mapa_carga_cliente - Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Log%C3%ADstica/v3_post_inclui_pedido_venda_mapa_carga_cliente', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_inclui_pedido_venda_mapa_carga_cliente
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });