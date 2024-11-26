// /v3/login_validar - Validar pragma da sessão
// Valida o pragma da sessão.

describe('Sessão - GET - /v3/login_validar', () => {
    const url = 'http://localhost:8091/sabium#/Sess%C3%A3o/v3_sessao_login_validar';
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('GET - /v3/login_validar - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição GET
      cy.request({
        method: 'GET',
        url,
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });