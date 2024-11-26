// /v3/local_entrega_por_cep - Local de entrega por CEP
// Listar locais de entrega por CEP

describe('Diversos - GET - /v3/local_entrega_por_cep', () => {
    const url = 'http://localhost:8091/sabium#/Diversos/v3_diversos_local_entrega_por_cep';
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('GET - /v3/local_entrega_por_cep - Resposta 200', () => {
      const requestBody = {
        cep: ""
      }
      // Realiza a requisição GET
      cy.request({
        method: 'GET', 
        url,
        headers: { Authorization: `Bearer ${token}` }, 
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });