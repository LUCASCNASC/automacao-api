describe('Logística - POST - /v3/faturamento_mapa_carga_loja', () => {

    it('', () => {

        cy.request({
            method: 'POST',
            url: 'http://localhost:8091/sabium#/Log%C3%ADstica/v3_post_logistica_faturamentomapacargaloja',
            failOnStatusCode: false, 
            body: {
                    "idFilial": 10050,
                    "idMapaCargaLoja": 110,
                    "idMotorista": 1,
                    "idVeiculo": 9993,
                    "idTipoFrete": 0,
                    "dataSaida": "09/07/2024",
                    "idObservacaoFiscal": 0,
                    "volume": 0,
                    "idVolumeEspecie": 0,
                    "faturarSomente": [
                    {
                        "idPedidoLoja": 1220
                    }
                    ]
                }

        }).as('postFaturamentoMapaCargaLoja')

        //validações
        cy.get('@postFaturamentoMapaCargaLoja')
        .then((response) => {
                console.log(response)
            })

    })
})