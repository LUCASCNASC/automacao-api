// /v3/referenciabancaria/{cnpjCpf}/{idReferenciaBancaria} - Exclusão de referência bancária
// Excluir referência bancária baseado no CNPJ/CPF da pessoa e código da referência bancária

describe('Financeiro - DELETE - /v3/referenciabancaria/{cnpjCpf}/{idReferenciaBancaria}', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {
      const requestBody = {
        cnpjCpf: "",
        idReferenciaBancaria: ""
      }

      cy.request({
        method: 'DELETE', 
        url: '/Financeiro/v3_financeiro_referencia_bancaria_delete', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });