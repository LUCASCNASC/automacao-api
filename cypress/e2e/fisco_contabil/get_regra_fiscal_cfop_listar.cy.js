// /v3/regra_fiscal_cfop_listar/{UFOrigem}/{UFDestino}/{UFTomador}/{OrigemProduto} - Lista base fiscal (CFOP)
// Listar base fiscal de CFOP

describe('Fisco/Contábil - GET - /v3/regra_fiscal_cfop_listar/{UFOrigem}/{UFDestino}/{UFTomador}/{OrigemProduto}', () => {
    const token = Cypress.env('AUTH_TOKEN');  
  
    it('Resposta 200', () => {
      const requestBody = {
        UFOrigem: "",
        UFDestino: "",
        UFTomador: "",
        OrigemProduto: ""
      }

      cy.request({
        method: 'GET', 
        url: '/Fisco/Contabil/v3_regra_fiscal_cfop_get', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });