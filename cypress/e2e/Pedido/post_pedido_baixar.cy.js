// /v3/pedido_baixar - Baixar pedido
// Baixar pedido de venda. Antes de baixar o pedido, deve fechar o mesmo.

describe('Pedido - POST - /v3/pedido_baixar', () => {
    const url = 'http://localhost:8091/sabium#/Pedido/v2_pedido_baixar';
    const authorization = `Bearer ${Cypress.env('ACCESS_TOKEN')}`
  
    it('POST - /v3/pedido_baixar - Resposta 200', () => {
      const requestBody = {
        "idfilial": 10006,
        "idpedidovenda": 532,
        "datapagamento": "2024-10-15",
        "copiarecibopagamento": "fddfdf",
        "gerarpedidoloja": false,
        "cartoes": [],
        "carteiradigital": [],
        "cheques": [],
        "parcial": [],
        "itensServico": []
      }
      // Realiza a requisição POST
      cy.request({
        method: 'POST', 
        url, 
        //headers: { authorization },
        requestBody
      }).then((response) => {
          expect(response.status).to.eq(200);
        });
    });
  });