// /v3/vendedor - Vendedor
// Lista dos vendedores

describe('Diversos - GET - /v3/vendedor', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('GET - /v3/vendedor - Resposta 200', () => {
      const requestBody = {
        termo: "",
        limit: "",
        offset: "",
        sort: ""
      }
      // Realiza a requisição GET
      cy.request({
        method: 'GET', 
        url: '/Diversos/v2_diversos_vendedor', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });