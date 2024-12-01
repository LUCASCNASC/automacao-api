// /v3/processo - Processos Mobile
// Carregar dados dos processos configurados para o Mobile

describe('Diversos - GET - /v3/processo', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {
      const requestBody = {}

      cy.request({
        method: 'GET', 
        url: '/Diversos/v2_diversos_processo',
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });