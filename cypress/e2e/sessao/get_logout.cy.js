// /v3/logout - Fechar conexão com o servidor
// Finaliza a conexão estabelecida com o serviço.

describe('Sessão - GET - /v3/logout', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {
      const requestBody = {}

      cy.request({
        method: 'GET',
        url: '/Sess%C3%A3o/v2_sessao_logout',
        //headers: { Authorization: `Bearer ${token}` },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });