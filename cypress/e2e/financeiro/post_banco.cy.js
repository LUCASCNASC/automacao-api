// /v3/banco - Inclusão de banco
// Incluir cadastro de banco

describe('Financeiro - POST - /v3/banco', () => {
    const url = 'http://localhost:8091/sabium#/Financeiro/v3_financeiro_banco1';
  
    it('POST - /v3/banco - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });