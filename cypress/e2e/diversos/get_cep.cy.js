// /v3/cep/{cep} - CEP
// Dados do CEP

describe('Diversos - GET - /v3/cep/{cep}', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {
      const requestBody = {
        cep: ""
      }

      cy.request({
        method:'GET', 
        url: '/Diversos/v2_diversos_cep', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });