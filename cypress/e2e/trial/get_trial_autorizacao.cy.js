// /v3/trial_autorizacao/{idFilial}/{idUsuario}/{triais} - Lista de Trial a autorizar
// Retorna a lista de trial e a chave ou supervisor para autorizar

describe('Trial - GET - /v3/trial_autorizacao/{idFilial}/{idUsuario}/{triais}', () => {
    const url = 'http://localhost:8091/sabium#/Trial/v3_get_trial_autorizacao';
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('GET - /v3/trial_autorizacao/{idFilial}/{idUsuario}/{triais} - Resposta 200', () => {
      const requestBody = {
        idFilial: "",
        idUsuario: "",
        triais: ""
      }
      // Realiza a requisição GET
      cy.request({
        method: 'GET', 
        url, 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });