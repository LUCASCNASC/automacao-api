// /v3/dividas_a_receber/{idFilial}/{cpf_cnpj} - Lista títulos (a receber)
// Listar títulos a receber de cliente

import acess_token from '../../fixtures/token.json'

describe('Financeiro - GET - /v3/dividas_a_receber/{idFilial}/{cpf_cnpj}', () => {
  const url = '/Financeiro/v3_financeiro_dividas_a_receber';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        idFilial: "",
        cpf_cnpj: "",
        separavinculados: "",
        limit: "",
        offset: ""
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