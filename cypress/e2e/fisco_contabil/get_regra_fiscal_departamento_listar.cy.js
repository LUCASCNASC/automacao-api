// /v3/regra_fiscal_departamento_listar/{Grupo}/{UF}/{CFOP}/{OrigemProduto} - Lista base fiscal (departamento)
// Listar base fiscal de departamento

import acess_token from '../../fixtures/token.json'

describe('Fisco/Contábil - GET - /v3/regra_fiscal_departamento_listar/{Grupo}/{UF}/{CFOP}/{OrigemProduto}', () => {
  const url = '/Fisco/Contabil/v3_regra_fiscal_departamento_get';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        Grupo: "",
        UF: "",
        CFOP: "",
        OrigemProduto: ""
      }

      cy.request({
        method: 'GET', 
        url: url, 
        headers: { 
          Authorization: `Bearer ${token}`,
          //'Content-Type': 'application/json'
        },
        requestBody,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });