// /v3/regra_fiscal_departamento_listar/{Grupo}/{UF}/{CFOP}/{OrigemProduto} - Lista base fiscal (departamento)
// Listar base fiscal de departamento

describe('Fisco/Contábil - GET - /v3/regra_fiscal_departamento_listar/{Grupo}/{UF}/{CFOP}/{OrigemProduto}', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {
      const requestBody = {
        Grupo: "",
        UF: "",
        CFOP: "",
        OrigemProduto: ""
      }

      cy.request({
        method: 'GET', 
        url: '/Fisco/Contabil/v3_regra_fiscal_departamento_get', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });