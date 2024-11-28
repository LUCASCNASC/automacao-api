// /api/version - Versão
// Versão do sistema e banco.

describe('API - GET - /api/version', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('GET - /api/version - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição GET
      cy.request({
        method: 'GET', 
        url: '/API/api_version', 
        //headers: { authorization },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });