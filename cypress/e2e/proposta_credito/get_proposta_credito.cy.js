// /v3/proposta_credito/{data_inicial} - Proposta crédito
// Lista proposta de crédito

describe('Proposta crédito - GET - /v3/proposta_credito/{data_inicial}', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {
      const requestBody = {
        data_inicial: "",
        vendedor: "",
        cliente: "",
        limit: "",
        offset: ""
      }

      cy.request({
        method: 'GET', 
        url: '/Proposta%20cr%C3%A9dito/v2_proposta_credito_get', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });