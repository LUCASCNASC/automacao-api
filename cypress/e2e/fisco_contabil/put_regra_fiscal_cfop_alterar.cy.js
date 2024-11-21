// /v3/regra_fiscal_cfop_alterar - Alteração de base fiscal (CFOP)
// Alterar base fiscal de CFOP

describe('Financeiro - PUT - /v3/regra_fiscal_cfop_alterar', () => {
    const url = 'http://localhost:8091/sabium#/Fisco/Contabil/v3_regra_fiscal_cfop_put';
  
    it('PUT - /v3/regra_fiscal_cfop_alterar - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição PUT
      cy.request('PUT', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });