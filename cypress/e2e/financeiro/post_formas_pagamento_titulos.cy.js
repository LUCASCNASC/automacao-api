// /v3/formas_pagamento_titulos - Lista de formas de pagamento por título
// Retorna as formas de pagamento disponíveis para os títulos informados.

import reqBody_post_formas_pagamento_titulos from '../../fixtures/financeiro/post_excluir_titulo_areceber_apagar.json'

describe('Financeiro - POST - /v3/formas_pagamento_titulos', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Financeiro/v3_financeiro_formas_pagamento_titulos', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_formas_pagamento_titulos
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });