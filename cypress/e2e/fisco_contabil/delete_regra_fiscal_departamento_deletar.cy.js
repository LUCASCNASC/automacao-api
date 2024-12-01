// /v3/regra_fiscal_departamento_deletar/{idBaseFiscalDepartamento} - Exclusão de base fiscal (departamento)
// Excluir base fiscal de departamento

describe('Fisco/Contábil - DELETE - /v3/regra_fiscal_departamento_deletar/{idBaseFiscalDepartamento}', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {
      const requestBody = {
        idBaseFiscalDepartamento: ""
      }

      cy.request({
        method: 'DELETE', 
        url: '/Fisco/Contabil/v3_regra_fiscal_departamento_delete', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });