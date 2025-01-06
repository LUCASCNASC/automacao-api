// /v3/nota_fiscal_reenvio_nfe/ - Nota Fiscal (Reenvio)
// Realizar o reenvio da nota fiscal NFe

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Fisco/Contábil - POST - /v3/nota_fiscal_reenvio_nfe/', () => {
  const url = '/Fisco/Contabil/v3_post_nota_fiscal_reenvio_nfe';
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
        body: reqBody_post_nota_fiscal_reenvio_nfe,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });