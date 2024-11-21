// /v3/regra_fiscal_diversas_incluir - Inclusão de base fiscal (diversas)
// Incluir base fiscal diversas

describe('Fisco/Contábil - POST - /v3/regra_fiscal_diversas_incluir', () => {
    const url = 'http://localhost:8091/sabium#/Fisco/Contabil/v3_regra_fiscal_diversas_post';
  
    it('POST - /v3/regra_fiscal_diversas_incluir - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });