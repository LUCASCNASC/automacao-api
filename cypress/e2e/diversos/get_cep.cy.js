// /v3/cep/{cep} - CEP
// Dados do CEP

describe('Diversos - GET - /v3/cep/{cep}', () => {
    const url = 'http://localhost:8091/sabium#/Diversos/v2_diversos_cep';
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
    it('GET - /v3/cep/{cep} - Resposta 200', () => {
      const requestBody = {
        cep: ""
      }
      // Realiza a requisição GET
      cy.request({
        method:'GET', 
        url, 
        //headers: { authorization },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });