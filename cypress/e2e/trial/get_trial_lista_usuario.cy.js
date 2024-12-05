// /v3/trial_lista_usuario/{idUsuario} - Lista de Triais do Usuário
// Retorna uma lista de triais que o usuário informado tem permissão de acesso, com base nos triais vinculados na tela: nivel trial

import acess_token from '../../fixtures/token.json'

describe('Trial - GET - /v3/trial_lista_usuario/{idUsuario}', () => {
  const url = '/Trial/v3_get_lista_trial_usuario';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        idUsuario: ""
      }

      cy.request({
        method: 'GET', 
        url: url, 
        headers: { 
          Authorization: `Bearer ${token}`,
          //'Content-Type': 'application/json'
        },
        requestBody,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });