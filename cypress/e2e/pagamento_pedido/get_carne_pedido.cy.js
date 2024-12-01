// /v3/carne_pedido/{filial}/{pedido} - Carne Pedido Venda
// Impressão de Carnê por Pedido de Venda

describe('Pagamento pedido - GET - /v3/carne_pedido/{filial}/{pedido}', () => {
    const token = Cypress.env('AUTH_TOKEN');  
  
    it('Resposta 200', () => {
      const requestBody = {
        filial: "",
        pedido: ""
      }

      cy.request({
        method: 'GET', 
        url: '/Pagamento%20pedido/v3_pag_pedido_carne_pedido', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody}).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });