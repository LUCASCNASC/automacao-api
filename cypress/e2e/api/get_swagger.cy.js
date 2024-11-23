// /api/swagger - Swagger
// JSON com informações para criar pagina swagger

describe('API - GET - /api/swagger', () => {
    const url = 'http://localhost:8091/sabium#/API/api_swagger';
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
    it('GET - /api/swagger - Resposta 200', () => {
      const requestBody = {
        versao: ""
      }
      // Realiza a requisição GET
      cy.request({
        method: 'GET', 
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