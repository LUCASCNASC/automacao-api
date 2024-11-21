// /api/version - Versão
// Versão do sistema e banco.

describe('API - GET - /api/version', () => {
    const url = 'http://localhost:8091/sabium#/API/api_version';
  
    it('GET - /api/version - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição GET
      cy.request('GET', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });