// /v3/gerador_trial - Gerador de Senha Trial - Utilizar este recurso quando o usuário supervisor desejar gerar uma senha de autorização de trial.

import reqBody_post_gerador_trial from '../../fixtures/trial/post_gerador_trial.json'

describe('Trial - POST - /v3/gerador_trial', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {

      cy.request({
        method: 'POST', 
        url: '/Trial/v3_post_gerador_trial', 
        //headers: { Authorization: `Bearer ${token}` },
        body: reqBody_post_gerador_trial
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });