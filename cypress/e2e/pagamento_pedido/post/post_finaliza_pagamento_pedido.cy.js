// /v3/finaliza_pagamento_pedido - Finalizar pagamento
// Finalizar pagamento do pedido de venda pelo TOTEM. Pagamento feito no cartão. Utiliza o parâmetro de Empresa 422 - Conciliador TEF
//200 - OK
//412 - Falha - Não atende aos pré-requisitos

const BASE_URL = Cypress.env('BASE_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Financeiro - POST - /v3/finaliza_pagamento_pedido', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'POST', 
        url: `${BASE_URL}/Pagamento%20pedido/v2_pag_pedido_finaliza_pagamento_pedido`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });