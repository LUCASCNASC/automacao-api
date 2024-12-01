// /v3/local_entrega - Local de entrega
// Listar locais de entrega

describe('Diversos - GET - /v3/local_entrega', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {
      const requestBody = {
        rota: ""
      }

      cy.request({
        method: 'GET', 
        url: '/Diversos/v2_diversos_local_entrega', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });