// /v3/regra_fiscal_diversas_incluir - Inclusão de base fiscal (diversas)
// Incluir base fiscal diversas

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Fisco/Contábil - POST - /v3/regra_fiscal_diversas_incluir', { env: { hideCredendials: true } }, () => {
    
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
          expect(response.body.retorno[0]).toHaveProperty('IdBaseFiscalDiversas');
          expect(response.body.retorno[0]).toHaveProperty('Erros');
        });
    });
  });