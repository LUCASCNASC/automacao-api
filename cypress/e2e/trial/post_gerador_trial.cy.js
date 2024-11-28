// /v3/gerador_trial - Gerador de Senha Trial
// Utilizar este recurso quando o usuário supervisor desejar gerar uma senha de autorização de trial.

describe('Trial - POST - /v3/gerador_trial', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('POST - /v3/gerador_trial - Resposta 200', () => {
      const requestBody = {
        "chaveTrial": "string",
        "supervisor": {
          "idUsuario": 0,
          "senha": "string"
        },
        "triais": [
          {
            "idTrial": 0
          }
        ]
      }
      // Realiza a requisição POST
      cy.request({
        method: 'POST', 
        url: '/Trial/v3_post_gerador_trial', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });