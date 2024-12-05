// /v3/trial_autorizacao - Autorizar trial - Autorizar trial

import reqBody_post_trial_autorizacao from '../../fixtures/trial/post_trial_autorizacao.json'
import acess_token from '../../fixtures/token.json'

describe('Trial - POST - /v3/trial_autorizacao', () => {
    const url = '/Trial/v3_post_trial_autorizacao';
    const token = acess_token
  
    it('Resposta 200', () => { 

      cy.request({
        method: 'POST', 
        url: url, 
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: reqBody_post_trial_autorizacao,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });