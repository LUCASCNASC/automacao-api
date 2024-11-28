// /v3/pedido/{codigo} - Pedido Venda
// Dados do pedido de venda

describe('Pedido - GET - /v3/pedido/{codigo}', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('GET - /v3/pedido/{codigo} - Resposta 200', () => {
      const requestBody = {
        idFilial: "",
        codigo: "",
        validarsituacaopedido: ""
      }
      // Realiza a requisição GET
      cy.request({
        method: 'GET', 
        url: '/Pedido/v2_pedido_get_delete1', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });