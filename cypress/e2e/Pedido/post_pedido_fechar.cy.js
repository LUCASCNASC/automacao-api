describe('Pedido - POST - /v3/pedido_fechar', () => {
    const url = 'http://localhost:8091/sabium#/Pedido/v2_pedido_fechar';
  
    it('POST - /v3/pedido_fechar - Resposta 200', () => {
      const requestBody = {
        "idfilial": 10006,
        "idpedidovenda": 532,
        "datapagamento": "2024-10-15",
        "copiarecibopagamento": "teste",
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