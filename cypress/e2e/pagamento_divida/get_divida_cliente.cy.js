// /v3/divida_cliente/{filial}/{cliente} - Títulos do cliente
// lista de títulos a receber do cliente

describe('Pagamento divida - GET - /v3/divida_cliente/{filial}/{cliente}', () => {
    const token = Cypress.env('AUTH_TOKEN');  
  
    it('Resposta 200', () => {
      const requestBody = {
        filial: "",
        cliente: ""
      }

      cy.request({
        method: 'GET', 
        url: '/Pagamento%20divida/v2_divida_cliente', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });