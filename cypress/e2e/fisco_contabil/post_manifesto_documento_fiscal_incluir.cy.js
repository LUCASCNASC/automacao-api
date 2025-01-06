// /v3/manifesto_documento_fiscal_incluir - Inclusão manifesto de documento fiscal
// Incluir manifesto de documento fiscal

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Fisco/Contábil - POST - /v3/manifesto_documento_fiscal_incluir', () => {
  const url = '/Fisco/Contabil/v3_post_manifesto_documento_fiscal_incluir';
  const token = acess_token
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_manifesto_documento_fiscal_incluir,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });