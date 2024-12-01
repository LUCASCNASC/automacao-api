// /v3/regra_fiscal_diversas_deletar/{idBaseFiscalDiversas} - Exclusão de base fiscal (diversas)
// Excluir base fiscal diversas

describe('Fisco/Contábil - DELETE - /v3/regra_fiscal_diversas_deletar/{idBaseFiscalDiversas}', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {
      const requestBody = {
        idBaseFiscalDiversas: ""
      }

      cy.request({
        method: 'DELETE', 
        url: '/Fisco/Contabil/v3_regra_fiscal_diversas_delete', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });