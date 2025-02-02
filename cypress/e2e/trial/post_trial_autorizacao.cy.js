// /v3/trial_autorizacao - Autorizar trial - Autorizar trial
//200 - OK
//412 - Falha - Não atende aos pré-requisitos

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Trial - POST - /v3/trial_autorizacao', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => { 

      cy.api({
        method: 'POST', 
        url: `${API_URL}/Trial/v3_post_trial_autorizacao`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });