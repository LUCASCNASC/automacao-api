// /v3/efetivar_proposta_abatimento - Efetivar proposta de abatimento
// Efetivar propostas de abatimento do sistema de gestão de devolução.

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Gestão Devolução - POST - /v3/efetivar_proposta_abatimento', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });