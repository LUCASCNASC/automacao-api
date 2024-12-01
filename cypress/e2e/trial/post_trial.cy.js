// /v3/trial - Indicadores do Vendedor - Indicadores do vendedor

import reqBody_post_trial from '../../fixtures/trial/post_trial.json'

describe('Trial - POST - /v3/trial', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Trial/v2_trial_get_post2', 
        headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_trial
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });