// /v3/trial_nivel_usuario/{idTrial}/{QuantidadeNivel} - Lista Nivel Usuários por trial
// Retorna uma lista usuários que pode autorizar o trial
//204 - Sem dados de retorno
//200 - OK

const BASE_URL = Cypress.env('BASE_URL')
const Authorization = Cypress.env('API.PRAGMA')
const idTrial = ""; //integer - OBRIGATÓRIO
const QuantidadeNivel = ""; //integer - OBRIGATÓRIO

describe('Trial - GET - /v3/trial_nivel_usuario/{idTrial}/{QuantidadeNivel}', { env: { hideCredendials: true } }
  , () => {
  
    it('Resposta 200', () => {

      cy.api({
        method: 'GET', 
        url: `${BASE_URL}/Trial/v3_get_trial_nivel_usuario/${idTrial}/${QuantidadeNivel}`, 
        headers: { Authorization },
        failOnStatusCode: false
      })  
        .then((response) => {
          const { data } = body;
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
          expect(resposta.body.retorno[0]).toHaveProperty('nivel');
          expect(resposta.body.retorno[0]).toHaveProperty('idusuario');
          expect(resposta.body.retorno[0]).toHaveProperty('nomeusuario');
          expect(resposta.body.retorno[0]).toHaveProperty('descricaotrial');
        });
    });
  });