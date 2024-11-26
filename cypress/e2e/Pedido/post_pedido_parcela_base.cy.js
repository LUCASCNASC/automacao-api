// /v3/pedido_parcela_base - Parcela base
// Parcela base

describe('Pedido - POST - /v3/pedido_parcela_base', () => {
    const url = 'http://localhost:8091/sabium#/Pedido/v2_pedido_parcela_base';
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
    it('POST - /v3/pedido_parcela_base - Resposta 200', () => {
      const requestBody = {
        "idFilial": 0,
        "idPedidoVenda": 0,
        "parcelas": [
          null
        ]
      }
      // Realiza a requisição POST
      cy.request({
        method: 'POST', 
        url, 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.duration).to.be.below(2000); // Verifica se o tempo de resposta foi abaixo de 2000ms
        });
    });
  });