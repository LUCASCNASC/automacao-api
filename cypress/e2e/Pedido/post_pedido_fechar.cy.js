describe('Pedido - POST - /v3/pedido_fechar', () => {

    it('', () => {

        cy.request({
            method: 'POST',
            url: 'http://localhost:8091/sabium#/Pedido/v2_pedido_fechar',
            failOnStatusCode: false, 
            body: {
                "idfilial": 10006,
                "idpedidovenda": 532,
                "datapagamento": "2024-10-18",
                "copiarecibopagamento": "teste",
                "gerarpedidoloja": false,
                "cartoes": [],
                "carteiradigital": [],
                "cheques": [],
                "parcial": [],
                "itensServico": []
            }

        }).as('postPedidoFechar')

        //validações
        cy.get('@postPedidoFechar')
        .then((response) => {
                console.log(response)
            })

    })
})