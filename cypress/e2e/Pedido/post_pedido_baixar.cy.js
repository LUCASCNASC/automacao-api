describe('Pedido - POST - /v3/pedido_baixar', () => {
    const url = 'http://localhost:8091/sabium#/Pedido/v2_pedido_baixar';
  
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
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
        });
    });
  });