// /v3/regra_fiscal_cfop_listar/{UFOrigem}/{UFDestino}/{UFTomador}/{OrigemProduto} - Lista base fiscal (CFOP)
// Listar base fiscal de CFOP

import acess_token from '../../fixtures/token.json'

describe('Fisco/Contábil - GET - /v3/regra_fiscal_cfop_listar/{UFOrigem}/{UFDestino}/{UFTomador}/{OrigemProduto}', () => {
  const url = '/Fisco/Contabil/v3_regra_fiscal_cfop_get';
  const token = acess_token  
  
    it('Resposta 200', () => {
      const requestBody = {
        UFOrigem: "",
        UFDestino: "",
        UFTomador: "",
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