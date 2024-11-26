// /v3/cliente/{cliente} - Dados do cliente
// Dados do cliente

describe('Cliente - GET - /v3/cliente/{cliente}', () => {
    const url = 'http://localhost:8091/sabium#/Cliente/v2_cliente_get_delete_get';
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('GET - /v3/cliente/{cliente} - Resposta 200', () => {
      const requestBody = {
        cliente: ""
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