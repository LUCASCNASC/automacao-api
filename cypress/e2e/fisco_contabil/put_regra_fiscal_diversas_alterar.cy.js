// /v3/regra_fiscal_diversas_alterar - Alteração de base fiscal (diversas)
// Alterar base fiscal diversas

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Financeiro - PUT - /v3/regra_fiscal_diversas_alterar', () => {
  const url = '/Fisco/Contabil/v3_regra_fiscal_diversas_put';
  const token = acess_token
  
    it('PUT - /v3/regra_fiscal_diversas_alterar - Resposta 200', () => {

      cy.request({
        method: 'PUT', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_put_regra_fiscal_diversas_alterar,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });