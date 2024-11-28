// /v3/trial - Indicadores do Vendedor
// Indicadores do vendedor

describe('Trial - POST - /v3/trial', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('POST - /v3/trial - Resposta 200', () => {
      const requestBody = {
        "pedidoVenda": 0,
        "autorizado": true,
        "loginSupervisor": "string",
        "senhaSupervisor": "string",
        "justificativa": "string",
        "idFilial": 0,
        "idTrial": 0,
        "sku": "string"
      }
      // Realiza a requisição POST
      cy.request({
        method: 'POST', 
        url: '/Trial/v2_trial_get_post2', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });