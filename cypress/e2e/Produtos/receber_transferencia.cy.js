describe('Produtos - POST - /v3/receber_transferencia', () => {
    const url = 'http://localhost:8091/sabium#/Fisco/Contabil/v3_post_receber_transferencia';
  
    it('POST - /v3/receber_transferencia - Resposta 200', () => {
      const requestBody = {
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
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
        });
    });
  });