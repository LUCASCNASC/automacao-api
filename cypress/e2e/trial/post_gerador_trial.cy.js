// /v3/gerador_trial - Gerador de Senha Trial
// Utilizar este recurso quando o usuário supervisor desejar gerar uma senha de autorização de trial.

describe('Trial - POST - /v3/gerador_trial', () => {
    const url = 'http://localhost:8091/sabium#/Trial/v3_post_gerador_trial';
  
    it('POST - /v3/gerador_trial - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });