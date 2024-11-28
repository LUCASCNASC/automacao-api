// /v3/regra_fiscal_cfop_deletar/{idBaseFiscalCFOP} - Exclusão de base fiscal (CFOP)
// Excluir base fiscal de CFOP

describe('Fisco/Contábil - DELETE - /v3/regra_fiscal_cfop_deletar/{idBaseFiscalCFOP}', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('DELETE - /v3/regra_fiscal_cfop_deletar/{idBaseFiscalCFOP} - Resposta 200', () => {
      const requestBody = {
        idBaseFiscalCFOP: ""
      }
      // Realiza a requisição DELETE
      cy.request({
        method: 'DELETE', 
        url: '/Fisco/Contabil/v3_regra_fiscal_cfop_delete', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });