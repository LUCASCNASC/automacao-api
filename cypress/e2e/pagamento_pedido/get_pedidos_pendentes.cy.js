// /v3/pedidos_pendentes/{filial} - Pedidos
// Lista pedidos para pagamento

describe('Pagamento pedido - GET - /v3/pedidos_pendentes/{filial}', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {
      const requestBody = {
        filial: "",
        data: "",
        numeroPedido: "",
        cnpjCpf: "",
        limit: "",
        offset: ""
      }

      cy.request({
        method: 'GET', 
        url: '/Pagamento%20pedido/v3_pag_pedidos_pendentes', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });