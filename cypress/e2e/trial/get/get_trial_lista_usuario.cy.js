// /v3/trial_lista_usuario/{idUsuario} - Lista de Triais do Usuário
// Retorna uma lista de triais que o usuário informado tem permissão de acesso, com base nos triais vinculados na tela: nivel trial
//204 - Sem dados de retorno
//200 - OK

const BASE_URL = Cypress.env('BASE_URL')
const PATH_API = '/Trial/v3_get_lista_trial_usuario';
const Authorization = Cypress.env('API.PRAGMA')
const idUsuario = ""; //integer - OBRIGATÓRIO

describe('Trial - GET - /v3/trial_lista_usuario/{idUsuario}', { env: { hideCredendials: true } }, () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'GET', 
        url: `${BASE_URL}/${PATH_API}/${idUsuario}`, 
        headers: { Authorization },
        failOnStatusCode: false
      })
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0]).toHaveProperty('idTrial');
          expect(resposta.body.retorno[0]).toHaveProperty('descricao');
        });
    });
  });