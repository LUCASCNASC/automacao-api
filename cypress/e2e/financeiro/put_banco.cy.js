// /v3/banco - Alteração de banco
// Alterar banco pelo código

describe('Financeiro - PUT - /v3/banco', () => {
    const url = 'http://localhost:8091/sabium#/Financeiro/v3_financeiro_banco2';
  
    it('PUT - /v3/banco - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição PUT
      cy.request('PUT', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });