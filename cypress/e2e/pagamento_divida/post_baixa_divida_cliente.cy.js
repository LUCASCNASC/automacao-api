// /v3/baixa_divida_cliente - Baixa títulos do cliente
// Baixa título do cliente

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Financeiro - POST - /v3/baixa_divida_cliente', () => {
  const url = '/Pagamento%20divida/v2_divida_baixa_cliente';
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
        body: reqBody_post_baixa_divida_cliente,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });