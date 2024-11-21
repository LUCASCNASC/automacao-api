// /v3/referenciabancaria - Alteração de referência bancária
// Alterar referência bancária pelo CNPJ/CPF da pessoa e código da referência bancária

describe('Financeiro - PUT - /v3/referenciabancaria', () => {
    const url = 'http://localhost:8091/sabium#/Financeiro/v3_financeiro_referencia_bancaria2';
  
    it('PUT - /v3/referenciabancaria - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição PUT
      cy.request('PUT', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });