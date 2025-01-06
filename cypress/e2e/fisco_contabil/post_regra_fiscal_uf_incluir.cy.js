// /v3/regra_fiscal_uf_incluir - Incluisão de base fiscal (UF)
// Incluir base fiscal de UF

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Fisco/Contábil - POST - /v3/regra_fiscal_uf_incluir', { env: { hideCredendials: true } }, () => {
  
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
          expect(response.body.retorno[0]).toHaveProperty('IdBaseFiscalUF');
          expect(response.body.retorno[0]).toHaveProperty('Erros');
        });
    });
  });