// /v3/pedido_pendencia - Pedidos pendentes
// lista de pedidos pendente

describe('Pedido - GET - /v3/pedido_pendencia', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {
      const requestBody = {
        idpedidovenda: "",
        idvendedor: "",
        cnpj_cpf: ""
      }

      cy.request({
        method: 'GET', 
        url: '/Pedido/v2_pedido_pendencia', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000);
        });
    });
  });