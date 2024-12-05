// /v3/pedido_forma_pagamento - Forma pagamento
// Listar formas de pagamento para o pedido mobile

import reqBody_post_pedido_forma_pagamento from '../../fixtures/pedido/post_pedido_forma_pagamento.json'
import acess_token from '../../fixtures/token.json'

describe('Pedido - POST - /v3/pedido_forma_pagamento', () => {
  const url = '/Pedido/v3_pedido_forma_pagamento';
  const token = acess_token
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },

        body: reqBody_post_pedido_forma_pagamento,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });