// /v3/cidade - Cidades
// Listar de cidades

describe('Diversos - GET - /v3/cidade', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {
      const requestBody = {
        uf: ""
      }

      cy.request({
        method: 'GET', 
        url: '/Diversos/v2_diversos_cidade', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });