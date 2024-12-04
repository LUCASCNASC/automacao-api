// /v3/intencao_compra/{codigo} - Intenção compra
// Cancelar a intenção de compra

describe('Intenção compra - DELETE - /v3/intencao_compra/{codigo}', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {
      const requestBody = {
        codigo: ""
      }

      cy.request({
        method: 'DELETE', 
        url: '/Inten%C3%A7%C3%A3o%20compra/v2_intencao_compra_delete', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });