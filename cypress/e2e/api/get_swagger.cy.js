// /api/swagger - Swagger
// JSON com informações para criar pagina swagger

describe('API - GET - /api/swagger', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {
      const requestBody = {
        versao: ""
      }

      cy.request({
        method: 'GET', 
        url: '/API/api_swagger', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });