// /v3/regra_fiscal_cfop_listar/{UFOrigem}/{UFDestino}/{UFTomador}/{OrigemProduto} - Lista base fiscal (CFOP)
// Listar base fiscal de CFOP

describe('Fisco/Contábil - GET - /v3/regra_fiscal_cfop_listar/{UFOrigem}/{UFDestino}/{UFTomador}/{OrigemProduto}', () => {
    const url = 'http://localhost:8091/sabium#/Fisco/Contabil/v3_regra_fiscal_cfop_get';
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
    it('GET - /v3/regra_fiscal_cfop_listar/{UFOrigem}/{UFDestino}/{UFTomador}/{OrigemProduto} - Resposta 200', () => {
      const requestBody = {
        UFOrigem: "",
        UFDestino: "",
        UFTomador: "",
        OrigemProduto: ""
      }
      // Realiza a requisição GET
      cy.request({
        method: 'GET', 
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