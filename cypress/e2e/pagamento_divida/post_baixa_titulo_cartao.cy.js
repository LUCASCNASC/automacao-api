// /v3/baixa_titulo - Baixa título
// Baixa título

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Pagamento divida - POST - /v3/baixa_titulo', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {
      const url = '/Pagamento%20divida/v2_divida_baixa_titulo';
      const token = acess_token

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_baixa_titulo,
        failOnStatusCode: false
    })
      .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });