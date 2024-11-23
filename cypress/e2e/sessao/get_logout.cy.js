// /v3/logout - Fechar conexão com o servidor
// Finaliza a conexão estabelecida com o serviço.

describe('Sessão - GET - /v3/logout', () => {
    const url = 'http://localhost:8091/sabium#/Sess%C3%A3o/v2_sessao_logout';
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
    it('GET - /v3/logout - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição GET
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