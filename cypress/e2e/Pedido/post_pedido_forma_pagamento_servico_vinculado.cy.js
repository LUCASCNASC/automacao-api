// /v3/pedido_forma_pagamento_servico_vinculado - Serviços vinculados
// Listar serviços vinculados a forma de pagamento do pedido mobile

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Pedido - POST - /v3/pedido_forma_pagamento_servico_vinculado', () => {
  const url = '/Pedido/v3_pedido_forma_pagamento_servico_vinculado';
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

        body: reqBody_post_pedido_forma_pagamento_servico_vinculado,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });