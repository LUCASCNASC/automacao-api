// /v3/referenciabancaria/{cnpjCpf}/{idReferenciaBancaria} - Exclusão de referência bancária
// Excluir referência bancária baseado no CNPJ/CPF da pessoa e código da referência bancária

describe('Financeiro - DELETE - /v3/referenciabancaria/{cnpjCpf}/{idReferenciaBancaria}', () => {
    const url = 'http://localhost:8091/sabium#/Financeiro/v3_financeiro_referencia_bancaria_delete';
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
    it('DELETE - /v3/referenciabancaria/{cnpjCpf}/{idReferenciaBancaria} - Resposta 200', () => {
      const requestBody = {
        cnpjCpf: "",
        idReferenciaBancaria: ""
      }
      // Realiza a requisição DELETE
      cy.request({
        method: 'DELETE', 
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