// /v3/trial_autorizacao - Autorizar trial
// Autorizar trial

describe('Trial - POST - /v3/trial_autorizacao', () => {
    const url = 'http://localhost:8091/sabium#/Trial/v3_post_trial_autorizacao';
  
    it('POST - /v3/trial_autorizacao - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });