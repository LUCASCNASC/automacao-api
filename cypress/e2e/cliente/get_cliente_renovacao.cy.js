// /v3/cliente_renovacao/{cliente} - Renovação
// Renovações de serviços disponiveis para o cliente

describe('Cliente - GET - /v3/cliente_renovacao/{cliente}', () => {
    const url = 'http://localhost:8091/sabium#/Cliente/v2_cliente_renovacao';
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
    it('GET - /v3/cliente_renovacao/{cliente} - Resposta 200', () => {
      const requestBody = {
        cliente: ""
      }
      // Realiza a requisição GET
      cy.request({method: 'GET', 
        url, 
        //headers: { authorization },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });