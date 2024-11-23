// /v3/trial_autorizacao - Autorizar trial
// Autorizar trial

describe('Trial - POST - /v3/trial_autorizacao', () => {
    const url = 'http://localhost:8091/sabium#/Trial/v3_post_trial_autorizacao';
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
    it('POST - /v3/trial_autorizacao - Resposta 200', () => {
      const requestBody = {
        "chaveTrial": 0,
        "idUsuario": 0,
        "senha": "string",
        "trial": [
          {
            "idTrial": 0
          }
        ]
      }
      // Realiza a requisição POST
      cy.request({
        method: 'POST', 
        url, 
        //headers: { authorization },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });