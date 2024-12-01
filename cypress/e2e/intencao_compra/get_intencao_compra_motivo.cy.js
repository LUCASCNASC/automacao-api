// /v3/intencao_compra_motivo - Intenção compra motivo
// listas os motivos da intenção de compra

import reqBody_get_intencao_compra_motivo from '../../fixtures/intencao_compra/get_intencao_compra_motivo.json'

describe('Intenção compra - GET - /v3/intencao_compra_motivo', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {

      cy.request({
        method: 'GET', 
        url: '/Inten%C3%A7%C3%A3o%20compra/v2_intencao_compra_motivo', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_get_intencao_compra_motivo
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });