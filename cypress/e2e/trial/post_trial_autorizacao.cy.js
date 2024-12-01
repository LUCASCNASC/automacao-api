// /v3/trial_autorizacao - Autorizar trial - Autorizar trial

import reqBody_post_trial_autorizacao from '../../fixtures/trial/post_trial_autorizacao.json'

describe('Trial - POST - /v3/trial_autorizacao', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => { 

      cy.request({
        method: 'POST', 
        url: '/Trial/v3_post_trial_autorizacao', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_trial_autorizacao
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });