// /v3/cliente_simples - Dados do cliente
// Incluir/Alterar cliente simplificado

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Cliente - POST - /v3/cliente_simples', { env: { hideCredendials: true } }
  , () => {
  
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
        });
    });
  });