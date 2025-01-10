// /v3/agencia - Alteração de agência
// Alterar agência pelo código do banco e código da agência
//201 - Criado
//500 - Internal Server Error

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Financeiro - PUT - /v3/agencia', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 201', () => {

      cy.api({
        method: 'PUT', 
        url: `${API_URL}/Financeiro/v3_financeiro_agencia2`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(201);
          expect(response.duration).to.be.below(2000);
          expect(response.body.retorno[0]).toHaveProperty('codigoBanco');
          expect(response.body.retorno[0]).toHaveProperty('codigoAgencia');
        });
    });
  });