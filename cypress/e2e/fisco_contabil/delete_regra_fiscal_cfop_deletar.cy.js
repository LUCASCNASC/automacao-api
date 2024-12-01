// /v3/regra_fiscal_cfop_deletar/{idBaseFiscalCFOP} - Exclusão de base fiscal (CFOP)
// Excluir base fiscal de CFOP

describe('Fisco/Contábil - DELETE - /v3/regra_fiscal_cfop_deletar/{idBaseFiscalCFOP}', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {
      const requestBody = {
        idBaseFiscalCFOP: ""
      }

      cy.request({
        method: 'DELETE', 
        url: '/Fisco/Contabil/v3_regra_fiscal_cfop_delete', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });