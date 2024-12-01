// /v3/rota - Rotas
// Listar rotas

describe('Diversos - GET - /v3/rota', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {
      const requestBody = {
        idgruporota: "",
        idrota: "",
        termo: ""
      }

      cy.request({
        method: 'GET', 
        url: '/Diversos/v3_diversos_rota', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });