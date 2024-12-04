// /v3/finaliza_pagamento_pedido - Finalizar pagamento
// Finalizar pagamento do pedido de venda pelo TOTEM. Pagamento feito no cartão. Utiliza o parâmetro de Empresa 422 - Conciliador TEF

import reqBody_post_finaliza_pagamento_pedido from '../../fixtures/pagamento_pedido/post_finaliza_pagamento_pedido.json'

describe('Financeiro - POST - /v3/finaliza_pagamento_pedido', () => {
    const token = Cypress.env('AUTH_TOKEN');  
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Pagamento%20pedido/v2_pag_pedido_finaliza_pagamento_pedido', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_finaliza_pagamento_pedido
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });