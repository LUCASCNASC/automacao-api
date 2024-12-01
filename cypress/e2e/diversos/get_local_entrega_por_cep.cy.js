// /v3/local_entrega_por_cep - Local de entrega por CEP
// Listar locais de entrega por CEP

describe('Diversos - GET - /v3/local_entrega_por_cep', () => {
    const token = Cypress.env('AUTH_TOKEN');
  
    it('Resposta 200', () => {
      const requestBody = {
        cep: ""
      }

      cy.request({
        method: 'GET', 
        url: '/Diversos/v3_diversos_local_entrega_por_cep',
        headers: { Authorization: `Bearer ${token}` }, 
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });