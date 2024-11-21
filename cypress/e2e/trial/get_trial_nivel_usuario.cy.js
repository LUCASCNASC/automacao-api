// /v3/trial_nivel_usuario/{idTrial}/{QuantidadeNivel} - Lista Nivel Usuários por trial
// Retorna uma lista usuários que pode autorizar o trial

describe('Trial - GET - /v3/trial_nivel_usuario/{idTrial}/{QuantidadeNivel}', () => {
    const url = 'http://localhost:8091/sabium#/Trial/v3_get_trial_nivel_usuario';
  
    it('GET - /v3/trial_nivel_usuario/{idTrial}/{QuantidadeNivel} - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição GET
      cy.request('GET', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });