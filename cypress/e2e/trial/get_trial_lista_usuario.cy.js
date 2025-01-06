// /v3/trial_lista_usuario/{idUsuario} - Lista de Triais do Usuário
// Retorna uma lista de triais que o usuário informado tem permissão de acesso, com base nos triais vinculados na tela: nivel trial

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const idUsuario = ""; //integer - OBRIGATÓRIO

describe('Trial - GET - /v3/trial_lista_usuario/{idUsuario}', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.request({
        method: 'GET', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          //'Content-Type': 'application/json'
        },
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0]).toHaveProperty('idTrial');
          expect(resposta.body.retorno[0]).toHaveProperty('descricao');
        });
    });
  });