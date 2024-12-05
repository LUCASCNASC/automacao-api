// /v3/regra_fiscal_diversas_listar/{TipoBase}/{CFOP}/{Identificador}/{Pessoa}/{Grupo}/{OrigemProduto} - Lista base fiscal (diversas)
// Listar base fiscal diversas

import acess_token from '../../fixtures/token.json'

describe('Fisco/Contábil - GET - /v3/regra_fiscal_diversas_listar/{TipoBase}/{CFOP}/{Identificador}/{Pessoa}/{Grupo}/{OrigemProduto}', () => {
  const url = '/Fisco/Contabil/v3_regra_fiscal_diversas_get';
  const token = acess_token
  
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