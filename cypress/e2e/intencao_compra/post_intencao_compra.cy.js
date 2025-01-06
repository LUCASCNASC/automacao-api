// /v3/intencao_compra - Intenção compra
// Incluir intenção de compra

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Intenção compra - POST - /v3/intencao_compra', () => {
  const url = '/Inten%C3%A7%C3%A3o%20compra/v2_intencao_compra_get_post2';
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
        body: reqBody_post_intencao_compra,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });