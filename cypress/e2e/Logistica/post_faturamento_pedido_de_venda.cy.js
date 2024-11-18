describe('Logística - POST - /v3/faturamento_pedido_de_venda', () => {
    const url = 'http://localhost:8091/sabium#/Log%C3%ADstica/v3_post_logistica_faturamentopedidovendaporcliente';
  
    it('POST - /v3/faturamento_pedido_de_venda - Resposta 200', () => {
      const requestBody = {
        "idFilial": 10050,
        "cnpjCpf": "10159687080",
        "idMotorista": 1,
        "idVeiculo": 9993,
        "idTipoFrete": 1,
        "dataSaida": "09/07/2024",
        "idObservacaoFiscal": 0,
        "serie": 215,
        "faturarSomente": [
            {
                "idFilial": 10050,
                "idItemBase": 14998
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