describe('Logística - POST - /v3/faturamento_mapa_carga_cliente', () => {

    it('', () => {

        cy.request({
            method: 'POST',
            url: 'http://localhost:8091/sabium#/Log%C3%ADstica/v3_post_logistica_faturamentomapacargacliente',
            failOnStatusCode: false, 
            body: {
                    "idFilial": 10050,
                    "idMapaCargaCliente": 731,
                    "idMotorista": 1,
                    "idVeiculo": 9993,
                    "idTipoFrete": 0,
                    "dataSaida": "09/07/2024",
                    "idObservacaoFiscal": 0,
                    "serie": "215",
                    "faturarSomente": [
                    {
                        "idFilial": 10050,
                        "idItemBase": 15000
                    }
                    ]
                }

        }).as('postFaturamentoMapaCargaCliente')

        //validações
        cy.get('@postFaturamentoMapaCargaCliente')
        .then((response) => {
                console.log(response)
            })

    })
})