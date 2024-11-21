// /v3/regra_fiscal_diversas_deletar/{idBaseFiscalDiversas} - Exclusão de base fiscal (diversas)
// Excluir base fiscal diversas

describe('Fisco/Contábil - DELETE - /v3/regra_fiscal_diversas_deletar/{idBaseFiscalDiversas}', () => {
    const url = 'http://localhost:8091/sabium#/Fisco/Contabil/v3_regra_fiscal_diversas_delete';
  
    it('DELETE - /v3/regra_fiscal_diversas_deletar/{idBaseFiscalDiversas} - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição DELETE
      cy.request('DELETE', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });