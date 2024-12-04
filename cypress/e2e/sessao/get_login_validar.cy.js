// /v3/login_validar - Validar pragma da sessão
// Valida o pragma da sessão.

describe('Sessão - GET - /v3/login_validar', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {
      const requestBody = {}

      cy.request({
        method: 'GET',
        url: '/Sess%C3%A3o/v3_sessao_login_validar',
        //headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });