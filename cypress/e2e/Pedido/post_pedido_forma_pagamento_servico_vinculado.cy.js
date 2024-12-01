// /v3/pedido_forma_pagamento_servico_vinculado - Serviços vinculados
// Listar serviços vinculados a forma de pagamento do pedido mobile

import reqBody_post_pedido_forma_pagamento_servico_vinculado from '../../fixtures/pedido/post_pedido_forma_pagamento_servico_vinculado.json'

describe('Pedido - POST - /v3/pedido_forma_pagamento_servico_vinculado', () => {
    const token = Cypress.env('AUTH_TOKEN');  
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Pedido/v3_pedido_forma_pagamento_servico_vinculado', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_pedido_forma_pagamento_servico_vinculado
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });