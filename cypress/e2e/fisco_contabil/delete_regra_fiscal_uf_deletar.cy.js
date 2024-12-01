// /v3/regra_fiscal_uf_deletar/{idBaseFiscalUF} - Exclusão de base fiscal (UF)
// Excluir base fiscal de UF

describe('Fisco/Contábil - DELETE - /v3/regra_fiscal_uf_deletar/{idBaseFiscalUF}', () => {
    const token = Cypress.env('AUTH_TOKEN'); 

    
    it('Resposta 200', () => {
      const requestBody = {
        idBaseFiscalUF: ""
      }

      cy.request({
        method: 'DELETE', 
        url: '/Fisco/Contabil/v3_regra_fiscal_uf_delete', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });