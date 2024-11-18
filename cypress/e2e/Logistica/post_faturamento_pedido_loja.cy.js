describe('Logística - POST - /v3/faturamento_pedido_loja', () => {
    const url = 'http://localhost:8091/sabium#/Log%C3%ADstica/v3_post_logistica_faturamentopedidolojaporfilial';
  
    it('POST - /v3/faturamento_pedido_loja - Resposta 200', () => {
      const requestBody = {
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
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
        });
    });
  });