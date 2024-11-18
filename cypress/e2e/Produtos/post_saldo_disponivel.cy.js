describe('Produtos - POST - /v3/saldo_disponivel', () => {

    it('', () => {

        cy.request({
            method: 'POST',
            url: 'http://localhost:8091/sabium#/Produto/v3_produto_saldo_disponivel',
            failOnStatusCode: false, 
            body: {
                "produtos": [
                  {
                    "idFilial": 10050,
                    "idProduto": 5,
                    "idGradeX": 0,
                    "idGradeY": 0,
                    "idLocalSaldo": 1
                  }
                ]
              }

        }).as('postSaldoDisponivel')

        //validações
        cy.get('@postSaldoDisponivel')
        .then((response) => {
                console.log(response)
            })

    })
})