// /v3/intencao_compra/{codigo} - Intenção compra
// Cancelar a intenção de compra

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const codigo = ""; //number - OBRIGATÓRIO

describe('Intenção compra - DELETE - /v3/intencao_compra/{codigo}', { env: { hideCredendials: true } }
  , () => {
  
    it('Resposta 200', () => {

      cy.request({
        method: 'DELETE', 
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