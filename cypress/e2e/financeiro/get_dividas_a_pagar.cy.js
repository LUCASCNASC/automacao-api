// /v3/dividas_a_pagar/{idFilial}/{cpf_cnpj} - Lista títulos (a Pagar)
// Listar títulos a pagar de cliente ou fornecedor

import acess_token from '../../fixtures/token.json'

describe('Financeiro - GET - /v3/dividas_a_pagar/{idFilial}/{cpf_cnpj}', () => {
  const url = '/Financeiro/v3_financeiro_dividas_pagar';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        idFilial: "",
        cpf_cnpj: ""
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