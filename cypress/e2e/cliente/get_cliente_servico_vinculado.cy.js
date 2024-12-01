// /v3/cliente_servico_vinculado/{cliente} - Serviço vinculado
// Serviços vinculados disponíveis para o cliente

describe('Cliente - GET - /v3/cliente_servico_vinculado/{cliente}', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {
      const requestBody = {
        cliente: "",
        processo: ""
      }

      cy.request({
        method: 'GET', 
        url: '/Cliente/v3_cliente_servico_vinculado', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });