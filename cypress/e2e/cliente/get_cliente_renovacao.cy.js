// /v3/cliente_renovacao/{cliente} - Renovação
// Renovações de serviços disponiveis para o cliente

describe('Cliente - GET - /v3/cliente_renovacao/{cliente}', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {
      const requestBody = {
        cliente: ""
      }

      cy.request({method: 'GET', 
        url: '/Cliente/v2_cliente_renovacao', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });