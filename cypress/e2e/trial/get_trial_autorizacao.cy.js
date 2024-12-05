// /v3/trial_autorizacao/{idFilial}/{idUsuario}/{triais} - Lista de Trial a autorizar - Retorna a lista de trial e a chave ou supervisor para autorizar

import acess_token from '../../fixtures/token.json'

describe('Trial - GET - /v3/trial_autorizacao/{idFilial}/{idUsuario}/{triais}', () => {
    const url = '/Trial/v3_get_trial_autorizacao';
    const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        idFilial: "",
        idUsuario: "",
        triais: ""
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
          expect(response.duration).to.be.below(2000); //
        });
    });
  });