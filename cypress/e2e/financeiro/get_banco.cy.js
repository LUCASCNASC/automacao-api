// /v3/banco - Lista de banco
// Listar banco

describe('Financeiro - GET - /v3/banco', () => {
    const url = 'http://localhost:8091/sabium#/Financeiro/v3_financeiro_banco3';
  
    it('GET - /v3/banco - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição GET
      cy.request('GET', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });