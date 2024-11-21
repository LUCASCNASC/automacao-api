// /v3/regra_fiscal_uf_alterar - Alteração de base fiscal (UF)
// Alterar base fiscal de UF

describe('Financeiro - PUT - /v3/regra_fiscal_uf_alterar', () => {
    const url = 'http://localhost:8091/sabium#/Fisco/Contabil/v3_regra_fiscal_uf_put';
  
    it('PUT - /v3/regra_fiscal_uf_alterar - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição PUT
      cy.request('PUT', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });