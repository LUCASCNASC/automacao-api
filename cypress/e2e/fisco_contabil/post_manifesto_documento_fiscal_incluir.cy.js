// /v3/manifesto_documento_fiscal_incluir - Inclusão manifesto de documento fiscal
// Incluir manifesto de documento fiscal

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Fisco/Contábil - POST - /v3/manifesto_documento_fiscal_incluir', { env: { hideCredendials: true } }, () => {
  
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
          expect(response.body.retorno[0]).toHaveProperty('Id_Manifesto_Documento_Fiscal');
          expect(response.body.retorno[0]).toHaveProperty('Id_Filial');
          expect(response.body.retorno[0]).toHaveProperty('Erros');
        });
    });
  });