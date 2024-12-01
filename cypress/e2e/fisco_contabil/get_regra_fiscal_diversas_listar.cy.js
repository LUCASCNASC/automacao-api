// /v3/regra_fiscal_diversas_listar/{TipoBase}/{CFOP}/{Identificador}/{Pessoa}/{Grupo}/{OrigemProduto} - Lista base fiscal (diversas)
// Listar base fiscal diversas

describe('Fisco/Contábil - GET - /v3/regra_fiscal_diversas_listar/{TipoBase}/{CFOP}/{Identificador}/{Pessoa}/{Grupo}/{OrigemProduto}', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {
      const requestBody = {
        TipoBase: "",
        CFOP: "",
        Identificador: "",
        Pessoa: "",
        Grupo: "",
        OrigemProduto: ""
      }

      cy.request({
        method: 'GET', 
        url: '/Fisco/Contabil/v3_regra_fiscal_diversas_get', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });