describe('Logística - POST - /v3/faturamento_pedido_loja', () => {

    it('', () => {

        cy.request({
            method: 'POST',
            url: 'http://localhost:8091/sabium#/Log%C3%ADstica/v3_post_logistica_faturamentopedidolojaporfilial',
            failOnStatusCode: false, 
            body: {
                    "idFilial": 10050,
                    "idFilialDestino": 10006,
                    "idMotorista": 1,
                    "idVeiculo": 9993,
                    "idTipoFrete": 1,
                    "dataSaida": "09/07/2024",
                    "idObservacaoFiscal": 0,
                    "volume": 0,
                    "idVolumeEspecie": 0,
                    "faturarSomente": [
                    {
                        "idPedidoLoja": 1217
                    }
                    ]
                }

        }).as('postFaturamentoPedidoLoja')

        //validações
        cy.get('@postFaturamentoPedidoLoja')
        .then((response) => {
                console.log(response)
            })

    })
})