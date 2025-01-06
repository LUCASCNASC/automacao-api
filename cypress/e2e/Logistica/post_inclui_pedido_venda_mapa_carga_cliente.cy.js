// /v3/inclui_pedido_venda_mapa_carga_cliente - Insere o pedido de venda no mapa de carga cliente
// Todo os itens do pedido de venda podem ser incluídos no mapa de carga, ou o pedido de venda pode ser incluído parcialmente, informando os itembases.

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Logística - POST - /v3/inclui_pedido_venda_mapa_carga_cliente', { env: { hideCredendials: true } }, () => {
  
    it('POST - /v3/inclui_pedido_venda_mapa_carga_cliente - Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0]).toHaveProperty('idFilial');
          expect(resposta.body.retorno[0]).toHaveProperty('idMapaCarga');
          expect(resposta.body.retorno[0].itemNaoIncluido[0]).toHaveProperty('idPedidoVenda');
          expect(resposta.body.retorno[0].itemNaoIncluido[0]).toHaveProperty('idItemBase');
          expect(resposta.body.retorno[0].itemNaoIncluido[0]).toHaveProperty('sku');
          expect(resposta.body.retorno[0].itemNaoIncluido[0]).toHaveProperty('motivo');
        });
    });
  });