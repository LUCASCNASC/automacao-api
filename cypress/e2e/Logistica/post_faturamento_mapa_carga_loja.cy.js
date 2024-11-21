// /v3/faturamento_mapa_carga_loja - Dados de mapa de carga loja
// Faturar pedidos de loja que estão em um mapa de carga loja, cujo mapa está na situação carregado. Mapa poderá ser faturado completo ou parcial.

describe('Logística - POST - /v3/faturamento_mapa_carga_loja', () => {
    const url = 'http://localhost:8091/sabium#/Log%C3%ADstica/v3_post_logistica_faturamentomapacargaloja';
  
    it('POST - /v3/faturamento_mapa_carga_loja - Resposta 200', () => {
      const requestBody = {
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
      // Realiza a requisição POST
      cy.request('POST', url, requestBody)
        .then((response) => {
          expect(response.status).to.eq(200);
        });
    });
  });