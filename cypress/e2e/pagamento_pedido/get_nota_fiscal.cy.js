// /v3/nota_fiscal/{filial} - Nota fiscal
// Nota fiscal

describe('Pagamento pedido - GET - /v3/nota_fiscal/{filial}', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
    
  
    it('Resposta 200', () => {
      const requestBody = {
        filial: "",
        pedido: "",
        registro_nota: ""
      }

      cy.request({
        method: 'GET', 
        url: '/Pagamento%20pedido/v2_pag_pedido_nota_fiscal', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });