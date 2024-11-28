// /v3/pedido/{codigo} - Pedido Venda
// Excluir pedido de venda

describe('Pedido - DELETE - /v3/pedido/{codigo}', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('DELETE - /v3/pedido/{codigo} - Resposta 200', () => {
      const requestBody = {
        codigo: "",
        idfilial: ""
      }
      // Realiza a requisição DELETE
      cy.request({
        method: 'DELETE', 
        url: '/Pedido/v2_pedido_get_delete2', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });