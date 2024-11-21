// /v3/regra_fiscal_departamento_alterar - Alteração de base fiscal (departamento)
// Alterar base fiscal de departamento

describe('Financeiro - PUT - /v3/regra_fiscal_departamento_alterar', () => {
    const url = 'http://localhost:8091/sabium#/Fisco/Contabil/v3_regra_fiscal_departamento_put';
  
    it('PUT - /v3/regra_fiscal_departamento_alterar - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição PUT
      cy.request('PUT', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });