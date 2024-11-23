// /v3/cbo - CBO
// Lista dos CBOs

describe('Diversos - GET -/v3/cbo', () => {
    const url = 'http://localhost:8091/sabium#/Diversos/v2_diversos_cbo';
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
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
        url, 
        //headers: { authorization },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });