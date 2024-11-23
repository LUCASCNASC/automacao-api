// /v3/cidade - Cidades
// Listar de cidades

describe('Diversos - GET - /v3/cidade', () => {
    const url = 'http://localhost:8091/sabium#/Diversos/v2_diversos_cidade';
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
    it('GET - /v3/cidade - Resposta 200', () => {
      const requestBody = {
        uf: ""
      }
      // Realiza a requisição GET
      cy.request({
        method: 'GET', 
        url, 
        //headers: { authorization },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });