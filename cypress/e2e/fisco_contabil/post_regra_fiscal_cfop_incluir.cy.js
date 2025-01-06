// /v3/regra_fiscal_cfop_incluir - Inclusão de base fiscal (CFOP)
// Incluir base fiscal de CFOP

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Fisco/Contábil - POST - /v3/regra_fiscal_cfop_incluir', { env: { hideCredendials: true } }, () => {
  
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
          expect(response.body.retorno[0]).toHaveProperty('IdBaseFiscalCFOP');
          expect(response.body.retorno[0]).toHaveProperty('Erros');
        });
    });
  });