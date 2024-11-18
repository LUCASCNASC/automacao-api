describe('Logística - POST - /v3/faturamento_mapa_carga_cliente', () => {
    const url = 'http://localhost:8091/sabium#/Log%C3%ADstica/v3_post_logistica_faturamentomapacargacliente';
  
    it('POST - /v3/faturamento_mapa_carga_cliente - Resposta 200', () => {
      const requestBody = {
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
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
        });
    });
  });