// /v3/pedido_forma_pagamento - Forma pagamento
// Listar formas de pagamento para o pedido mobile

import reqBody_post_pedido_forma_pagamento from '../../fixtures/pedido/post_pedido_forma_pagamento.json'

describe('Pedido - POST - /v3/pedido_forma_pagamento', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Pedido/v3_pedido_forma_pagamento', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_pedido_forma_pagamento
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });