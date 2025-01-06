// /v3/gerar_descarga_contabil - Descarga contábil
// Efetuar descarga contábil por filial e período

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Fisco/Contábil - POST - /v3/gerar_descarga_contabil', () => {
  const url = '/Fisco/Contabil/v3_post_gerar_descarga_contabil';
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
        body: reqBody_post_gerar_descarga_contabil,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });