// /v3/cliente_simples - Dados do cliente
// Incluir/Alterar cliente simplificado

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Cliente - POST - /v3/cliente_simples', { env: { hideCredendials: true } }
  , () => {
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });