// /v3/key_value/{key} - Lista de chave e valor
// Consultar uma determinada chave e retornar o seu valor

describe('Sistema - GET - /v3/key_value/{key}', () => {
    const url = 'http://localhost:8091/sabium#/Sistema/v2_sistema_key_value';
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
    it('GET - /v3/key_value/{key} - Resposta 200', () => {
      const requestBody = {
        key: ""
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