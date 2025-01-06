// /v3/trial_autorizacao/{idFilial}/{idUsuario}/{triais} - Lista de Trial a autorizar - Retorna a lista de trial e a chave ou supervisor para autorizar

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

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
          expect(resposta.body.retorno[0].Supervisor[0]).toHaveProperty('chaveTrial');
          expect(resposta.body.retorno[0].Supervisor[0]).toHaveProperty('idUsuarioSupervisor');
          expect(resposta.body.retorno[0].Supervisor[0]).toHaveProperty('nomeUsuarioSupervisor');
          expect(resposta.body.retorno[0].Supervisor[0].trial[0]).toHaveProperty('idTrial');
          expect(resposta.body.retorno[0].Supervisor[0].trial[0]).toHaveProperty('descricaoTrial');
          expect(resposta.body.retorno[0].Supervisor[0].trial[0]).toHaveProperty('permissao');
          expect(resposta.body.retorno[0].Supervisor[0].trial[0]).toHaveProperty('status');
          expect(resposta.body.retorno[0].Gerente[0]).toHaveProperty('idUsuarioGerente');
          expect(resposta.body.retorno[0].Gerente[0]).toHaveProperty('nomeUsuarioGerente');
          expect(resposta.body.retorno[0].Gerente[0].trial[0]).toHaveProperty('idTrial');
          expect(resposta.body.retorno[0].Gerente[0].trial[0]).toHaveProperty('descricaoTrial');
          expect(resposta.body.retorno[0].Gerente[0].trial[0]).toHaveProperty('permissao');
          expect(resposta.body.retorno[0].Gerente[0].trial[0]).toHaveProperty('status');
        });
    });
  });