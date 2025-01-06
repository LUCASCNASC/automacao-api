// /v3/efetivar_proposta_abatimento - Efetivar proposta de abatimento
// Efetivar propostas de abatimento do sistema de gestão de devolução.

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Gestão Devolução - POST - /v3/efetivar_proposta_abatimento', () => {
  const url = '/Gest%C3%A3o%20Devolu%C3%A7%C3%A3o/v2_gestao_devolucao_efetivar_proposta_abatimento';
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
        body: reqBody_post_efetivar_proposta_abatimento,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });