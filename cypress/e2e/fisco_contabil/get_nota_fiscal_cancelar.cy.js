// /v3/nota_fiscal_cancelar/{Filial}/{RegistroNota} - Cancela nota fiscal
// Cancelar nota fiscal autorizada Sefaz

import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Fisco/Contábil - GET - /v3/nota_fiscal_cancelar/{Filial}/{RegistroNota}', () => {
  const url = '/Fisco/Contabil/v3_nota_fiscal_cancelar';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        Filial: "",
        RegistroNota: ""
      }

      cy.request({
        method: 'GET', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
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