// /v3/finaliza_pagamento_pedido - Finalizar pagamento
// Finalizar pagamento do pedido de venda pelo TOTEM. Pagamento feito no cartão. Utiliza o parâmetro de Empresa 422 - Conciliador TEF

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Financeiro - POST - /v3/finaliza_pagamento_pedido', () => {
  const url = '/Pagamento%20pedido/v2_pag_pedido_finaliza_pagamento_pedido';
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
        body: reqBody_post_finaliza_pagamento_pedido,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });