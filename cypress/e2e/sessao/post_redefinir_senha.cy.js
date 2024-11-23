// /v3/redefinir_senha - Nova senha de login
// Gera uma nova senha provisória para o usuário do login

describe('Sessão - POST - /v3/redefinir_senha', () => {
    const url = 'http://localhost:8091/sabium#/Sess%C3%A3o/v3_post_redefinir_senha';
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
    it('POST - /v3/redefinir_senha - Resposta 200', () => {
      const requestBody = {
        "usuario": "string"
      }
      // Realiza a requisição POST
      cy.request({
        method: 'GET',
        url,
        //headers: { authorization },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });