// /v3/informa_numero_serie_pedido_loja - Dados dos números de série de um pedido de loja
// Serviço utilizado para informar número de série para itens de pedido de loja que será posteriormente faturado.

import reqBody_post_informa_numero_serie_pedido_loja from '../../fixtures/logistica/post_informa_numero_serie_pedido_loja.json'

describe('Logística - POST - /v3/informa_numero_serie_pedido_loja', () => {
    const token = Cypress.env('AUTH_TOKEN'); 

    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Log%C3%ADstica/v3_post_logistica_informanumeroseriepedidoloja', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_informa_numero_serie_pedido_loja
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });