// /v3/banco/{codigo} - Exclusão de banco
// Excluir banco pelo código

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const codigo = "" //number - OBRIGATÓRIO 

describe('Financeiro - DELETE - /v3/banco/{codigo}', { env: { hideCredendials: true } }, () => {
  
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