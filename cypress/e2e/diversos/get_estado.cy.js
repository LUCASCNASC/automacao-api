// /v3/estado - Estados
// Listar de estados

describe('Diversos - GET - /v3/estado', () => {
    const url = 'http://localhost:8091/sabium#/Diversos/v2_diversos_estado';
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
    it('GET - /v3/estado - Resposta 200', () => {
      const requestBody = {
        "uf_codigo": "string",
        "uf_nome": "string"
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