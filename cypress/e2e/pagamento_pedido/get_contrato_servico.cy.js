// /v3/contrato_servico/{filial}/{pedido} - Contrato serviço
// Contrato do serviço

describe('Pagamento pedido - GET - /v3/contrato_servico/{filial}/{pedido}', () => {
    const token = Cypress.env('AUTH_TOKEN'); 
  
    it('Resposta 200', () => {
      const requestBody = {
        filial: "",
        pedido: ""
      }

      cy.request({
        method: 'GET', 
        url: '/Pagamento%20pedido/v2_pag_pedido_contrato_servico', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); 
        });
    });
  });