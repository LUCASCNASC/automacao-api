// /v3/banco - Alteração de banco
// Alterar banco pelo código
//201 - Criado
//500 - Internal Server Error

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Financeiro - PUT - /v3/banco', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 201', () => {

      cy.api({
        method: 'PUT', 
        url: `${API_URL}/Financeiro/v3_financeiro_banco2`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(201);
          expect(response.duration).to.be.below(2000); 
          expect(response.body.retorno[0]).toHaveProperty('codigo');
        });
    });
  });