// /v3/regra_fiscal_uf_listar/{UFOrigem}/{OrigemProduto} - Lista base fiscal (UF)
// Listar base fiscal de UF

describe('Fisco/Contábil - GET - /v3/regra_fiscal_uf_listar/{UFOrigem}/{OrigemProduto}', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {
      const requestBody = {
        UFOrigem: "",
        OrigemProduto: ""
      }

      cy.request({
        method: 'GET', 
        url: '/Fisco/Contabil/v3_regra_fiscal_uf_get', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });