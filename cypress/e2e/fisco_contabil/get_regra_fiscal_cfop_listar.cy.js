// /v3/regra_fiscal_cfop_listar/{UFOrigem}/{UFDestino}/{UFTomador}/{OrigemProduto} - Lista base fiscal (CFOP)
// Listar base fiscal de CFOP

describe('Fisco/Contábil - GET - /v3/regra_fiscal_cfop_listar/{UFOrigem}/{UFDestino}/{UFTomador}/{OrigemProduto}', () => {
    const url = 'http://localhost:8091/sabium#/Fisco/Contabil/v3_regra_fiscal_cfop_get';
  
    it('GET - /v3/regra_fiscal_cfop_listar/{UFOrigem}/{UFDestino}/{UFTomador}/{OrigemProduto} - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição GET
      cy.request('GET', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });