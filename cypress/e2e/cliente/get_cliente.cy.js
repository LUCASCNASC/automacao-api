// /v3/cliente/{cliente} - Dados do cliente
// Dados do cliente

describe('Cliente - GET - /v3/cliente/{cliente}', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {
      const requestBody = {
        cliente: ""
      }

      cy.request({
        method: 'GET', 
        url: '/Cliente/v2_cliente_get_delete_get', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });