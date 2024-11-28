// /api/swagger - Swagger
// JSON com informações para criar pagina swagger

describe('API - GET - /api/swagger', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('GET - /api/swagger - Resposta 200', () => {
      const requestBody = {
        versao: ""
      }
      // Realiza a requisição GET
      cy.request({
        method: 'GET', 
        url: '/API/api_swagger', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });