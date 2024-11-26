// /v3/trial - Trial
// Lista de trial

describe('Trial - GET - /v3/trial', () => {
    const url = 'http://localhost:8091/sabium#/Trial/v2_trial_get_post1';
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('GET - /v3/trial - Resposta 200', () => {
      const requestBody = {
        idFilial: "",
        pedido: "",
        vendedor: "",
        limit: "",
        offset: ""
      }
      // Realiza a requisição GET
      cy.request({
        method: 'GET', 
        url, 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });