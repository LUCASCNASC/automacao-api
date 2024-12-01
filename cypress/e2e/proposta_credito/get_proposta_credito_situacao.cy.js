// /v3/proposta_credito_situacao/{codigo} - Proposta crédito situação
// Situação da proposta crédito

describe('Proposta crédito - GET - /v3/proposta_credito_situacao/{codigo}', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {
      const requestBody = {
        codigo: ""
      }

      cy.request({
        method: 'GET', 
        url: '/Proposta%20cr%C3%A9dito/v2_proposta_credito_situacao', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });