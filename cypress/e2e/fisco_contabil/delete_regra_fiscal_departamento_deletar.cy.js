// /v3/regra_fiscal_departamento_deletar/{idBaseFiscalDepartamento} - Exclusão de base fiscal (departamento)
// Excluir base fiscal de departamento

describe('Fisco/Contábil - DELETE - /v3/regra_fiscal_departamento_deletar/{idBaseFiscalDepartamento}', () => {
    const url = 'http://localhost:8091/sabium#/Fisco/Contabil/v3_regra_fiscal_departamento_delete';
  
    it('DELETE - /v3/regra_fiscal_departamento_deletar/{idBaseFiscalDepartamento} - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição DELETE
      cy.request('DELETE', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });