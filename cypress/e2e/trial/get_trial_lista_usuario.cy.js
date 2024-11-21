// /v3/trial_lista_usuario/{idUsuario} - Lista de Triais do Usuário
// Retorna uma lista de triais que o usuário informado tem permissão de acesso, com base nos triais vinculados na tela: nivel trial

describe('Trial - GET - /v3/trial_lista_usuario/{idUsuario}', () => {
    const url = 'http://localhost:8091/sabium#/Trial/v3_get_lista_trial_usuario';
  
    it('GET - /v3/trial_lista_usuario/{idUsuario} - Resposta 200', () => {
      const requestBody = {}
      // Realiza a requisição GET
      cy.request('GET', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });