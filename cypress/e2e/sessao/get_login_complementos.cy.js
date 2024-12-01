// /v3/login_complementos - Dados complementares do login
// Carregar dados do funcionário e vendedor com base no usuário conectado

describe('Sessão - GET - /v3/login_complementos', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {
      const requestBody = {}

      cy.request({
        method: 'GET',
        url: '/Sess%C3%A3o/v2_sessao_login_complementos',

        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });