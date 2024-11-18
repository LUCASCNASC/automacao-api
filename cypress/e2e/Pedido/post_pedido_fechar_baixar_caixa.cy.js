describe('Pedido - POST - /v3/pedido_fechar_baixar_caixa', () => {
    const url = 'http://localhost:8091/sabium#/Pagamento%20pedido/v3_pag_pedido_fechar_baixar_caixa';
  
    it('POST - /v3/pedido_fechar_baixar_caixa - Resposta 200', () => {
      const requestBody = {
        "idfilial": 10050,
        "idpedidovenda": 7444,
        "datapagamento": "2024-10-17",
        "tipodocumentoemissao": 69,
        "copiarecibopagamento": "teste",
        "gerarpedidoloja": false,
        "chavemd5": null,
        "contratofinanceira": null,
        "cartoes": [ ],
        "carteiradigital": [],
        "cheques": [],
        "parcial": [],
        "itensServico": [],
        "mapaCargaCliente": []
      }
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
        });
    });
  });