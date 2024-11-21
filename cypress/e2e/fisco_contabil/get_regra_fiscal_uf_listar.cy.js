// /v3/regra_fiscal_uf_listar/{UFOrigem}/{OrigemProduto} - Lista base fiscal (UF)
// Listar base fiscal de UF

describe('Fisco/Contábil - GET - /v3/regra_fiscal_uf_listar/{UFOrigem}/{OrigemProduto}', () => {
    const url = 'http://localhost:8091/sabium#/Fisco/Contabil/v3_regra_fiscal_uf_get';
  
    it('GET - /v3/regra_fiscal_uf_listar/{UFOrigem}/{OrigemProduto} - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição GET
      cy.request('GET', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });