// /v3/trial_nivel_usuario/{idTrial}/{QuantidadeNivel} - Lista Nivel Usuários por trial
// Retorna uma lista usuários que pode autorizar o trial

import acess_token from '../../fixtures/token.json'
import pragma_token from '../../fixtures/pragma.json'

describe('Trial - GET - /v3/trial_nivel_usuario/{idTrial}/{QuantidadeNivel}', () => {
  const url = '/Trial/v3_get_trial_nivel_usuario';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        idTrial: "",
        QuantidadeNivel: ""
      }

      cy.request({
        method: 'GET', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          //'Content-Type': 'application/json'
        },
        requestBody,
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