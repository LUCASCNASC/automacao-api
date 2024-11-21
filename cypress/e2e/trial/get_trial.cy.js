// /v3/trial - Trial
// Lista de trial

describe('Trial - GET - /v3/trial', () => {
    const url = 'http://localhost:8091/sabium#/Trial/v2_trial_get_post1';
  
    it('GET - /v3/trial - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição GET
      cy.request('GET', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });