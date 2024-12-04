// /v3/trial_autorizacao/{idFilial}/{idUsuario}/{triais} - Lista de Trial a autorizar - Retorna a lista de trial e a chave ou supervisor para autorizar

describe('Trial - GET - /v3/trial_autorizacao/{idFilial}/{idUsuario}/{triais}', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {
      const requestBody = {
        idFilial: "",
        idUsuario: "",
        triais: ""
      }

      cy.request({
        method: 'GET', 
        url: '/Trial/v3_get_trial_autorizacao', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); //
        });
    });
  });