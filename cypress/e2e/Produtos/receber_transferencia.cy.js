describe('Produtos - POST - /v3/receber_transferencia', () => {

    it('', () => {

        cy.request({
            method: 'POST',
            url: 'http://localhost:8091/sabium#/Fisco/Contabil/v3_post_receber_transferencia',
            failOnStatusCode: false, 
            body: {
                    "Filial": 10006,
                    "IgnorarSituacaoSefaz": true,
                    "Notas": [
                    {
                        "IdFilialOrigem": 10050,
                        "NumeroNota": 188,
                        "IdNFeSefaz": "41241077941490000155554090000001881000026592"
                    }
                    ]
                }

        }).as('postReceberTransferencia')

        //validações
        cy.get('@postReceberTransferencia')
        .then((response) => {
                console.log(response)
            })

    })
})