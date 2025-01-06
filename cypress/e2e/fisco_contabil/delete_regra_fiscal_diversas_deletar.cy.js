// /v3/regra_fiscal_diversas_deletar/{idBaseFiscalDiversas} - Exclusão de base fiscal (diversas)
// Excluir base fiscal diversas

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Fisco/Contábil - DELETE - /v3/regra_fiscal_diversas_deletar/{idBaseFiscalDiversas}', () => {
  const url = '/Fisco/Contabil/v3_regra_fiscal_diversas_delete';
  const token = acess_token 
  
    it('Resposta 200', () => {
      const requestBody = {
        idBaseFiscalDiversas: ""
      }

      cy.request({
        method: 'DELETE', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          //'Content-Type': 'application/json'
        },
        requestBody,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });