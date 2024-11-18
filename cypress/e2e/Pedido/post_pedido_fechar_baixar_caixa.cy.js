describe('Pedido - POST - /v3/pedido_fechar_baixar_caixa', () => {

    it('', () => {

        cy.request({
            method: 'POST',
            url: 'http://localhost:8091/sabium#/Pagamento%20pedido/v3_pag_pedido_fechar_baixar_caixa',
            failOnStatusCode: false, 
            body: {
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

        }).as('postPedidoFecharBaixarCaixa')

        //validações
        cy.get('@postPedidoFecharBaixarCaixa')
        .then((response) => {
                console.log(response)
            })

    })
})