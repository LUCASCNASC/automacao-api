describe('Pedido - POST - /v3/pedido_baixar', () => {

    it('', () => {

        cy.request({
            method: 'POST',
            url: 'http://localhost:8091/sabium#/Pedido/v2_pedido_baixar',
            failOnStatusCode: false, 
            body: {
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

        }).as('postPedidoBaixar')

        //validações
        cy.get('@postPedidoBaixar')
        .then((response) => {
                console.log(response)
            })

    })
})