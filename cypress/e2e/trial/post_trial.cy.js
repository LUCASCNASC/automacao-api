// /v3/trial - Indicadores do Vendedor
// Indicadores do vendedor

describe('Trial - POST - /v3/trial', () => {
    const url = 'http://localhost:8091/sabium#/Trial/v2_trial_get_post2';
  
    it('POST - /v3/trial - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });