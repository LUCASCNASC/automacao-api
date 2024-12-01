// /v3/efetivar_proposta_abatimento - Efetivar proposta de abatimento
// Efetivar propostas de abatimento do sistema de gestão de devolução.

import reqBody_post_efetivar_proposta_abatimento from '../../fixtures/gestao_devolucao/post_efetivar_proposta_abatimento.json'

describe('Gestão Devolução - POST - /v3/efetivar_proposta_abatimento', () => {
    const token = Cypress.env('AUTH_TOKEN');  
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Gest%C3%A3o%20Devolu%C3%A7%C3%A3o/v2_gestao_devolucao_efetivar_proposta_abatimento', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_efetivar_proposta_abatimento
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });