// /v3/regra_fiscal_cfop_deletar/{idBaseFiscalCFOP} - Exclusão de base fiscal (CFOP)
// Excluir base fiscal de CFOP

import acess_token from '../../fixtures/token.json'

describe('Fisco/Contábil - DELETE - /v3/regra_fiscal_cfop_deletar/{idBaseFiscalCFOP}', () => {
  const url = '/Fisco/Contabil/v3_regra_fiscal_cfop_delete';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        idBaseFiscalCFOP: ""
      }

      cy.request({
        method: 'DELETE', 
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