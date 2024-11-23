// /v3/regra_fiscal_diversas_listar/{TipoBase}/{CFOP}/{Identificador}/{Pessoa}/{Grupo}/{OrigemProduto} - Lista base fiscal (diversas)
// Listar base fiscal diversas

describe('Fisco/Contábil - GET - /v3/regra_fiscal_diversas_listar/{TipoBase}/{CFOP}/{Identificador}/{Pessoa}/{Grupo}/{OrigemProduto}', () => {
    const url = 'http://localhost:8091/sabium#/Fisco/Contabil/v3_regra_fiscal_diversas_get';
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
    it('GET - /v3/regra_fiscal_diversas_listar/{TipoBase}/{CFOP}/{Identificador}/{Pessoa}/{Grupo}/{OrigemProduto} - Resposta 200', () => {
      const requestBody = {
        TipoBase: "",
        CFOP: "",
        Identificador: "",
        Pessoa: "",
        Grupo: "",
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