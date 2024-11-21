// /v3/agencia - Alteração de agência
// Alterar agência pelo código do banco e código da agência

describe('Financeiro - PUT - /v3/agencia', () => {
    const url = 'http://localhost:8091/sabium#/Financeiro/v3_financeiro_agencia2';
  
    it('PUT - /v3/agencia - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição PUT
      cy.request('PUT', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });