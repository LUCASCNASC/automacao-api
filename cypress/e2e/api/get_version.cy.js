// /api/version - Versão
// Versão do sistema e banco.

describe('API - GET - /api/version', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {
      const requestBody = {}

      cy.request({
        method: 'GET', 
        url: '/API/api_version', 
        //headers: { authorization },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });