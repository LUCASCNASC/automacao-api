// /v3/banco/{codigo} - Exclusão de banco
// Excluir banco pelo código
//200 - OK

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const codigo = "" //number - OBRIGATÓRIO 

describe('Financeiro - DELETE - /v3/banco/{codigo}', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'DELETE', 
        url: `${API_URL}/Financeiro/v3_financeiro_banco_delete/${codigo}`, 
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