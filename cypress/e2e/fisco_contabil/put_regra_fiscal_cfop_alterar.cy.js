// /v3/regra_fiscal_cfop_alterar - Alteração de base fiscal (CFOP)
// Alterar base fiscal de CFOP

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Financeiro - PUT - /v3/regra_fiscal_cfop_alterar', { env: { hideCredendials: true } }, () => {
  
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
          expect(response.body.retorno[0]).toHaveProperty('IdBaseFiscalCFOP');
          expect(response.body.retorno[0]).toHaveProperty('Erros');
        });
    });
  });