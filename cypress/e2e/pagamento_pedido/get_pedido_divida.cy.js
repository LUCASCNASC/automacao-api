// /v3/pedido_divida/{filial} - Pedidos
// Lista pedidos para pagamento no TOTEM

describe('Pagamento pedido - GET - /v3/pedido_divida/{filial}', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('GET - /v3/pedido_divida/{filial} - Resposta 200', () => {
      const requestBody = {
        filial: "",
        termo: "",
        idtipotef: ""
      }
      // Realiza a requisição GET
      cy.request({
        method: 'GET', 
        url: '/Pagamento%20pedido/v2_pag_pedido_divida', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });