// /v3/intencao_compra_detalhe/{codigo} - Intenções de compras
// Lista intenções de compras

describe('Intenção compra - GET - /v3/intencao_compra_detalhe/{codigo}', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {
      const requestBody = {
        codigo: "",
        cliente: "",
        situacao: ""
      }

      cy.request({
        method: 'GET', 
        url: '/Inten%C3%A7%C3%A3o%20compra/v2_intencao_compra_detalhe', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });