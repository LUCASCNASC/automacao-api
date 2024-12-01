// /v3/grupo - Grupos
// Listar grupos

describe('Diversos - GET - /v3/grupo', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {
      const requestBody = {
        idtipogrupo: ""
      }

      cy.request({
        method: 'GET', 
        url: '/Diversos/v3_diversos_grupo',
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });