// /v3/regra_fiscal_departamento_alterar - Alteração de base fiscal (departamento)
// Alterar base fiscal de departamento

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Financeiro - PUT - /v3/regra_fiscal_departamento_alterar', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.request({
        method: 'PUT', 
        url: url, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
          expect(response.body.retorno[0]).toHaveProperty('IdBaseFiscalDepartamento');
          expect(response.body.retorno[0]).toHaveProperty('Erros');
        });
    });
  });