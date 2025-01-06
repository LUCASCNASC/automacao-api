// /v3/trial_nivel_usuario/{idTrial}/{QuantidadeNivel} - Lista Nivel Usuários por trial
// Retorna uma lista usuários que pode autorizar o trial

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')
const idTrial = ""; //integer - OBRIGATÓRIO
const QuantidadeNivel = ""; //integer - OBRIGATÓRIO

describe('Trial - GET - /v3/trial_nivel_usuario/{idTrial}/{QuantidadeNivel}', () => {
  
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
          expect(resposta.body.retorno[0]).toHaveProperty('nivel');
          expect(resposta.body.retorno[0]).toHaveProperty('idusuario');
          expect(resposta.body.retorno[0]).toHaveProperty('nomeusuario');
          expect(resposta.body.retorno[0]).toHaveProperty('descricaotrial');
        });
    });
  });