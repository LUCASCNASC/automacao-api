// /v3/referenciabancaria - Inclusão de refência bancária
// Incluir referência bancária

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Financeiro - POST - /v3/referenciabancaria', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'POST', 
        url: url, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(response.body.retorno[0]).toHaveProperty('idCnpjCpf');
          expect(response.body.retorno[0]).toHaveProperty('idReferenciaBancaria');
        });
    });
  });