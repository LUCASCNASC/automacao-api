// /v3/referenciabancaria/{cnpjCpf}/{idReferenciaBancaria} - Exclusão de referência bancária
// Excluir referência bancária baseado no CNPJ/CPF da pessoa e código da referência bancária

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Financeiro - DELETE - /v3/referenciabancaria/{cnpjCpf}/{idReferenciaBancaria}', () => {
  const url = '/Financeiro/v3_financeiro_referencia_bancaria_delete';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        cnpjCpf: "",
        idReferenciaBancaria: ""
      }

      cy.request({
        method: 'DELETE', 
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