// /v3/banco - Lista de banco
// Listar banco

describe('Financeiro - GET - /v3/banco', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {
      const requestBody = {}

      cy.request({
        method: 'GET', 
        url: '/Financeiro/v3_financeiro_banco3', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });