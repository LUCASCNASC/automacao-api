// /v3/pedido_detalhe/{filial}/{pedido} - Pedido Detalhe
// Detalhes do pedido de venda

describe('Pagamento pedido - GET - /v3/pedido_detalhe/{filial}/{pedido}', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('GET - /v3/pedido_detalhe/{filial}/{pedido} - Resposta 200', () => {
      const requestBody = {
        filial: "",
        pedido: ""
      }
      // Realiza a requisição GET
      cy.request({
        method: 'GET', 
        url: '/Pagamento%20pedido/v3_pag_pedido_detalhe', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });