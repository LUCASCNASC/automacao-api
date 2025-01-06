// /v3/bloquetos_por_titulo - Impressão meio de cobrança
// Imprimir meio de cobrança em PDF (codificação Base64)

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Financeiro - POST - /v3/bloquetos_por_titulo', () => {
  const url = '/Financeiro/v3_financeiro_bloquetos_por_titulo';
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
        body: reqBody_post_bloqueto_por_titulo,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });