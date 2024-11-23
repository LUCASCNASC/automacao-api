// /v3/regra_fiscal_uf_deletar/{idBaseFiscalUF} - Exclusão de base fiscal (UF)
// Excluir base fiscal de UF

describe('Fisco/Contábil - DELETE - /v3/regra_fiscal_uf_deletar/{idBaseFiscalUF}', () => {
    const url = 'http://localhost:8091/sabium#/Fisco/Contabil/v3_regra_fiscal_uf_delete';
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
    it('DELETE - /v3/regra_fiscal_uf_deletar/{idBaseFiscalUF} - Resposta 200', () => {
      const requestBody = {
        idBaseFiscalUF: ""
      }
      // Realiza a requisição DELETE
      cy.request({
        method: 'DELETE', 
        url, 
        //headers: { authorization },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });