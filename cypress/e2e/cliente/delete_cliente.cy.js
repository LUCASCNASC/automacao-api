// /v3/cliente/{cliente} - Dados do cliente
// Excluir cliente

const API_URL = Cypress.env('API_URL')
const Authorization = Cypress.env('API.PRAGMA')

describe('Cliente - DELETE - /v3/cliente/{cliente}', () => {
  const url = '/Cliente/v2_cliente_get_delete_delete';
  const token = acess_token
  
    it('Resposta 200', () => {
      const requestBody = {
        cliente: ""
      }

      cy.request({
        method: 'DELETE', 
        url: url, 
        headers: { 
          Pragma: pragma_token,
          Authorization: `Bearer ${token}`,
          //'Content-Type': 'application/json'
        },
        requestBody,
        failOnStatusCode: false
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });