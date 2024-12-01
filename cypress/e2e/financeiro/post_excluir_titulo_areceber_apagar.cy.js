// /v3/excluir_titulo_areceber_apagar - Exclusão de título (a receber ou a pagar)
// Efetuar a exclusão de título a receber ou a pagar

import reqBody_post_excluir_titulo_areceber_apagar from '../../fixtures/financeiro/post_excluir_titulo_areceber_apagar.json'

describe('Financeiro - POST - /v3/excluir_titulo_areceber_apagar', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Financeiro/v3_excluir_titulo_areceber_apagar', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_excluir_titulo_areceber_apagar
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });