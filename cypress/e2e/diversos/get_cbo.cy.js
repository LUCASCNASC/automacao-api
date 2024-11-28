// /v3/cbo - CBO
// Lista dos CBOs

describe('Diversos - GET -/v3/cbo', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('GET - /v3/cbo - Resposta 200', () => {
      const requestBody = {
        termo: "",
        limit: "",
        offset: "",
        sort: ""
      }
      // Realiza a requisição GET
      cy.request({
        method: 'GET', 
        url: '/Diversos/v2_diversos_cbo', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });