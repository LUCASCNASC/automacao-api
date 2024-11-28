// /v3/faturamento_mapa_carga_loja - Dados de mapa de carga loja
// Faturar pedidos de loja que estão em um mapa de carga loja, cujo mapa está na situação carregado. Mapa poderá ser faturado completo ou parcial.

describe('Logística - POST - /v3/faturamento_mapa_carga_loja', () => {
    const token = Cypress.env('AUTH_TOKEN');  // Recuperando o token do arquivo cypress.json
  
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
      cy.request({
        method: 'POST', 
        url: '/Log%C3%ADstica/v3_post_logistica_faturamentomapacargaloja', 
        headers: { Authorization: `Bearer ${token}` },
        requestBody
      })
        .then((response) => {
          expect(response.status).to.eq(200);
        });
    });
  });